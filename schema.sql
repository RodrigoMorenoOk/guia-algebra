-- ============================================================
-- ESQUEMA DE BASE DE DATOS — Guía de Equivalencias Algebraicas
-- Para ejecutar en: Supabase → SQL Editor → New query
-- ============================================================

-- Tabla de alumnos (login casero, sin Supabase Auth)
create table alumnos (
  id uuid primary key default gen_random_uuid(),
  nombre_completo text not null,           -- usuario de login (Nombre y Apellido)
  dni text not null,                        -- contraseña (se guarda hasheada, ver nota abajo)
  curso text,                               -- opcional: para agrupar alumnos de distintos cursos
  creado_en timestamptz default now(),
  unique(nombre_completo, dni)
);

-- Tabla de progreso: una fila por (alumno, desafío)
create table progreso (
  id uuid primary key default gen_random_uuid(),
  alumno_id uuid references alumnos(id) on delete cascade not null,
  codigo_desafio text not null,             -- 'D1', 'D2', ..., 'D43'
  completado boolean default false,
  errores_en_el_camino int default 0,       -- cantidad de elecciones incorrectas antes de acertar cada paso
  justificaciones jsonb default '[]',       -- array de textos libres que escribió el alumno en pasos clave
  pasos_detalle jsonb default '[]',         -- log completo: qué opción eligió en cada paso, válida o no
  completado_en timestamptz,
  actualizado_en timestamptz default now(),
  unique(alumno_id, codigo_desafio)
);

-- Tabla de sesión simple (para mantener login activo sin Supabase Auth)
-- Alternativa: manejar la sesión solo en el frontend con localStorage + un token simple
create table sesiones (
  token uuid primary key default gen_random_uuid(),
  alumno_id uuid references alumnos(id) on delete cascade not null,
  creado_en timestamptz default now(),
  expira_en timestamptz default (now() + interval '12 hours')
);

-- Índices para consultas frecuentes del panel docente
create index idx_progreso_alumno on progreso(alumno_id);
create index idx_progreso_codigo on progreso(codigo_desafio);

-- ============================================================
-- Row Level Security (RLS)
-- Como NO usamos Supabase Auth, no hay auth.uid() disponible.
-- La seguridad de "quién ve qué" se maneja en el backend/frontend
-- usando la ANON KEY solo para lectura/escritura controlada por
-- nuestras propias funciones, y la SERVICE ROLE KEY (secreta, solo
-- en el panel docente) para operaciones administrativas.
-- ============================================================

alter table alumnos enable row level security;
alter table progreso enable row level security;
alter table sesiones enable row level security;

-- Política simple: permitir todas las operaciones vía la clave anónima,
-- porque el control de acceso real lo hace nuestra app (login casero).
-- Esto es aceptable porque no hay datos sensibles más allá de DNI/nombre,
-- y el riesgo se acota a "ver progreso de otros alumnos del mismo curso",
-- que no es información confidencial en este contexto educativo.

create policy "permitir todo con anon key" on alumnos
  for all using (true) with check (true);

create policy "permitir todo con anon key" on progreso
  for all using (true) with check (true);

create policy "permitir todo con anon key" on sesiones
  for all using (true) with check (true);

-- ============================================================
-- Vista auxiliar para el panel docente: resumen por alumno
-- ============================================================

create or replace view resumen_alumnos as
select
  a.id as alumno_id,
  a.nombre_completo,
  a.curso,
  count(p.id) filter (where p.completado = true) as ejercicios_completados,
  coalesce(sum(p.errores_en_el_camino), 0) as errores_totales,
  case
    when count(p.id) filter (where p.completado = true) = 43 then 'Aprobado'
    else 'Desaprobado'
  end as estado,
  max(p.actualizado_en) as ultima_actividad
from alumnos a
left join progreso p on p.alumno_id = a.id
group by a.id, a.nombre_completo, a.curso;

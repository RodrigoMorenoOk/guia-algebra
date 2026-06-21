import { supabase } from './supabaseClient'

const SESSION_KEY = 'guia_algebra_sesion'

/**
 * Intenta loguear a un alumno verificando nombre completo + DNI
 * contra la tabla `alumnos`. Si coincide, guarda la sesión en
 * localStorage y la devuelve.
 */
export async function loginAlumno(nombreCompleto, dni) {
  const nombreNormalizado = nombreCompleto.trim()
  const dniNormalizado = dni.trim()

  const { data, error } = await supabase
    .from('alumnos')
    .select('id, nombre_completo, curso')
    .ilike('nombre_completo', nombreNormalizado)
    .eq('dni', dniNormalizado)
    .maybeSingle()

  if (error) {
    throw new Error('Error de conexión. Intentá de nuevo en un momento.')
  }

  if (!data) {
    throw new Error('Usuario o contraseña incorrectos. Verificá tu nombre y DNI.')
  }

  const sesion = {
    alumnoId: data.id,
    nombreCompleto: data.nombre_completo,
    curso: data.curso,
    iniciadaEn: new Date().toISOString(),
  }

  localStorage.setItem(SESSION_KEY, JSON.stringify(sesion))
  return sesion
}

export function obtenerSesion() {
  const raw = localStorage.getItem(SESSION_KEY)
  if (!raw) return null
  try {
    return JSON.parse(raw)
  } catch {
    return null
  }
}

export function cerrarSesion() {
  localStorage.removeItem(SESSION_KEY)
}

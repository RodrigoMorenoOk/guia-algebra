import { supabase } from './supabaseClient'
import desafios from '../data/desafios'

/**
 * Devuelve el índice (0-based) del próximo desafío que el alumno
 * debe resolver, basado en cuántos ya completó en orden.
 * Si ya completó todos, devuelve desafios.length (fin de la guía).
 */
export async function obtenerProximoDesafio(alumnoId) {
  const { data, error } = await supabase
    .from('progreso')
    .select('codigo_desafio, completado')
    .eq('alumno_id', alumnoId)
    .eq('completado', true)

  if (error) throw new Error('No se pudo cargar tu progreso. Intentá de nuevo.')

  const codigosCompletados = new Set(data.map((d) => d.codigo_desafio))

  for (let i = 0; i < desafios.length; i++) {
    if (!codigosCompletados.has(desafios[i].codigo)) {
      return i
    }
  }
  return desafios.length // completó todo
}

/**
 * Registra el resultado de un desafío completado: cantidad de errores
 * en el camino, justificaciones de texto libre, y el detalle paso a paso.
 */
export async function guardarDesafioCompletado(alumnoId, codigoDesafio, { erroresEnElCamino, justificaciones, pasosDetalle }) {
  const { error } = await supabase
    .from('progreso')
    .upsert(
      {
        alumno_id: alumnoId,
        codigo_desafio: codigoDesafio,
        completado: true,
        errores_en_el_camino: erroresEnElCamino,
        justificaciones,
        pasos_detalle: pasosDetalle,
        completado_en: new Date().toISOString(),
        actualizado_en: new Date().toISOString(),
      },
      { onConflict: 'alumno_id,codigo_desafio' }
    )

  if (error) throw new Error('No se pudo guardar tu progreso. Intentá de nuevo.')
}

export async function obtenerResumenProgreso(alumnoId) {
  const { data, error } = await supabase
    .from('progreso')
    .select('codigo_desafio, completado, errores_en_el_camino')
    .eq('alumno_id', alumnoId)

  if (error) throw new Error('No se pudo cargar el resumen de progreso.')

  const completados = data.filter((d) => d.completado).length
  const erroresTotales = data.reduce((acc, d) => acc + (d.errores_en_el_camino || 0), 0)

  return {
    completados,
    total: desafios.length,
    erroresTotales,
    finalizado: completados === desafios.length,
  }
}

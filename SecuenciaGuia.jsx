import { useState, useEffect } from 'react'
import Desafio from './Desafio'
import desafios from '../data/desafios'
import { obtenerProximoDesafio, guardarDesafioCompletado } from '../lib/progreso'

export default function SecuenciaGuia({ sesion, onLogout }) {
  const [indiceActual, setIndiceActual] = useState(null)
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    cargarProgreso()
  }, [])

  async function cargarProgreso() {
    setCargando(true)
    setError('')
    try {
      const proximo = await obtenerProximoDesafio(sesion.alumnoId)
      setIndiceActual(proximo)
    } catch (err) {
      setError(err.message)
    } finally {
      setCargando(false)
    }
  }

  async function handleCompletado(resultado) {
    const desafioActual = desafios[indiceActual]
    try {
      await guardarDesafioCompletado(sesion.alumnoId, desafioActual.codigo, resultado)
      setIndiceActual((prev) => prev + 1)
    } catch (err) {
      setError(err.message)
    }
  }

  if (cargando) {
    return <div className="pantalla-centrada">Cargando tu progreso...</div>
  }

  if (error) {
    return (
      <div className="pantalla-centrada">
        <div className="error-msg">{error}</div>
        <button className="btn-primario" style={{ width: 'auto' }} onClick={cargarProgreso}>
          Reintentar
        </button>
      </div>
    )
  }

  if (indiceActual >= desafios.length) {
    return (
      <div className="pantalla-centrada">
        <div className="final show" style={{ maxWidth: 480 }}>
          <div className="seal">🎓 ¡Guía completa!</div>
          <p>
            Completaste los {desafios.length} desafíos de la guía, {sesion.nombreCompleto}.
            Tu docente ya puede ver tu resultado.
          </p>
          <button className="btn-primario" style={{ width: 'auto' }} onClick={onLogout}>
            Cerrar sesión
          </button>
        </div>
      </div>
    )
  }

  return (
    <div style={{ padding: '28px 18px 80px' }}>
      <div style={{ maxWidth: 700, margin: '0 auto 16px', display: 'flex', justifyContent: 'flex-end' }}>
        <button
          onClick={onLogout}
          style={{
            background: 'none', border: '1px solid var(--line)', borderRadius: 8,
            padding: '6px 12px', fontSize: 13, color: 'var(--ink-soft)', cursor: 'pointer',
          }}
        >
          {sesion.nombreCompleto} · Cerrar sesión
        </button>
      </div>
      <Desafio
        desafio={desafios[indiceActual]}
        indice={indiceActual}
        total={desafios.length}
        onCompletado={handleCompletado}
      />
    </div>
  )
}

import { useState } from 'react'
import { loginAlumno } from '../lib/auth'

export default function Login({ onLoginExitoso }) {
  const [nombre, setNombre] = useState('')
  const [dni, setDni] = useState('')
  const [error, setError] = useState('')
  const [cargando, setCargando] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')

    if (!nombre.trim() || !dni.trim()) {
      setError('Completá ambos campos.')
      return
    }

    setCargando(true)
    try {
      const sesion = await loginAlumno(nombre, dni)
      onLoginExitoso(sesion)
    } catch (err) {
      setError(err.message)
    } finally {
      setCargando(false)
    }
  }

  return (
    <div className="pantalla-centrada">
      <div className="tarjeta-login">
        <h1>Guía de Equivalencias Algebraicas</h1>
        <p className="subt">Ingresá con tu nombre y apellido, y tu DNI.</p>

        {error && <div className="error-msg">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="campo">
            <label htmlFor="nombre">Nombre y Apellido</label>
            <input
              id="nombre"
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              placeholder="Ej: Juan Pérez"
              autoComplete="username"
            />
          </div>

          <div className="campo">
            <label htmlFor="dni">DNI</label>
            <input
              id="dni"
              type="password"
              value={dni}
              onChange={(e) => setDni(e.target.value)}
              placeholder="Sin puntos"
              autoComplete="current-password"
              inputMode="numeric"
            />
          </div>

          <button type="submit" className="btn-primario" disabled={cargando}>
            {cargando ? 'Ingresando...' : 'Ingresar'}
          </button>
        </form>
      </div>
    </div>
  )
}

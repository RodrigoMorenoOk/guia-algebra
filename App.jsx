import { useState, useEffect } from 'react'
import Login from './components/Login'
import SecuenciaGuia from './components/SecuenciaGuia'
import { obtenerSesion, cerrarSesion } from './lib/auth'
import './estilos-globales.css'
import './estilos-desafio.css'

export default function App() {
  const [sesion, setSesion] = useState(null)
  const [cargandoSesion, setCargandoSesion] = useState(true)

  useEffect(() => {
    const sesionGuardada = obtenerSesion()
    setSesion(sesionGuardada)
    setCargandoSesion(false)
  }, [])

  function handleLoginExitoso(nuevaSesion) {
    setSesion(nuevaSesion)
  }

  function handleLogout() {
    cerrarSesion()
    setSesion(null)
  }

  if (cargandoSesion) {
    return <div className="pantalla-centrada">Cargando...</div>
  }

  if (!sesion) {
    return <Login onLoginExitoso={handleLoginExitoso} />
  }

  return <SecuenciaGuia sesion={sesion} onLogout={handleLogout} />
}

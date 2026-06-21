import { useState, useEffect, useRef } from 'react'
import katex from 'katex'

function Tex({ children, display = false }) {
  const ref = useRef(null)
  useEffect(() => {
    if (ref.current) {
      try {
        katex.render(children, ref.current, { throwOnError: false, displayMode: display })
      } catch {
        ref.current.textContent = children
      }
    }
  }, [children, display])
  return <span ref={ref}></span>
}

function RichText({ text }) {
  const partes = text.split(/\$([^$]+)\$/g)
  return (
    <>
      {partes.map((parte, i) =>
        i % 2 === 1 ? <Tex key={i}>{parte}</Tex> : <span key={i}>{parte}</span>
      )}
    </>
  )
}

export default function Desafio({ desafio, indice, total, onCompletado }) {
  const [pasoActual, setPasoActual] = useState(0)
  const [pasosResueltos, setPasosResueltos] = useState([])
  const [seleccion, setSeleccion] = useState(null)
  const [intentosFallidos, setIntentosFallidos] = useState({})
  const [erroresEnElCamino, setErroresEnElCamino] = useState(0)
  const [justificaciones, setJustificaciones] = useState([])
  const [logPasos, setLogPasos] = useState([])
  const [textoJustificacion, setTextoJustificacion] = useState('')
  const [guardando, setGuardando] = useState(false)

  // reset cuando cambia el desafío
  useEffect(() => {
    setPasoActual(0)
    setPasosResueltos([])
    setSeleccion(null)
    setIntentosFallidos({})
    setErroresEnElCamino(0)
    setJustificaciones([])
    setLogPasos([])
    setTextoJustificacion('')
  }, [desafio])

  const paso = desafio.pasos[pasoActual]
  const idsDeshabilitados = intentosFallidos[pasoActual] || []

  function elegirOpcion(opcion) {
    if (seleccion) return // ya eligió algo válido en este paso, no permitir más clicks

    setLogPasos((prev) => [...prev, { paso: pasoActual + 1, opcion: opcion.id, valida: opcion.esValida }])

    if (opcion.esValida) {
      setSeleccion(opcion)
      if (paso.pideJustificacionLibre && textoJustificacion.trim()) {
        setJustificaciones((prev) => [...prev, { paso: pasoActual + 1, texto: textoJustificacion.trim() }])
      }
    } else {
      setErroresEnElCamino((prev) => prev + 1)
      setIntentosFallidos((prev) => ({
        ...prev,
        [pasoActual]: [...(prev[pasoActual] || []), opcion.id],
      }))
    }
  }

  async function avanzar() {
    const resuelto = { pasoIdx: pasoActual, opcionElegida: seleccion }
    const nuevosResueltos = [...pasosResueltos, resuelto]
    setPasosResueltos(nuevosResueltos)
    setSeleccion(null)
    setTextoJustificacion('')

    if (pasoActual + 1 < desafio.pasos.length) {
      setPasoActual(pasoActual + 1)
    } else {
      setGuardando(true)
      await onCompletado({
        erroresEnElCamino,
        justificaciones,
        pasosDetalle: logPasos,
      })
      setGuardando(false)
    }
  }

  return (
    <div className="sheet">
      <div className="top">
        <div className="tag">Parte C · Nivel {desafio.nivel} · Desafío</div>
        <div className="num">{desafio.codigo}</div>
      </div>

      <div className="trail">
        {desafio.pasos.map((_, i) => (
          <div
            key={i}
            className={
              'seg' + (i < pasoActual ? ' done' : i === pasoActual ? ' now' : '')
            }
          />
        ))}
      </div>

      <div className="contador-global">
        Ejercicio {indice + 1} de {total}
      </div>

      <div className="explain">
        <div className="label">Antes de empezar — la propiedad que vas a usar</div>
        <h2>{desafio.explicacion.titulo}</h2>
        <p><RichText text={desafio.explicacion.texto} /></p>
        <div className="formula-box">
          <Tex display>{desafio.explicacion.formulaGeneral}</Tex>
        </div>
        <p><RichText text={desafio.explicacion.notaAplicacion} /></p>
      </div>

      <div className="consigna">
        <div className="label">Consigna</div>
        <div className="statement">{desafio.consigna.textoConsigna}</div>
        <div className="equiv">
          <Tex display>{`${desafio.consigna.expresionA} \\;\\equiv\\; ${desafio.consigna.expresionB}`}</Tex>
        </div>
      </div>

      {pasosResueltos.map((r, i) => (
        <div className="resolved-row" key={i}>
          <span className="prop-chip">Paso {i + 1}</span>
          <span style={{ flex: 1, overflowX: 'auto' }}>
            <Tex>{r.opcionElegida.expr}</Tex>
          </span>
        </div>
      ))}

      <div className="step">
        <div className="step-head">
          <div className="dot">{pasoActual + 1}</div>
          <div className="prompt"><RichText text={paso.prompt} /></div>
        </div>

        <div className="options">
          {paso.opciones.map((o) => {
            const deshabilitada = idsDeshabilitados.includes(o.id) || (seleccion && seleccion.id !== o.id)
            const marcarOk = seleccion && seleccion.id === o.id
            const marcarError = idsDeshabilitados.includes(o.id) && !seleccion
            return (
              <button
                key={o.id}
                className={'opt' + (marcarOk ? ' is-correct' : '') + (marcarError ? ' is-wrong' : '')}
                disabled={deshabilitada || !!seleccion}
                onClick={() => elegirOpcion(o)}
              >
                <span className="letter">{o.id}</span>
                <span className="opt-body">
                  <span className="opt-expr"><Tex>{o.expr}</Tex></span>
                  <div className="opt-just">{o.justificacionCorta}</div>
                </span>
              </button>
            )
          })}
        </div>

        {paso.pideJustificacionLibre && !seleccion && (
          <div className="justif show">
            <label>Tu justificación (opcional, escribila con tus palabras):</label>
            <textarea
              placeholder="Explicá por qué este paso es válido..."
              value={textoJustificacion}
              onChange={(e) => setTextoJustificacion(e.target.value)}
            />
          </div>
        )}

        {idsDeshabilitados.length > 0 && !seleccion && (
          <div className="feedback show wrong">
            {paso.opciones.find((o) => o.id === idsDeshabilitados[idsDeshabilitados.length - 1]).feedback}
          </div>
        )}

        {seleccion && (
          <>
            <div className="feedback show ok">{seleccion.feedback}</div>
            <button className="continue-btn show" onClick={avanzar} disabled={guardando}>
              {guardando ? 'Guardando...' : pasoActual + 1 < desafio.pasos.length ? 'Continuar →' : 'Finalizar ejercicio →'}
            </button>
          </>
        )}
      </div>
    </div>
  )
}

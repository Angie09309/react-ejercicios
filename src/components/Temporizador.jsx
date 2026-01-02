import { useEffect, useState } from 'react'

const Temporizador = () => {

    const [segundo, setSegundo] = useState(0)
    const [estado, setEstado] = useState(false)
    const [mensaje, setMensaje] = useState("")

    useEffect(() => {
        if (estado) {
            setMensaje("Temporizador iniciado")
        } else {
            setMensaje("Temporizador detenido")
        }
    }, [estado])

    const reiniciar = () => {
        setEstado(false)
        setSegundo(0)
        setMensaje("Temporizador detenido")
    }

    useEffect(() => {
        let intervalo = null

        if (estado) {
            intervalo = setInterval(() => {
                setSegundo(prev => prev + 1)
            }, 1000)
        }

        return () => {
            if (intervalo) {
                clearInterval(intervalo)
            }
        }
    }, [estado])

    return (
        <div>
            <button onClick={() => setEstado(true)}>Iniciar</button>
            <button onClick={() => setEstado(false)}>Pausar</button>
            <button onClick={reiniciar}>Reiniciar</button>
            <p>{mensaje}</p>
            <p>{segundo}</p>
        </div>
    )
}

export default Temporizador
import { useEffect, useState } from 'react'

const BotonColor = () => {

    const [activo, setActivo] = useState(false)
    const color = activo ? "pink" : "yellow"

    const [text, setText] = useState("Botón inactivo")

    useEffect(() => {
        if (activo) {
            setText("Botón activo")
        } else {
            setText("Botón inactivo")
        }
    }, [activo])

    return (
        <div>
            <h1>{text}</h1>

            <button
                style={{ backgroundColor: color }}
                onClick={() => setActivo(prev => !prev)}>
                {activo ? "Activo" : "Inactivo"}
            </button>
        </div>
    )
}

export default BotonColor
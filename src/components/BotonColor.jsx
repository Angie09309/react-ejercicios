import { useState } from 'react'

const BotonColor = () => {

    const [activo, setActivo] = useState(false)
    const color = activo ? "pink" : "yellow"


    return (
        <div>
            <button
                style={{ backgroundColor: color }}
                onClick={() => setActivo(prev => !prev)}>
                {activo ? "Activo" : "Inactivo"}

            </button>

        </div>
    )
}

export default BotonColor
import { useState } from 'react'

const Toggle = () => {
    const [estado, setEstado] = useState(false)

    return (
        <div>
            <button onClick={() => setEstado(prev => !prev)}>
                {estado ? "Ocultar" : "Mostrar"}
            </button>
            {estado && <p>Click</p>}
        </div>

    )
}

export default Toggle
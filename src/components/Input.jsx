import React, { useState } from 'react'

const Input = () => {

    const [cambio, setCambio] = useState("");

    const nombre = (e) => {
        const nuevoNombre = e.target.value
        setCambio(nuevoNombre)
    }

    return (
        <div>
            <input onChange={nombre} type="text" placeholder='Escribe tu nombre' />

            {cambio.length >= 5
                ? <p>Hola {cambio}</p>
                : <p>Escribe al menos 5 letras</p>}
        </div>

    )
}

export default Input
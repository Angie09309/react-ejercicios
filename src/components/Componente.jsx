import { useState } from 'react'

const Componente = () => {

    const [numero, setNumero] = useState(0)

    const cambioNumero = () => {
        if (numero < 5) {
            setNumero(prev => prev + 1)
        }
    }

    return (
        <div>
            <button onClick={cambioNumero}>Agregar</button>

            <p>Valor: {numero}</p>

            {numero < 5
                ? <p>Sigue agregando</p>
                : <p>¡Llegaste al máximo!</p>
            }
        </div>
    )
}

export default Componente

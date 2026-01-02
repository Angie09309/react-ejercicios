import { useState } from 'react'

const Botón = () => {

    const [numeros, setNumeros] = useState(0)


    return (
        <div>
            <button onClick={() => setNumeros(prev => prev + 1)}>Clik </button>

            {numeros < 5 ? <p>Sigue haciendo clic</p> : <p>¡Llegaste a mas de 5 clics! </p>}
        </div>
    )
}

export default Botón
import { useState } from 'react'

const ContadorParOImpar = () => {

    const [numero, setNumero] = useState(0)

    return (
        <div>
            <button onClick={() => setNumero(prev => prev + 1)}>sumar</button>
            <p>Valor: {numero}</p>

            {numero % 2 === 0
                ? <p>Es par</p>
                : <p>Es impar</p>
            }
        </div>
    )
}

export default ContadorParOImpar
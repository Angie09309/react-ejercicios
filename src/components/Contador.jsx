import { useEffect, useState } from 'react'

const Contador = () => {

    const [count, setCount] = useState(0)

    const sumar = () => setCount(count + 1)
    const restar = () => setCount(count - 1)
    const cero = () => setCount(0)

    const [mensaje, setMensaje] = useState("")

    useEffect(() => {

        setMensaje("cambio el contador")
        setTimeout(() => {
            setMensaje("")
        }, 1000);
    }, [count])


    return (
        <div>
            <button onClick={sumar}>sumar</button>
            <p>valor actual: {count}</p>
            <button onClick={restar}>restar</button>
            <br />
            <button onClick={cero}>reiniciar</button>

            <p> {mensaje} </p>

        </div>
    )
}

export default Contador
import { useEffect, useState } from "react"


const AvisoAutomático = () => {

    const [activo, setActivo] = useState(false)
    const [titulo, setTitulo] = useState("aviso Importante")

    useEffect(() => {

        if (activo) {
            setTitulo("Informacion")
        } else {
            setTitulo("aviso Importante")
        }

    }, [activo])

    return (
        <div>
            <button onClick={() => setActivo(prev => !prev)}>
                <p>{titulo}</p>
            </button>
        </div>
    )
}

export default AvisoAutomático
import { useState } from "react"

export function Contador() {
    const [contador, setContador] = useState(0)

    const aumentar = () => {
        setContador(contador+1)
    }
    
    return (
        <div>
            <h2>{contador}</h2>
            <button onClick={aumentar} type="button">Incrementar</button>
        </div>
    )
}
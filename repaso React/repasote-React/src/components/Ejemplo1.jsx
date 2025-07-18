import { useState } from "react"
function Ejemplo1() {
    const [numero, setNumero] = useState(0)
    const [valor, setValor] = useState(0)
    let resultado = numero * valor
  

    const aumentar = () => {
        setNumero(numero + 1)
    }
    const disminuir = () => {
        setNumero(numero - 1)
    }
    
    const guardarValor=(event)=>{
        setValor(event.target.value)  
    }
    return (

        <>
            <h1 className="mb-7">Ejercicio boton</h1>
            <label className="p-2">Valor:</label><input onChange={guardarValor}></input>
            <div className="p-3 m-4 gap-4">
                <button onClick={aumentar}>Sumar</button>
                <button onClick={disminuir}>Restar</button>
            </div>

            <h2>{numero} X {valor} = {resultado}</h2>
        </>
    )
}

export default Ejemplo1
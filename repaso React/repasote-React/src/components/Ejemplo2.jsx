import { useState } from "react"
function Ejemplo2(){
    const [usuario, setUsuario] = useState("")
    const [contra,setContra] = useState("")

    const input_contra = (event)=>{
        setContra( event.target.value)
        
    }
    const input_usuario = (event)=>{
        setUsuario( event.target.value)
        
    }
    
    
    return (
        <>
        <h1 className="p-7">Ejemplo2</h1>

        <label className="m-2">Usuario:</label><input className="mt-7" onChange={input_usuario}></input>
        <label className="m-2">Contraseña:</label><input type="password" className="mt-7" onChange={input_contra}></input>
        <h2 className="p-7">Tu usuario: {usuario}</h2>
        <h2 className="p-7">Tu contraseña: {contra}</h2>
        </>
    )
}

export default Ejemplo2
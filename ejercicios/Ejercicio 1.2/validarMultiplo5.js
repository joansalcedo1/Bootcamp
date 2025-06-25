
const entrada =document.getElementById("entrada")
const btnC = document.getElementById("btnC")
const salida=document.getElementById("salida")
let numero=0

entrada.addEventListener("input",(e)=>{
    console.log(e)
    numero= e.target.value 
    console.log(numero)
})

btnC.addEventListener("click",()=>{
    let hijo =document.createElement("p")

     if (numero % 5 == 0) {
        hijo.innerHTML =`${numero} es multiplo de 5`
    } else {
        hijo.innerHTML =`${numero} <b> NO </b> es multiplo de 5`
    }
    salida.append(hijo)
})

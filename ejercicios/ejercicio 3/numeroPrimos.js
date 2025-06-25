const entrada =document.getElementById("entrada")
const btnC = document.getElementById("btnC")
const salida = document.getElementById("salida")
let cantidad0 = 0 

entrada.addEventListener("input",(e)=>{
    valor= e.target.value
    console.log(valor)
    cantidad0=0
})

btnC.addEventListener("click",()=>{
     let hijo =document.createElement("p")
    console.log("entre al evento")
    for (let i=1; i<=valor; i++){
        console.log("entre al for")
        modulo = valor%i
        if(modulo==0){
            cantidad0++
        }
    }
    if(cantidad0>2){
         hijo.innerHTML = `${valor} No es primo` 
    }else{
         hijo.innerHTML = `${valor} Es primo` 
    }
    salida.append(hijo)
    console.log(cantidad0)
})


const entrada = document.getElementById("entrada")
const btnC = document.getElementById("btnC")
const salida = document.getElementById("salida")
let  fibo = [0,1]
let numero=0

entrada.addEventListener("input",(e)=>{
     numero= e.target.value 
     console.log(numero)
})

btnC.addEventListener("click",()=>{
    let hijo =document.createElement("p")
    for (let i=2;i<entrada;i++){
        let nAntes=i-1
        let nDespues=i-2
        let suma = nAntes+nDespues
        fibo.push(suma)
        hijo.innerHTML = `${fibo} Esta es la serie de fibo hasta ${entrada.value}` 
        
    }
    salida.append(hijo)
    console.log(fibo)
})
const entrada = document.getElementById("entrada")
const salida = document.getElementById("salida")
const btnC = document.getElementById("btnC")

entrada.addEventListener("input", (e) => {
    valor = e.target.value
    console.log(valor)
})

btnC.addEventListener("click", () => {
    let hijo = document.createElement("p")
    console.log("Escuche el evento")
    for (let i = 2; i <= valor; i++) {
        console.log(i)
        if (i == valor && valor % i == 0) {
            hijo.innerHTML = `${valor} es primo`
            break
        } else if (valor % i == 0) {
            hijo.innerHTML = `${valor} <b> NO </b> es primo`
            break
        }
    }

    salida.append(hijo)
})
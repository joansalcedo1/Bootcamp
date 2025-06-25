n = [2, 6, 1, 4, 8]
let sePermuto = false
function permutacion(n) {
    for (let i = 0; i < n.length - 1; i++) {

        if (n[i] < n[i + 1]) {
        } else {
            let aux = n[i]
            n[i] = n[i + 1]
            n[i + 1] = aux
            sePermuto = true
        }
    } console.log(n)
    return {"arreglo":n, "sePermuto":sePermuto}
}

let estado = false
do {
    let { arreglo, sePermuto } = permutacion(n)
    console.log(arreglo)
    estado = sePermuto
    console.log(estado)
} while (estado)
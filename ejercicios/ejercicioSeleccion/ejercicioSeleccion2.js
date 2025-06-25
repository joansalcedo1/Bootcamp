const n = [2, 6, 1, 4]
const n1= [4,2,7,1]

console.log("0 ordenada: " + n)
for (let i = 0; i < n.length; i++) {
    let elemntoMinimo = n[i]
    console.log("hola")
    if (elemntoMinimo > n[i+1]) {
        let aux = n[i] //2
        n[i+1] = aux
        n[i] = elemntoMinimo
        console.log("1 ordenada: " + n)
        for (let x = i; x < n.length; x++) {
            elemntoMinimo = n[1] //6
            if (elemntoMinimo > n[i]) {
                aux = n[1] //6
                elemntoMinimo = n[i] //2
                n[i] = aux 
                n[1] = elemntoMinimo
                console.log("2 ordenada: " + n)
            }
        }
        
    }
}
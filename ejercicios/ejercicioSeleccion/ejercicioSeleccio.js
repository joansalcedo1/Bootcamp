const n = [2, 6, 1, 4]

for (let j = 0; j < n.length; j++) {
    let datoMin = n[j]
    let posMin = j
    for (let i = j; i < n.length; i++) {
        if (datoMin > n[i + 1]) {
            datoMin = n[i + 1]
            posMin = i + 1
            console.log("dato:", datoMin, "pos:", posMin)
           
        }

    }
    console.log("dato fin", datoMin, "pos fin", posMin)
    n[posMin]=n[j]
    n[j]= datoMin
    console.log(n)
}

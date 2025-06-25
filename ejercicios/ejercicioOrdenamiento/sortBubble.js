const n=[2,6,1,4,8]
const n1=[]
for (let i=0; i<n.length; i++){
    if(n[i]<n[i+1]){
        n1.push(n[i+1])
    }
    else if (n[i]<n[i-1]){
        n1.push(n[i])
    }else{
        n1.push(n[i-1])
    }
}
console.log(n)
console.log(n1)
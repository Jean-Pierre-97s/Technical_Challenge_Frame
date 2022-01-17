export function divisor(num) :Number[]{
    let res = []
    let contador = 1;
    while(contador !== num+1){
        if(num % contador === 0){
            res.push(contador)
        }
        contador++
    }
    console.log(res)
    return res
}

function divisor(num){
    const res = [];
    for(let contador = 0; contador != num+1; contador++){
        if(num % contador == 0){
            res.push(contador)
        }
    }
    return res
}

module.exports = divisor
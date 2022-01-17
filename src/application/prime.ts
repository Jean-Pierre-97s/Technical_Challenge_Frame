let primeNumbers = []

export function prime(num){
  let contador = 1;
  while(contador !== num+1){
      if(num % contador === 0){
        if(isPrime(contador) === true){
          primeNumbers.push(contador)
        }
      }
      contador++
  }
  console.log(primeNumbers)
  return primeNumbers
}

function isPrime(div) {
  for(let i = 2; i <div; i++)
    if(div % i === 0) {
        return false
    };
  return div > 1;
}
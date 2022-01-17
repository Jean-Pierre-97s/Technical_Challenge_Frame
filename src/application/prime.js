function prime(num){
  const primeNumbers = []
  for(let contador = 1; contador != num+1; contador++){
    if(num % contador === 0 && isPrime(contador) == true){
      primeNumbers.push(contador)
    }
  }
  return primeNumbers
}

function isPrime(div) {
  for(let i = 2; i <div; i++)
    if(div % i === 0) {
      return false
    };
  return div > 1;
}

module.exports = prime
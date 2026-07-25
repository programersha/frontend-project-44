import { gameBase, getRandomIntInclusive } from '../index.js'

const primeGame = () => {
  const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".'
  gameBase(gameRules, getQandA)
}

const getQandA = () => {
  const num = getRandomIntInclusive(0, 100)

  return {
    question: num,
    answer: isPrime(num) ? 'yes' : 'no',
  }
}

const isPrime = (num) => {
  if (num < 2) {
    return false
  }

  if (num === 2) {
    return true
  }

  if (num % 2 === 0) {
    return false
  }

  for (let i = 3; i * i <= num; i += 2) {
    if (num % i === 0) {
      return false
    }
  }

  return true
}

export default primeGame

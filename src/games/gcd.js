import { gameBase, getRandomIntInclusive } from '../index.js'

const gcdGame = () => {
  const gameRules = 'Find the greatest common divisor of given numbers.'
  gameBase(gameRules, getQandA)
}

const getQandA = () => {
  const firstNum = getRandomIntInclusive(0, 100)
  const secondNum = getRandomIntInclusive(0, 100)
  const answer = gcd(firstNum, secondNum)

  return {
    question: `${firstNum} ${secondNum}`,
    answer: `${answer}`,
  }
}

const gcd = (a, b) => {
  if (b) {
    while (b !== 0) {
      let temp = a
      a = b
      b = temp % b
    }
  }
  return a
}

export default gcdGame

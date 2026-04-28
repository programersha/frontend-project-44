import { gameBase, generateNumber } from '../index.js'

const evenGame = () => {
  const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".'
  gameBase(gameRules, getQandA)
}

const getQandA = () => {
  const num = generateNumber()

  return {
    question: num,
    answer: isEven(num) ? 'yes' : 'no',
  }
}

const isEven = (num) => {
  if (num > 1 && num % 2 === 0) {
    return true
  }
  else {
    return false
  }
}

export default evenGame

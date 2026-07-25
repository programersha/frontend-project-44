import { gameBase, getRandomIntInclusive } from '../index.js'

const calcGame = () => {
  const gameRules = 'What is the result of the expression?'
  gameBase(gameRules, getQandA)
}

const getQandA = () => {
  const firstNum = getRandomIntInclusive(0, 100)
  const secondNum = getRandomIntInclusive(0, 100)
  const operator = generateOperator()
  let question = ''
  let answer = 0

  switch (operator) {
    case '+':
      question += `${firstNum} + ${secondNum}`
      answer += firstNum + secondNum
      break
    case '-':
      question += `${firstNum} - ${secondNum}`
      answer += firstNum - secondNum
      break
    case '*':
      question += `${firstNum} * ${secondNum}`
      answer += firstNum * secondNum
      break
  }

  return {
    question: question,
    answer: `${answer}`,
  }
}

const generateOperator = () => {
  const operators = ['+', '-', '*']
  const operator = operators[getRandomIntInclusive(0, operators.length - 1)]
  return operator
}

export default calcGame

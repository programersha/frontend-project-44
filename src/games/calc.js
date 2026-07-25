import { gameBase, getRandomIntInclusive } from '../index.js'

const calcGame = () => {
  const gameRules = 'What is the result of the expression?'
  gameBase(gameRules, getQandA)
}

const getQandA = () => {
  const firstNum = getRandomIntInclusive(0, 100)
  const secondNum = getRandomIntInclusive(0, 100)
  const operator = generateOperator()
  const { question, answer } = calc(firstNum, secondNum, operator)
  
  return {
    question: question,
    answer: `${answer}`,
  }
}

const calc = (firstNum, secondNum, operator) => {
  switch (operator) {
    case '+':
      return {
        question: `${firstNum} + ${secondNum}`,
        answer: firstNum + secondNum
      }
    case '-':
      return {
        question: `${firstNum} - ${secondNum}`,
        answer: firstNum - secondNum
      }
    case '*':
      return {
      question: `${firstNum} * ${secondNum}`,
      answer: firstNum * secondNum
      }
  }
}

const generateOperator = () => {
  const operators = ['+', '-', '*']
  const operator = operators[getRandomIntInclusive(0, operators.length - 1)]
  return operator
}

export default calcGame

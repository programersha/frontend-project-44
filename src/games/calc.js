import gameBase from '../index.js'

const calcGame = () => {
  const gameRules = 'What is the result of the expression?'
  gameBase(gameRules, getQandA)
}

const getQandA = () => {
  const firstNum = generateNumber()
  const secondNum = generateNumber()
  const operator = generateOperator()
  let question = ''
  let answer = 0

  switch (operator) {
    case '+':
      question += `'${firstNum} + ${secondNum}'`
      answer += firstNum + secondNum
      break
    case '-':
      question += `'${firstNum} - ${secondNum}'`
      answer += firstNum - secondNum
      break
    case '*':
      question += `'${firstNum} * ${secondNum}'`
      answer += firstNum * secondNum
      break
  }

  return {
    question: question,
    answer: `${answer}`,
  }
}

const generateNumber = () => {
  return Math.floor(Math.random() * 100) + 1
}
const generateOperator = () => {
  const operators = ['+', '-', '*']
  const operator = operators[Math.floor(Math.random() * operators.length)]
  return operator
}

export default calcGame

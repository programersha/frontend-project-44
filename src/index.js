import greeting from './cli.js'
import readlineSync from 'readline-sync'

const gameBase = (gameRules, getQandA) => {
  const name = greeting()
  console.log(gameRules)
  let correctAnswers = 0
  let answerIsTrue = true
  while (correctAnswers < 3 && answerIsTrue === true) {
    const { question, answer } = getQandA()
    console.log(`Question: ${question}`)
    const userAnswer = readlineSync.question('Your answer: ')
    if (userAnswer === answer) {
      console.log('Correct!')
      correctAnswers += 1
    }
    else {
      answerIsTrue = false
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`)
    }
  }

  if (answerIsTrue) {
    console.log(`Congratulations, ${name}!`)
  }
  else {
    console.log(`Let's try  try again, ${name}!`)
  }
  return
}

export default gameBase

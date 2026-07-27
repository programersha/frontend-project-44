import greeting from './cli.js'
import readlineSync from 'readline-sync'

export const gameBase = (gameRules, getQandA) => {
  const name = greeting()
  console.log(gameRules)
  const roundsCount = 3
  let correctAnswers = 0
  while (correctAnswers < roundsCount) {
    const { question, answer } = getQandA()
    console.log(`Question: ${question}`)
    const userAnswer = readlineSync.question('Your answer: ')
    if (userAnswer !== answer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`)
      console.log(`Let's try again, ${name}!`)
      return
    }
    console.log('Correct!')
    correctAnswers += 1
  }

  console.log(`Congratulations, ${name}!`)
  
  return
}

export const getRandomIntInclusive = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

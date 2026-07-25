import greeting from './cli.js'
import readlineSync from 'readline-sync'

export const gameBase = (gameRules, getQandA) => {
  const name = greeting()
  console.log(gameRules)
  let correctAnswers = 0
  while (correctAnswers < 3) {
    const { question, answer } = getQandA()
    console.log(`Question: ${question}`)
    const userAnswer = readlineSync.question('Your answer: ')
    if (userAnswer === answer) {
      console.log('Correct!')
      correctAnswers += 1
    }
    else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`)
      console.log(`Let's try again, ${name}!`)
      return
    }
  }

  console.log(`Congratulations, ${name}!`)
  
  return
}

export const getRandomIntInclusive = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

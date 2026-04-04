import greeting from '../cli.js'
import readlineSync from 'readline-sync'

const evenGame = () => {
  const name = greeting()
  console.log('Answer "yes" if the number is even, otherwise answer "no".')

  let countRightAnswer = 0
  let falseAnswer = false
  while (falseAnswer === false && countRightAnswer !== 3) {
    const num = Math.floor(Math.random() * 100) + 1
    console.log(`Question: ${num}`)
    const userAnswer = readlineSync.question('Your answer: ')
    const rightAnswer = isEven(num) ? 'yes' : 'no'
    if (userAnswer === rightAnswer) {
      console.log('Correct!')
      countRightAnswer += 1
    }
    else {
      falseAnswer = true
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`)
    }
  }

  if (falseAnswer) {
    console.log(`Let's try  try again, ${name}!`)
  }
  else {
    console.log(`Congratulations, ${name}!`)
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

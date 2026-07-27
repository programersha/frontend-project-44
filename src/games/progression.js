import { gameBase, getRandomIntInclusive } from '../index.js'

const progressionGame = () => {
  const gameRules = 'What number is missing in the progression?'
  gameBase(gameRules, getQandA)
}

const getQandA = () => {
  const progLength = getRandomIntInclusive(5, 10)
  const start = getRandomIntInclusive(0, 100)
  const step = getRandomIntInclusive(1, 100)

  return progression(progLength, start, step)
}

const progression = (progLength, start, step) => {
  const progression = generateProgression(start, step, progLength)
  const emptyElementIndex = getRandomIntInclusive(0, progLength - 1)
  const answer = progression[emptyElementIndex]
  progression[emptyElementIndex] = '..'
  const question = progression.join(' ')

  return {
    question: question,
    answer: answer,
  }

}

const generateProgression = (start, step, length) => {
  let progression = []

  for (let i = 0; i < length; i++) {
    let currentElement = start + i * step
    progression.push(`${currentElement}`)
  }

  return progression
}

export default progressionGame

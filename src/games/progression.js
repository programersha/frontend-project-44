import { gameBase, generateNumber } from '../index.js'

const progressionGame = () => {
  const gameRules = 'What number is missing in the progression?'
  gameBase(gameRules, getQandA)
}

const getQandA = () => {
  const progLength = generateProgLength()
  const emptyElementIndex = generateEmptyElementIndex(progLength)
  const start = generateNumber()
  const step = generateNumber()
  const progression = generateProgression(start, step, progLength)
  const answer = progression[emptyElementIndex]
  progression[emptyElementIndex] = '..'

  return {
    question: progression.join(' '),
    answer: answer,
  }
}

const generateProgLength = () => Math.floor(Math.random() * 6) + 5

const generateEmptyElementIndex = (progLength) => {
  return Math.floor(Math.random() * progLength)
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

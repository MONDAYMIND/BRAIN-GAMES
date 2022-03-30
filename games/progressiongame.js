import { cons } from '@hexlet/pairs';
import generateRandomNumber from '../src/randomNumberGenerator.js';

export const rulesOfTheGame = 'What number is missing in the progression?'; // добавить экспорт

const createProgression = () => {
  const firstProgressionNumber = generateRandomNumber(20);
  const progressionStep = generateRandomNumber(10);
  const indexOfMissingNumber = generateRandomNumber(9);

  const progression = [firstProgressionNumber];

  for (let i = 1; i < 10; i += 1) {
    progression.push(progression.at(-1) + progressionStep);
  }

  const rightAnswer = progression[indexOfMissingNumber];

  progression[indexOfMissingNumber] = '..';
  const question = progression.join(' ');

  const questionAndRightAnswer = cons(question, rightAnswer);

  return questionAndRightAnswer;
};

export default createProgression;

import { cons } from '@hexlet/pairs';
import generateRandomNumber from '../src/randomNumberGenerator.js';

export const rulesOfTheGame = 'What number is missing in the progression?';

const createProgressionWithMissingNumber = () => {
  const firstMaxProgressionNumber = 20;
  const firstProgressionNumber = generateRandomNumber(firstMaxProgressionNumber);

  const maxProgressionStep = 10;
  const progressionStep = generateRandomNumber(maxProgressionStep);

  const maxIndexOfMissingNumber = 9;
  const indexOfMissingNumber = generateRandomNumber(maxIndexOfMissingNumber);

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

export default createProgressionWithMissingNumber;

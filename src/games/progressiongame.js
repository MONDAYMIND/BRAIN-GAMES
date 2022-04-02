import { cons } from '@hexlet/pairs';
import generateRandomNumber from '../randomNumberGenerator.js';
import engineGame from '../index.js';

const rulesOfTheGame = 'What number is missing in the progression?';

const createProgressionWithMissingNumber = () => {
  const firstMaxProgressionNumber = 20;
  const firstProgressionNumber = generateRandomNumber(firstMaxProgressionNumber);

  const maxProgressionStep = 10;
  const progressionStep = generateRandomNumber(maxProgressionStep);

  const amountOfNumbersInProgression = 10;

  const maxIndexOfMissingNumber = 9;
  const indexOfMissingNumber = generateRandomNumber(maxIndexOfMissingNumber);

  const progression = [firstProgressionNumber];

  for (let i = 1; i < amountOfNumbersInProgression; i += 1) {
    progression.push(progression.at(-1) + progressionStep);
  }

  const rightAnswer = progression[indexOfMissingNumber];

  progression[indexOfMissingNumber] = '..';
  const question = progression.join(' ');

  const questionAndRightAnswer = cons(question, String(rightAnswer));

  return questionAndRightAnswer;
};

export default () => engineGame(rulesOfTheGame, createProgressionWithMissingNumber);

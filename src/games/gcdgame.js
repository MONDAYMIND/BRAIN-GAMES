import { cons } from '@hexlet/pairs';
import generateRandomNumber from '../randomNumberGenerator.js';
import engineGame from '../index.js';

const rulesOfTheGame = 'Find the greatest common divisor of given numbers.';

const findGCD = (firstNumber, secondNumber) => {
  if (!secondNumber) {
    return firstNumber;
  }
  return findGCD(secondNumber, firstNumber % secondNumber);
};

const generateRound = () => {
  const maxRandomNumber = 200;
  const firstRandom = (generateRandomNumber(maxRandomNumber));
  const secondRandom = (generateRandomNumber(maxRandomNumber));

  const question = `${firstRandom} ${secondRandom}`;
  const rightAnswer = findGCD(firstRandom, secondRandom);
  const questionAndRightAnswer = cons(question, String(rightAnswer));

  return questionAndRightAnswer;
};

export default () => engineGame(rulesOfTheGame, generateRound);

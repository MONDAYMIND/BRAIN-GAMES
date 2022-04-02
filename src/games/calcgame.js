import { cons } from '@hexlet/pairs';
import generateRandomNumber from '../randomNumberGenerator.js';
import engineGame from '../index.js';

const rulesOfTheGame = 'What is the result of the expression?';

const operators = ['+', '-', '*'];

const calculateNumbers = () => {
  const maxIndexOfOperators = 2;
  const randomOperator = operators[generateRandomNumber(maxIndexOfOperators)];

  const maxRandomNumber = 30;
  const firstRandom = generateRandomNumber(maxRandomNumber);
  const secondRandom = generateRandomNumber(maxRandomNumber);
  const question = `${firstRandom} ${randomOperator} ${secondRandom}`;

  let rightAnswer;

  switch (randomOperator) {
    case '+':
      rightAnswer = firstRandom + secondRandom;
      break;

    case '-':
      rightAnswer = firstRandom - secondRandom;
      break;

    case '*':
      rightAnswer = firstRandom * secondRandom;
      break;

    default:
      rightAnswer = 'Wrong!!!';
      break;
  }

  const questionAndRightAnswer = cons(question, String(rightAnswer));

  return questionAndRightAnswer;
};

export default () => engineGame(rulesOfTheGame, calculateNumbers);

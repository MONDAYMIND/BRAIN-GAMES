import { cons } from '@hexlet/pairs';
import generateRandomNumber from '../src/randomNumberGenerator.js';

export const rulesOfTheGame = 'What is the result of the expression?';

const operators = ['+', '-', '*'];

let rightAnswer;

const calculateNumbers = () => {
  const randomOperator = operators[generateRandomNumber(2)];
  const firstRandom = generateRandomNumber(30);
  const secondRandom = generateRandomNumber(30);
  const question = `${firstRandom} ${randomOperator} ${secondRandom}`;

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

  const questionAndRightAnswer = cons(question, rightAnswer);

  return questionAndRightAnswer;
};

export default calculateNumbers;

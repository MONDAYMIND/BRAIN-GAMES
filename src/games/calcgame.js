import { cons } from '@hexlet/pairs';
import generateRandomNumber from '../randomNumberGenerator.js';
import engineGame from '../index.js';

const rulesOfTheGame = 'What is the result of the expression?';

const calculateNumbers = (operator, firstNumber, secondNumber) => {
  let rightAnswer;
  switch (operator) {
    case '+':
      rightAnswer = firstNumber + secondNumber;
      break;

    case '-':
      rightAnswer = firstNumber - secondNumber;
      break;

    case '*':
      rightAnswer = firstNumber * secondNumber;
      break;

    default:
      rightAnswer = 'Wrong!!!';
      break;
  }

  return rightAnswer;
};

const operators = ['+', '-', '*'];

const generateRound = () => {
  const maxIndexOfOperators = 2;
  const randomOperator = operators[generateRandomNumber(maxIndexOfOperators)];

  const maxRandomNumber = 30;
  const firstRandom = generateRandomNumber(maxRandomNumber);
  const secondRandom = generateRandomNumber(maxRandomNumber);
  const question = `${firstRandom} ${randomOperator} ${secondRandom}`;

  const rightAnswer = calculateNumbers(randomOperator, firstRandom, secondRandom);

  const questionAndRightAnswer = cons(question, String(rightAnswer));

  return questionAndRightAnswer;
};

export default () => engineGame(rulesOfTheGame, generateRound);

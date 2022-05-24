import { cons } from '@hexlet/pairs';
import generateRandomNumber from '../randomNumberGenerator.js';
import engineGame from '../index.js';

const rulesOfTheGame = 'What is the result of the expression?';

const calculateNumbers = (operator, firstNumber, secondNumber) => {
  switch (operator) {
    case '+':
      return (firstNumber + secondNumber);
    case '-':
      return (firstNumber - secondNumber);
    case '*':
      return (firstNumber * secondNumber);
    default:
      return 'Wrong!!!';
  }
};

const operators = ['+', '-', '*'];

const generateRound = () => {
  const randomOperator = operators[generateRandomNumber(operators.length) - 1];
  const maxRandomNumber = 30;
  const firstRandom = generateRandomNumber(maxRandomNumber);
  const secondRandom = generateRandomNumber(maxRandomNumber);

  const question = `${firstRandom} ${randomOperator} ${secondRandom}`;
  const rightAnswer = calculateNumbers(randomOperator, firstRandom, secondRandom);
  const questionAndRightAnswer = cons(question, String(rightAnswer));

  return questionAndRightAnswer;
};

export default () => engineGame(rulesOfTheGame, generateRound);

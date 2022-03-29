import {
  cons, car,
} from '@hexlet/pairs';
import generateRandomNumber from '../src/randomNumberGenerator.js';

// В играх должно остаться только то, что индивидуально для конкретной игры
// Это правила игры и функция - генератор раунда, которая генерирует пару вопрос-ответ.
// каждая игра предоставляет движку свои правила и генератор, а движок уже дергает генератор
// каждый раз, когда ему нужно получить вопрос и правильный ответ на него

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

import { cons } from '@hexlet/pairs';
import generateRandomNumber from '../randomNumberGenerator.js';
import engineGame from '../index.js';

const rulesOfTheGame = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => {
  let rightAnswer;

  if (number % 2 === 0) {
    rightAnswer = 'yes';
  } else {
    rightAnswer = 'no';
  }

  return rightAnswer;
};

const generateRound = () => {
  const maxNumberForEvenCheck = 100;
  const question = generateRandomNumber(maxNumberForEvenCheck);

  const rightAnswer = isEven(question);

  const questionAndRightAnswer = cons(question, rightAnswer);

  return questionAndRightAnswer;
};

export default () => engineGame(rulesOfTheGame, generateRound);

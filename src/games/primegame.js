import { cons } from '@hexlet/pairs';
import generateRandomNumber from '../randomNumberGenerator.js';
import engineGame from '../index.js';

const rulesOfTheGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const checkIfNumberIsPrime = () => {
  const maxNumberForPrimeCheck = 100;
  const question = generateRandomNumber(maxNumberForPrimeCheck);

  let rightAnswer = 'yes';

  for (let i = 2; i < question; i += 1) {
    if (question % i === 0) {
      rightAnswer = 'no';
    }
  }

  const questionAndRightAnswer = cons(question, rightAnswer);

  return questionAndRightAnswer;
};

export default () => engineGame(rulesOfTheGame, checkIfNumberIsPrime);

import { cons } from '@hexlet/pairs';
import generateRandomNumber from '../randomNumberGenerator.js';
import engineGame from '../index.js';

const rulesOfTheGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  let rightAnswer = 'yes';

  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      rightAnswer = 'no';
    }
  }

  return rightAnswer;
};

const generateRound = () => {
  const maxNumberForPrimeCheck = 100;
  const question = generateRandomNumber(maxNumberForPrimeCheck);

  const rightAnswer = isPrime(question);

  const questionAndRightAnswer = cons(question, rightAnswer);

  return questionAndRightAnswer;
};

export default () => engineGame(rulesOfTheGame, generateRound);

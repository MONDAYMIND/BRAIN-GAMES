import { cons } from '@hexlet/pairs';
import generateRandomNumber from '../src/randomNumberGenerator.js';

export const rulesOfTheGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const primeCheck = () => {
  const question = generateRandomNumber(100);

  let rightAnswer = 'yes';

  for (let i = 2; i < question; i += 1) {
    if (question % i === 0) {
      rightAnswer = 'no';
    }
  }

  const questionAndRightAnswer = cons(question, rightAnswer);

  return questionAndRightAnswer;
};

export default primeCheck;

import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

const compareAnswers = (rulesOfTheGame, gameFunction) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  console.log(rulesOfTheGame);

  for (let i = 0; i < 3; i += 1) {
    const questAndRightAnsw = gameFunction();
    console.log(`Question: ${car(questAndRightAnsw)}`);
    const answer = readlineSync.question('Your answer: ');

    if (Number(answer) === cdr(questAndRightAnsw) || answer === cdr(questAndRightAnsw)) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${cdr(questAndRightAnsw)}'.\nLet's try again, ${name}!`);
      return 'failure';
    }
  }
  console.log(`Congratulations, ${name}!`);
  return 'Congratulations';
};

export default compareAnswers;

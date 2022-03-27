import readlineSync from 'readline-sync';

const checkParity = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const parityCheck = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const numbersForParityCheck = [15, 6, 7];

  for (let i = 0; i < numbersForParityCheck.length; i += 1) {
    console.log(`Question: ${numbersForParityCheck[i]}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer === checkParity(numbersForParityCheck[i])) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${checkParity(numbersForParityCheck[i])}'.\nLet's try again, ${name}!`);
      return 'failure';
    }
  }

  console.log(`Congratulations, ${name}!`);
  return 'failure';
};

export default parityCheck;

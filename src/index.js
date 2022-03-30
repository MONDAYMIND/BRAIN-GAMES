import readlineSync from 'readline-sync';

const name = 'Anya';

const compareAnswers = (question, rightAnswer) => {
  console.log(`Question: ${question}`);
  const answer = readlineSync.question('Your answer: ');

  if (Number(answer) === rightAnswer) {
    console.log('Correct!');
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${name}!`);
    return 'failure';
  }

  return 'Correct!';
};

export default compareAnswers;

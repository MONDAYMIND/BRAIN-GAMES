// здесь построить архитектуру запуска игр так, чтобы она управляла всеми играми
// игры имеют общий порядок выполнения (задать вопрос, получить ответ, сравнить ответ и т.д.)
// логику переиспользовать внутри конкретных игр для устранения дублирования кода
// в каждой игре 3 раунда
import readlineSync from 'readline-sync';

let name;

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

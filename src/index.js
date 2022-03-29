// здесь построить архитектуру запуска игр так, чтобы она управляла всеми играми
// игры имеют общий порядок выполнения (задать вопрос, получить ответ, сравнить ответ и т.д.)
// логику переиспользовать внутри конкретных игр для устранения дублирования кода
// в каждой игре 3 раунда

import readlineSync from 'readline-sync';
import {
cons, car, cdr, toString, isPair,
} from '@hexlet/pairs';

let name;
const greetByName = () => {
  console.log('Welcome to the Brain Games!');
  name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
};

export default greetByName;
export { name };

const questionAndAnswer = (question, rightAnswer) => {
  for (let i = 0; i < 3; i += 1) {
    // здесь должна в цикле генерироваться пара вопрос - прав. ответ
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');

    if (Number(answer) === rightAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${name}!`);
      return 'failure';
    }
  }

  return 'super';
};

export { questionAndAnswer };

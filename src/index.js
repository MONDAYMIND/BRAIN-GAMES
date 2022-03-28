// логику поместить в этот файл
// здесь построить архитектуру запуска игр так, чтобы она управляла всеми играми

// игры имеют общий порядок выполнения (задать вопрос, получить ответ, сравнить ответ и т.д.)
// логику переиспользовать внутри конкретных игр для устранения дублирования кода

// в каждой игре 3 раунда

import readlineSync from 'readline-sync';
import {
cons, car, cdr, toString, isPair,
} from '@hexlet/pairs';

const greetingByName = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
};

export default greetByName;











const questionAndAnswer = cons(question, rightAnswer);

rightAnswer = выражение уникальное для игры;

for (let i = 0; i < 3; i += 1) {
  console.log(`Question: ${car(questionAndAnswer)}`);
  const answer = readlineSync.question('Your answer: ');

  if (answer === rightAnswer) {
    console.log('Correct!');
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${name}!`);
    return 'failure';
  }
}


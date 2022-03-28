// В играх должно остаться только то, что индивидуально для конкретной игры
// Это правила игры и функция - генератор раунда, которая генерирует пару вопрос-ответ.
// каждая игра предоставляет движку свои правила и генератор, а движок уже дергает генератор
// каждый раз, когда ему нужно получить вопрос и правильный ответ на него

// функция генерирует пару "вопрос - прав. ответ на него" в раунде, исполняемый файл вызывает ф-ию

логика игры:

1. Приветствие, запомнил имя
2. What is the result of the expression?
3. 3 раза появляется вопрос :
Question: рандом. число +/-/ * рандом. число
Your answer: поле для ответа, запомнил ответ

4. Сравнение ответа с прав. ответом
5. Коррект или ошибка

const operators = ['+', '-', '*'];

console.log('What is the result of the expression?');

const question = `${generateRandomNumber(30)} ${operators[generateRandomNumber(2)]} ${generateRandomNumber(30)}`;
const questionIsNumber = Number.question;

const rightAnswer = questionIsNumber;

let answer;
switch(num) {
  case 1:  // if (num === 1)

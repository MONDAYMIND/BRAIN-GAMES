#!/usr/bin/env node

// функция генерирует пару "вопрос - прав. ответ на него" в раунде, исполняемый файл вызывает ф-ию
import {
  car, cdr, isPair,
} from '@hexlet/pairs';
import calculateNumbers from '../games/calcgame.js';
import greetByName, { name, questionAndAnswer } from '../src/index.js';

greetByName();

console.log('What is the result of the expression?');

const calculateNumbers(); // через константу значения сохраняются, сделать цикл ???

const one = car(pair)

questionAndAnswer(car(calculateNumbers()), cdr(calculateNumbers()));
// функция вызывается 2 раза, разные значения

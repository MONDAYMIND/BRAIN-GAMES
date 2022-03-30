#!/usr/bin/env node
import {
  car, cdr,
} from '@hexlet/pairs';
import calculateNumbers from '../games/calcgame.js';
import greetByName, { name, questionAndAnswer } from '../src/index.js';

greetByName();

console.log('What is the result of the expression?');

const cycle = () => {
  for (let i = 0; i < 3; i += 1) {
    const forRemember = calculateNumbers();
    if (questionAndAnswer(car(forRemember), cdr(forRemember)) === 'failure') {
      return 'failure';
    }
  }

  console.log(`Congratulations, ${name}!`);
  return 'Congratulations';
};

cycle();

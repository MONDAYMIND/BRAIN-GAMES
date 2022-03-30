#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';
import findTheGCD, { rulesOfTheGame } from '../games/gcdgame.js';
import compareAnswers from '../src/index.js';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);

console.log(rulesOfTheGame);

const cycle = () => {
  for (let i = 0; i < 3; i += 1) {
    const questAndRightAnsw = findTheGCD();
    if (compareAnswers(car(questAndRightAnsw), cdr(questAndRightAnsw)) === 'failure') {
      return 'failure';
    }
  }

  console.log(`Congratulations, ${name}!`);
  return 'Congratulations';
};

cycle();

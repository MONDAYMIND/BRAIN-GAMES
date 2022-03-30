#!/usr/bin/env node

import findTheGCD, { rulesOfTheGame } from '../games/gcdgame.js';
import compareAnswers from '../src/index.js';

compareAnswers(rulesOfTheGame, findTheGCD);

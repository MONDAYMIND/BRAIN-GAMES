#!/usr/bin/env node

import primeCheck, { rulesOfTheGame } from '../games/primegame.js';
import compareAnswers from '../src/index.js';

compareAnswers(rulesOfTheGame, primeCheck);

#!/usr/bin/env node

import calculateNumbers, { rulesOfTheGame } from '../games/calcgame.js';
import compareAnswers from '../src/index.js';

compareAnswers(rulesOfTheGame, calculateNumbers);

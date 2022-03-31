#!/usr/bin/env node

import createProgressionWithMissingNumber, { rulesOfTheGame } from '../games/progressiongame.js';
import realizeGameLogic from '../src/index.js';

realizeGameLogic(rulesOfTheGame, createProgressionWithMissingNumber);

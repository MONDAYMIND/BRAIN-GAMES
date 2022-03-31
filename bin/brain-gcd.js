#!/usr/bin/env node

import findTheGCD, { rulesOfTheGame } from '../games/gcdgame.js';
import realizeGameLogic from '../src/index.js';

realizeGameLogic(rulesOfTheGame, findTheGCD);

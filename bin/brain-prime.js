#!/usr/bin/env node

import checkIfNumberIsPrime, { rulesOfTheGame } from '../games/primegame.js';
import realizeGameLogic from '../src/index.js';

realizeGameLogic(rulesOfTheGame, checkIfNumberIsPrime);

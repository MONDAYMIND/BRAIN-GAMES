#!/usr/bin/env node

import checkIfNumberIsEven, { rulesOfTheGame } from '../games/evengame.js';
import realizeGameLogic from '../src/index.js';

realizeGameLogic(rulesOfTheGame, checkIfNumberIsEven);

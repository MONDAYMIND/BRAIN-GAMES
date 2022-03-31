#!/usr/bin/env node

import calculateNumbers, { rulesOfTheGame } from '../games/calcgame.js';
import realizeGameLogic from '../src/index.js';

realizeGameLogic(rulesOfTheGame, calculateNumbers);

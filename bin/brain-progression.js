#!/usr/bin/env node

import createProgression, { rulesOfTheGame } from '../games/progressiongame.js';
import compareAnswers from '../src/index.js';

compareAnswers(rulesOfTheGame, createProgression);

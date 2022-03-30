#!/usr/bin/env node

import parityCheck, { rulesOfTheGame } from '../games/paritygame.js';
import compareAnswers from '../src/index.js';

compareAnswers(rulesOfTheGame, parityCheck);

#!/usr/bin/env node

import { chooseGame } from '../src/cli.js';
import { sayHi } from '../src/index.js';
import playScm from './brain-scm.js';
import playProgression from './brain-progression.js';

const name = sayHi();
const game = chooseGame();
switch (Number(game)) {
  case 1:
    playScm();
    break;
  case 2:
    playProgression();
    break;
  default:
    break;
}

export default name;

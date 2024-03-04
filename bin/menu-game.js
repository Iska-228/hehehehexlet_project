#!/usr/bin/env node

import { chooseGame } from '../src/cli.js';
import { sayHi } from '../src/index.js';
import scmTask from './brain-scm.js';
import progressionTask from './brain-progression.js';

const name = sayHi();
const game = chooseGame();
switch (Number(game)) {
  case 1:
    scmTask();
    break;
  case 2:
    progressionTask();
    break;
  default:
    break;
}

export default name;

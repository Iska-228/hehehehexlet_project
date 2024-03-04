#!/usr/bin/env node
/* eslint-disable import/no-cycle */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/extensions */

import { sayHi, chooseGame } from '../src/cli.js';
import playScm from './brain-scm.js';
import playProgression from './brain-progression.js';

const name = sayHi();
const game = chooseGame();
switch (parseInt(game, 10)) {
  case 1:
    playScm();
    break;
  case 2:
    playProgression();
    break;
  default:
    break;
}

export default { name };

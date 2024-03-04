import readlineSync from 'readline-sync';
import playScm from './games/scm.js';
import playProgression from './games/progression.js';

function chooseGame() {
  console.log('Choose your game:');
  console.log('    1. scm');
  console.log('    2. progression');
  const gameID = readlineSync.question('Type number of the game you want to play: ');
  return gameID;
}

function progressionInit() {
  console.log('What number is missing in the progression?');
  playProgression();
}

function scmInit() {
  console.log('Find the smallest common multiple of given numbers.');
  playScm();
}

export { chooseGame, scmInit, progressionInit };

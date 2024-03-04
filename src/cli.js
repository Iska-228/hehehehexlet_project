import readlineSync from 'readline-sync';

function chooseGame() {
  console.log('Choose your game:');
  console.log('    1. scm');
  console.log('    2. progression');
  const gameID = readlineSync.question('Type number of the game you want to play: ');
  return gameID;
}

function scmTask() {
  console.log('Find the smallest common multiple of given numbers.');
}

function progressionTask() {
  console.log('What number is missing in the progression?');
}

export {
  scmTask, chooseGame, progressionTask,
};

/* eslint-disable import/no-cycle */
/* eslint-disable import/extensions */
/* eslint-disable no-console */
import readlineSync from 'readline-sync';

let name = '';

function sayHi() {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  name = userName;
  return userName;
}

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

function askQuestion(numbers) {
  console.log(`Question: ${numbers}`);
}

function getAnswer() {
  const answer = readlineSync.question('Your answer: ');
  return answer;
}

function checkAns(right, user) {
  if (user === right) {
    console.log('Correct!');
    return true;
  }

  console.log(`'${user}' is wrong answer ;(. Correct answer was '${right}'.`);
  return false;
}

function sayLoser() {
  console.log(`Let's try again, ${name}!`);
}

function sayHooray() {
  console.log(`Congratulations, ${name}!`);
}

export {
  scmTask, getAnswer, checkAns, sayHi, chooseGame, sayLoser,
  sayHooray, askQuestion, progressionTask,
};

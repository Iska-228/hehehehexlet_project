/* eslint-disable import/no-cycle */
/* eslint-disable import/extensions */
/* eslint-disable no-console */
import readlineSync from 'readline-sync';
import { name } from '../bin/menu-game.js';

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
  askQuestion, getAnswer, checkAns, sayLoser, sayHooray,
};

import readlineSync from 'readline-sync';

let name = '';

function sayHi() {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  name = userName;
  console.log(`Hello, ${userName}!`);
  return userName;
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
  sayHi, askQuestion, getAnswer, checkAns, sayLoser, sayHooray,
};

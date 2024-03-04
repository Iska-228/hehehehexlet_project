/* eslint-disable import/named */
/* eslint-disable import/no-cycle */
/* eslint-disable import/extensions */
import { scmTask } from '../src/cli.js';
import {
  askQuestion, getAnswer, checkAns, sayLoser, sayHooray,
} from '../src/index.js';

function playScm() {
  let countAns = 0;
  scmTask();
  while (countAns !== 3) {
    const firstNum = Math.floor(Math.random() * 100);
    const secondNum = Math.floor(Math.random() * 100);
    const thirdNum = Math.floor(Math.random() * 100);
    let rightNum = Math.min(firstNum, secondNum, thirdNum);
    askQuestion(`${firstNum} ${secondNum} ${thirdNum}`);
    while (rightNum % firstNum !== 0 || rightNum % secondNum !== 0 || rightNum % thirdNum !== 0) {
      rightNum += Math.min(firstNum, secondNum, thirdNum);
    }
    const userAnswer = getAnswer(firstNum, secondNum, thirdNum);
    if (checkAns(rightNum, Number(userAnswer)) === true) countAns += 1;
    else {
      sayLoser();
      return undefined;
    }
  }
  sayHooray();
  return undefined;
}

export default playScm;

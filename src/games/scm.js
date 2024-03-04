import {
  askQuestion, getAnswer, checkAns, sayLoser, sayHooray,
} from '../index.js';

export default function playScm() {
  let countAns = 0;
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

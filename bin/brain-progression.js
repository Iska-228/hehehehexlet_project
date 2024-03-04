import { progressionTask } from '../src/cli.js';
import {
  askQuestion, getAnswer, checkAns, sayLoser, sayHooray,
} from '../src/index.js';

export default function playProgression() {
  let countAns = 0;
  progressionTask();
  while (countAns !== 3) {
    const progKolvoEl = Math.floor(Math.random() * 5 + 5);//* (max-min)+min
    const progN = Math.floor(Math.random() * 9 + 1);
    const arr = [Math.floor(Math.random() * 19 + 1)];
    for (let i = 0; i < progKolvoEl; i += 1) {
      arr.push(arr[i] * progN);
    }
    const censoredNumberPos = Math.floor(Math.random() * (progKolvoEl - 1) + 1);
    const rightAnsw = arr[censoredNumberPos];
    arr[censoredNumberPos] = '..';
    askQuestion(arr.join(' '));
    const userAnswer = getAnswer();
    if (checkAns(rightAnsw, Number(userAnswer)) === true) {
      countAns += 1;
    } else {
      sayLoser();
      return undefined;
    }
  }
  sayHooray();
  return undefined;
}

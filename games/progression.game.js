/* eslint-disable eol-last */
import { getRandomInRange } from '../src/random.js';
import {
  greetingAndRememberName,
  questionsAndAnswers,
  completionAndCongratulations,
} from '../src/index.js';

// eslint-disable-next-line import/prefer-default-export
export const progressionGame = () => {
  const userName = greetingAndRememberName('What number is missing in the progression?');
  for (let i = 0; i < 3; i += 1) {
    const randomNumber = getRandomInRange(1, 100);
    const stepSize = getRandomInRange(1, 50);
    const positionHiddenNumber = getRandomInRange(0, 9);

    const makeRowOfNumbers = () => {
      const result = [];
      for (let number = randomNumber; result.length < 10; number += stepSize) {
        result.push(number);
      }
      return result;
    };

    const rowOfNumbers = makeRowOfNumbers();
    const correctAnswer = String(rowOfNumbers[positionHiddenNumber]);
    rowOfNumbers[positionHiddenNumber] = '..';
    const question = rowOfNumbers.join(' ');

    const userAnswer = questionsAndAnswers(question);
    if (userAnswer !== correctAnswer) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.
      Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  } completionAndCongratulations(userName);
};

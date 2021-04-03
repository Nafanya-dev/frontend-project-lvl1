/* eslint-disable eol-last */
import { getRandomInRange } from '../src/random.js';
import { gcd } from '../src/gcd.js';
import {
  greetingAndRememberName,
  questionsAndAnswers,
  completionAndCongratulations,
} from '../src/index.js';

// eslint-disable-next-line import/prefer-default-export
export const gcdGame = () => {
  const userName = greetingAndRememberName('Find the greatest common divisor of given numbers.');
  for (let i = 0; i < 3; i += 1) {
    const firstRandomNumber = getRandomInRange(1, 100);
    const secondRandomNumber = getRandomInRange(1, 100);

    const question = `${firstRandomNumber} ${secondRandomNumber}`;
    const correctAnswer = gcd(firstRandomNumber, secondRandomNumber);

    const userAnswer = Number(questionsAndAnswers(question));
    if (userAnswer !== correctAnswer) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.
    Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  } completionAndCongratulations(userName);
};
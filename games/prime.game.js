/* eslint-disable eol-last */
import { getRandomInRange } from '../src/random.js';
import {
  greetingAndRememberName,
  questionsAndAnswers,
  completionAndCongratulations,
} from '../src/index.js';

// eslint-disable-next-line import/prefer-default-export
export const primeGame = () => {
  const userName = greetingAndRememberName('Answer "yes" if given number is prime. Otherwise answer "no".');
  const isPrime = (num) => {
    for (let i = 2; i < num; i += 1) {
      if (num % i === 0) return false;
    }
    return num > 1;
  };
  const check = (num) => {
    const result = isPrime(num) ? 'yes' : 'no';
    return result;
  };
  for (let i = 0; i < 3; i += 1) {
    const number = getRandomInRange(1, 100);
    const question = number;
    const correctAnswer = check(number);

    const userAnswer = questionsAndAnswers(question);
    if (userAnswer !== correctAnswer) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.
      Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  } completionAndCongratulations(userName);
};
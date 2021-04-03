/* eslint-disable eol-last */
import { getRandomInRange } from './random.js';
import {
  greetingAndRememberName,
  questionsAndAnswers,
  completionAndCongratulations,
} from './index.js';

// eslint-disable-next-line import/prefer-default-export
export const evenGame = () => {
  const userName = greetingAndRememberName('Answer "yes" if the number is even, otherwise answer "no".');

  const isEven = (number) => (number % 2 === 0);

  const sayYesOrNo = (number) => (isEven(number) ? 'yes' : 'no');

  for (let i = 0; i < 3; i += 1) {
    const question = getRandomInRange(1, 100);
    const correctAnswer = sayYesOrNo(question);
    const answerOfUser = questionsAndAnswers(question);
    if (answerOfUser !== correctAnswer) {
      console.log(`${answerOfUser} is wrong answer ;(. Correct answer was ${correctAnswer}.
    Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  } completionAndCongratulations(userName);
};
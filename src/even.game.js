/* eslint-disable eol-last */
import readlineSync from 'readline-sync';
import { getRandomInRange } from './random.js';
import { greeting } from './cli.js';

// eslint-disable-next-line import/prefer-default-export
export const evenGame = () => {
  const isEven = (number) => (number % 2 === 0);

  const sayYesOrNo = (number) => (isEven(number) ? 'yes' : 'no');

  const name = greeting();

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const randomNumber = getRandomInRange(1, 100);
    const answer = sayYesOrNo(randomNumber);

    console.log(`Question: ${randomNumber}`);
    const answerOfUser = readlineSync.question('Your answer: ');
    if (answerOfUser !== answer) {
      console.log(`${answerOfUser} is wrong answer ;(. Correct answer was ${answer}.
    Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  } console.log(`Congratulations, ${name}!`);
};
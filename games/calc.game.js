/* eslint-disable eol-last */
import { getRandomInRange } from '../src/random.js';
import {
  greetingAndRememberName,
  questionsAndAnswers,
  completionAndCongratulations,
} from '../src/index.js';

// eslint-disable-next-line import/prefer-default-export
export const calcGame = () => {
  const userName = greetingAndRememberName('What is the result of the expression?');

  for (let i = 0; i < 3; i += 1) {
    const operators = ['+', '-', '*'];
    const randomOperators = getRandomInRange(0, 2);
    const firstOperand = getRandomInRange(0, 100);
    const secondOperand = getRandomInRange(0, 100);

    const question = `${firstOperand} ${operators[randomOperators]} ${secondOperand}`;
    let correctAnswer;

    // eslint-disable-next-line default-case
    switch (operators[randomOperators]) {
      case '+':
        correctAnswer = firstOperand + secondOperand;
        break;
      case '-':
        correctAnswer = firstOperand - secondOperand;
        break;
      case '*':
        correctAnswer = firstOperand * secondOperand;
        break;
    }

    const userAnswer = questionsAndAnswers(question);
    if (Number(userAnswer) !== correctAnswer) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.
        Let's try again, ${userName}!`);
      return;
    }
  } completionAndCongratulations(userName);
};
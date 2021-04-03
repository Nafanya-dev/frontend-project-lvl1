/* eslint-disable eol-last */
import readlineSync from 'readline-sync';
import { greeting } from './cli.js';

// eslint-disable-next-line import/prefer-default-export
export const greetingAndRememberName = (rules) => {
  console.log('Welcome to the Brain Games!');
  const name = greeting();
  console.log(`Hello, ${name}!`);
  console.log(rules);
  return name;
};

export const questionsAndAnswers = (question) => {
  console.log(`Question: ${question}`);
  return readlineSync.question('Your answer: ');
};

export const completionAndCongratulations = (name) => {
  console.log(`Congratulations, ${name}!`);
};

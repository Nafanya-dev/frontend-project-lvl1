/* eslint-disable import/prefer-default-export */
import readlineSync from 'readline-sync';

export const greeting = () => {
  const name = readlineSync.question('May  I  have your name?: ');
  return name;
};

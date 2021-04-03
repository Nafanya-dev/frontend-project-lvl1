// eslint-disable-next-line import/prefer-default-export
export const gcd = (a, b) => {
  if (!b) {
    return a;
  } return gcd(b, a % b);
};

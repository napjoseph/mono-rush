// Source: https://decipher.dev/30-seconds-of-typescript/docs/pluralize/

const pluralize = (num: number, word: string, plural = word + 's') =>
  [1, -1].includes(Number(num)) ? word : plural;

export default pluralize;

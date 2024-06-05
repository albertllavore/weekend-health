import { findWords } from './findWords';

/**
 * Main function to run the findWords function with a command line input.
 * It reads the input string and dictionary words from the command line arguments,
 * calls the findWords function, and logs the result.
 */
const main = () => {
  const inputString = process.argv[2];
  const dictionary = process.argv.slice(3);

  if (!inputString || dictionary.length === 0) {
    console.log("Usage: ts-node main.ts <inputString> <dictionary words>");
    return;
  }

  const result = findWords(inputString, dictionary);
  console.log(result);
};

main();
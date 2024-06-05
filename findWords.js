"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findWords = exports.getCharCounts = void 0;
/**
 * Helper function that counts the frequency of each character in a string.
 *
 * @param {string} str - The input string.
 * @returns {{ [key: string]: number }} An object with character counts.
 */
const getCharCounts = (str) => {
    const charCount = {};
    for (let char of str) {
        // Set the charCount for the char
        // Default to 0 and add 1
        charCount[char] = (charCount[char] || 0) + 1;
    }
    return charCount;
};
exports.getCharCounts = getCharCounts;
/**
 * Finds words from the dictionary that can be formed by rearranging the letters of the input string.
 * Each letter in the input string may be used up to once per word.
 *
 * @param {string} inputString - A string consisting of lowercase English letters.
 * @param {string[]} dictionary - An array of words that specifies the universe of valid output words.
 * @returns {string[]} An array of words from the dictionary that can be formed from the input string.
 */
const findWords = (inputString, dictionary) => {
    // Get the frequency count of the input string
    const count = (0, exports.getCharCounts)(inputString);
    // result array of words from the dictionary that can be formed
    const result = [];
    // Iterate over each word in the dictionary
    for (let word of dictionary) {
        // Get the frequency count of the word
        const wordCharCount = (0, exports.getCharCounts)(word);
        let foundAWord = true;
        // Check if the word can be formed using the input string's characters
        // If the character is not in the word count object OR 
        // If the word and the input string have different frequencies for the character, 
        // Then word cannot be formed by the input string
        for (let char in wordCharCount) {
            if (!count[char] || wordCharCount[char] > count[char]) {
                foundAWord = false;
                break;
            }
        }
        // We found a word, add to the result array
        if (foundAWord)
            result.push(word);
    }
    return result;
};
exports.findWords = findWords;

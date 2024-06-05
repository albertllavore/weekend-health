# Weekend Health Take Home Challenge

**Objective:**

Implement a function named **`findWords`** that accepts two arguments: 1) an input string and 2) a dictionary. This function should return an array of words from the dictionary that can be formed by rearranging some or all of the letters in the input string. Each letter in the input string may be used up to once per word.

**Approach**

1. **_Create a Frequency Hash Map_**:

   - Generate a frequency hash map for the input string.

2. **_Iterate Through the Dictionary_**:

   - For each word in the dictionary:
     - Create a frequency hash map for the word.
     - Compare each character in the word to the frequency hash map of the input string.
     - For the word to be formed by the input string, each character in the word must:
       1. Be in the input string's frequency hash map.
       2. Have an equal or less number of occurrences in the input string.

3. **_Add Valid Words to the Result_**:

   - If all characters in the word meets this criteria, add the word to the result array.

4. **_Return the Result_**:
   - Return the array of valid words.

**Complexity Analysis**

**`getCharCounts`**:

- Time: O(n), where n is the length of the input string
- Space: O(n), worst-case every character in the input string is unique and we have a hash map of n entries

**`findWords`**:

- Time:

  - Let n equal the length of the input string, d equal the number of words in the dictionary, and l equal the average length of the words in the dictionary
  - getCharCounts is O(n) for the input string
  - getCharsCount is O(l) for each word in the dictionary
  - Since there are d words in the dictionary, the overall time complexity for creating the hash maps for the dictionary is O(d\*l);
  - Overall: O(n + d\*l)

- Space:

  - Input string hash map is O(n)
  - For each word in the dictionary, the frequency hash map is O(l) at a given time.
  - The space complexity will be dominated by the bigger of the two between n and l
  - Overall: O(max(n, l))

### Running on the command line:

Usage:
ts-node main.ts <inputString> <dictionary words>
Example: ts-node main.ts 'ate' 'ate' 'eat' 'tea' 'dog' 'do' 'god' 'goo' 'go' 'good'

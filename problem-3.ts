/*

Problem 3:
   Write a TypeScript function countWordOccurrences that takes a sentence (string) and a word (string). It should return the number of times the word appears in the sentence, case-insensitively.

// Sample Input:
   countWordOccurrences("TypeScript is great. I love TypeScript!", "typescript");

// Sample Output:
   2;

 */

function countWordOccurrences(sentence: string, word: string): number {
  const sentenceSplitCount: number = sentence
    .split(" ")
    .reduce((acc: number, cur: string) => {
      return cur.toLowerCase() == word.toLowerCase() ? acc + 1 : acc;
    }, 1); // todo: special charter issue & partial matching count

  return sentenceSplitCount;
}

const occurrence = countWordOccurrences(
  "TypeScript is great. I love TypeScript!.",
  "typescript"
);
console.log(occurrence);

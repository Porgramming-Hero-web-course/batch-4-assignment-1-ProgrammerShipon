/*

Problem 8:
   Create a function validateKeys(obj: T, keys: (keyof T)[]) that takes an object obj and an array of keys keys. The function should return true if all of the specified keys exist in the object; otherwise, it should return false.

// Sample Input:
   const person = { name: "Alice", age: 25, email: "alice@example.com" };
   console.log(validateKeys(person, ["name", "age"]));

// Sample Output:
   true;

*/

type TPerson = {
  name: string;
  age: number;
  email: string;
};

// checking object key
function validateKeys(obj: TPerson, keys: string[]) {
  for (const key of keys) {
    const properties = obj[key];
    if (!properties) {
      return false;
    }
  }
  return true;
}

const person = { name: "Alice", age: 25, email: "alice@example.com" };
console.log(validateKeys(person, ["name", "age"]));

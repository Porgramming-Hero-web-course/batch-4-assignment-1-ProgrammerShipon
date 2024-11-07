# Question: How to handle asynchronous operations using async/await over callback/promise TypeScript?

## Answer:

Using async/await in TypeScript simplifies managing asynchronous operations, making code greater readable than callbacks or guarantees. Declare functions as async, and wait to pause execution till the promise resolves

```tsx
async function fetchData() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1'");
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
```

TypeScript allows you to outline return types with promise kinds, increasing kind protection. For multiple async calls, use Promise.All to deal with them in parallel. Always wrap watch for calls in try/capture to handle errors. This makes your async code cleanser and greater maintainable.

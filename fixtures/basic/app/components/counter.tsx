"use client";

export function Counter() {
  const [count, setCount] = [0, (c: number) => {}];

  return (
    <div>
      <p>Count: {count}</p>
      <button type="button" onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}

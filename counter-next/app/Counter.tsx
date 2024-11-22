'use client'

import { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <div>
        Count: {counter}
        <button
          onClick={() =>
            import("./Counter-logic").then((v) =>
              v.CountUp(setCounter, counter)
            )
          }
        >
          +1
        </button>
      </div>
    </>
  );
}

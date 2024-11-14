import { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      Count: {counter}{" "}
      <button onClick={() => setCounter(counter + 1)}>+1</button>
    </div>
  );
}

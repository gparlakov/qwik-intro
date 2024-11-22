import { useState, useActionState } from "react";
import Counter from "./Counter";



export default function Home() {
  const [load, setLoad] = useActionState()
  return (
    <>
      <form>
        <button onClick={() => setLoad(true)}>Load</button>
      </form>
      {
        load && <Counter></Counter>
      }
    </>
  );
}

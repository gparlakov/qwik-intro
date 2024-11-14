import { lazy, Suspense, useState } from "react";

function App() {
  const [load, setLoad] = useState(false);

  return (
    <>
      <button onClick={() => setLoad(true)}>Load</button>
      {load && (
        <Suspense>
          <LazyCounter></LazyCounter>
        </Suspense>
      )}
    </>
  );
}

const LazyCounter = lazy(() => import("./Counter"));

export default App;

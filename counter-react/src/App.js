import { useState  } from 'react'

function App() {
  const [counter, setCounter] = useState(0)

  return (
    <div>Count: {counter} <button onClick={() => setCounter(counter + 1)}>+1</button></div>
  );
}

export default App;

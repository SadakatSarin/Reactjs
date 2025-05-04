import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>➕ Increment</button>
      <button onClick={() => setCount(count - 1)} style={{ marginLeft: '1rem' }}>➖ Decrement</button>
    </div>
  );
}

export default App;

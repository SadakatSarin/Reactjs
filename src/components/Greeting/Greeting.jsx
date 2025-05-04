import { useState } from 'react';

function App() {
  const [name, setName] = useState('');

  return (
    <div style={{ padding: '2rem' }}>
      <input 
        type="text" 
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <h2>Hello, {name || 'stranger'}!</h2>
    </div>
  );
}

export default App;

import React, { useState } from 'react';

function App() {
  // State hook: count
  const [count, setCount] = useState(0);

  // State hook: input value
  const [inputValue, setInputValue] = useState('');

  // Function to handle incrementing count
  const handleIncrement = () => {
    setCount(count + 1);
  };

  // Function to handle input change
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <h1>React Hooks Example</h1>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <br />
      <br />
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Type something..."
      />
      <p>You typed: {inputValue}</p>
    </div>
  );
}

export default App;

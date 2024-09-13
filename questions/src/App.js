import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Question from './components/question/Question';

function App() {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      <Question />
      <Question />
      <button type="button" onClick={() => window.history.back()}>
          Previous Question
        </button>
      </header>
    </div>
  );
}

export default App;

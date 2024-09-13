import React, { useState } from 'react';
import './question.css';

const Question = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div className='survey-container'>
      <form className="survey-form">
        <h2>Question here</h2>
        <div className='survey-options'>
          <label>Totally Disagree</label>
          <div className='options-group'>
            <label>
              <input
                type="radio"
                name="response"
                value="Totally disagree"
                checked={selectedOption === 'Totally disagree'}
                onChange={handleOptionChange}
              />
              <div className="check big negative"/>
            </label>
            <label>
              <input
                type="radio"
                name="response"
                value="Disagree"
                checked={selectedOption === 'Disagree'}
                onChange={handleOptionChange}
              />
              <div className="check medium negative"/>
            </label>
            <label>
              <input
                type="radio"
                name="response"
                value="Somewhat disagree"
                checked={selectedOption === 'Somewhat disagree'}
                onChange={handleOptionChange}
              />
              <div className="check small negative"/>
            </label>
            <label>
              <input
                type="radio"
                name="response"
                value="Neutral"
                checked={selectedOption === 'Neutral'}
                onChange={handleOptionChange}
              />
              <div className="check tiny neutral"/> 
            </label>
            <label>
              <input
                type="radio"
                name="response"
                value="Somewhat agree"
                checked={selectedOption === 'Somewhat agree'}
                onChange={handleOptionChange}
              />
              <div className="check small positive"/>
            </label>
            <label>
              <input
                type="radio"
                name="response"
                value="Agree"
                checked={selectedOption === 'Agree'}
                onChange={handleOptionChange}
              />
              <div className="check medium positive"/>
            </label>
            <label>
              <input
                type="radio"
                name="response"
                value="Totally agree"
                checked={selectedOption === 'Totally agree'}
                onChange={handleOptionChange}
              />
              <div className="check big positive"/>
            </label>
          </div>
          <label>Totally Agree</label>
        </div>
        <label className='selected-option'>
          {selectedOption}
        </label>
      </form>
    </div>
  );
};

export default Question;

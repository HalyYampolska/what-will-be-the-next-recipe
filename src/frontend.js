import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './frontend.scss';

const recipeUrls = {
    "Meat dishes": "/recipe/gulyash/",
};

const divsToUpdate = document.querySelectorAll('.next-recipe-update-me');

divsToUpdate.forEach(function (div) {
  const data = JSON.parse(div.querySelector('pre').innerHTML);
  ReactDOM.render(<Quiz {...data} />, div);
  div.classList.remove('next-recipe-update-me');
});

function Quiz(props) {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrectDelayed, setIsCorrectDelayed] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);  

  useEffect(() => {
    if (selectedAnswer !== null) {
      setTimeout(() => {
        setIsCorrectDelayed(true);
      }, 3000);
    }
  }, [selectedAnswer]);

  function handleAnswer(index) {
    setSelectedAnswer(index);
    setSelectedCategory(props.answers[index]);
  }

  function handleButtonClick() {
    setButtonClicked(true);
  }
  

  return (
    <div className="next-recipe-frontend">
      <p className="question">{props.question}</p>
      <ul className="answers">
        {props.answers.map((answer, index) => (
          <li
            className={`answer ${selectedAnswer === index ? 'selected' : ''} ${
              isCorrectDelayed ? 'no-click' : ''
            }`}
            onClick={() => {
              if (selectedAnswer === null && !isCorrectDelayed) {
                handleAnswer(index);
              }
            }}
          >
            {selectedAnswer === index && isCorrectDelayed && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                className="bi bi-check"
                viewBox="0 0 16 16"
              >
                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
              </svg>
            )}
            {answer}
          </li>
        ))}
      </ul>
      <div className={'message' + (selectedAnswer !== null ? ' message--visible' : '')}>

        <p>We recommend you: </p>
        {!buttonClicked && selectedCategory && (
            <a href={recipeUrls[selectedCategory]} target="_blank" rel="noopener noreferrer">
            <button
            style={{
                backgroundColor: '#009e2f', 
                color: '#ffffff',
                padding: '10px 20px',
                border: 'none', 
                borderRadius: '5px', 
                cursor: 'pointer', 
                marginLeft: '10px'
            }}
            >Try Randome Recipe</button>
            </a>
        )}
      </div>
    </div>
  );
}

export default Quiz;

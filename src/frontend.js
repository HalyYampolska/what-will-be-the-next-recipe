import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './frontend.scss';

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


  useEffect(() => {
    if (selectedAnswer !== null) {
      setTimeout(() => {
        setIsCorrectDelayed(true);
      }, 1000);
    }
  }, [selectedAnswer]);

  function handleAnswer(index) {
    setSelectedAnswer(index);
  }

  function handleButtonClick() {
    // Здесь вы можете выполнить действия, которые нужно выполнить при нажатии на кнопку
    // Например, отобразить рекомендации
    // Затем установите флаг, чтобы указать, что кнопка была нажата
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
        {!buttonClicked && (
            <button onClick={handleButtonClick}
            style={{
                backgroundColor: '#009e2f', // Цвет фона
                color: '#ffffff', // Цвет текста
                padding: '10px 20px', // Отступы внутри кнопки
                border: 'none', // Убираем границу
                borderRadius: '5px', // Закругляем углы
                cursor: 'pointer', // Изменяем курсор при наведении
                marginLeft: '10px'
            }}
            >Randome Recipe</button>
        )}
      </div>
    </div>
  );
}

export default Quiz;

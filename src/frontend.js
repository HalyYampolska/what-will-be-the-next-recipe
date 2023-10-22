import React from 'react';
import ReactDOM from 'react-dom';
import "./frontend.scss";

const divsToUpdate = document.querySelectorAll(".next-recipe-update-me");

divsToUpdate.forEach(function(div) {
    const data = JSON.parse(div.querySelector("pre").innerHTML);
    ReactDOM.render(<Quiz {...data} />, div);
    div.classList.remove("next-recipe-update-me");
});
  
function Quiz(props) { 
    return (
        <div className="next-recipe-frontend">
            <p className='question'>{props.question}</p>
            <ul className='answers'>
                {props.answers.map(function(answer) {
                    return <li className='answer'>{answer}</li>
                })}
            </ul>
        </div>
    )
}
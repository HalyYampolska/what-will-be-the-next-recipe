import React from 'react'
import ReactDOM from 'react-dom'
import "./frontend.scss"

const divsToUpdate = document.querySelectorAll(".next-recipe-update-me")

divsToUpdate.forEach(function(div) {
    ReactDOM.render(<Quiz />, div)
    div.classList.remove("next-recipe-update-me")
})

function Quiz() { 
    return (
        <div className="next-recipe-frontend">
            Hello from React 
        </div>
    )
}
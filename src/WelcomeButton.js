import React from 'react';

function WelcomeButton() {

    const handleClick = () => {
        alert('Welcome to our App!');
    }

    return(
        <div>
            <button onClick={handleClick}>Click to get a greeting</button>
        </div>
    )

}

export default WelcomeButton;
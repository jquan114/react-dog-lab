import React from 'react';

function Button(props) {
    const handleSubmit = () => {
        props.handleSubmitFromApp();
    };
    return(
        <button type="button" onClick={handleSubmit}> 
        Make Api Call Again
        </button>
    );
};

export default Button;
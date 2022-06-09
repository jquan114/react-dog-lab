import React from 'react';

function Button(props) {
    const handleSubmit = () => {
        props.handleSubmitFromApp();
    };
    return(
        <button type="button" onClick={handleSubmit}> 
       Get Random Dog
        </button>
    );
};

export default Button;
//Component renders a button with a text passed by parameter
import * as React from 'react';

const Button = ({text}) => {
    return <button type="submit"> {text} </button>;    
};

export default Button;
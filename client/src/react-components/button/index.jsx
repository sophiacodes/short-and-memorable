import React from 'react';
import './button.css';

const Button = ({...props}) => {
    return (
        <input
          {...props}
          type="button" 
          className="button"
        />
    )
}

export default (Button);
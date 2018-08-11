import React from 'react';
import './notification-message.css';

const NotificationMessage = ({...props}) => {
    return (
        <p className={`notification-message ${props.className}`}>{props.children}</p>
    )
};

export default (NotificationMessage);

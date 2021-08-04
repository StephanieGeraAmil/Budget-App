import React from 'react';
const Alert = ({ type, text }) => {
    return (<div className={`alert alert-${type}`}>
        <span>{text}</span>
    </div>)
};
export default Alert;
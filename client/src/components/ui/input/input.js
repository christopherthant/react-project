import React from 'react';
import styles from './input.module.css';

const input = (props) => {
    let errorClasses = '';
    let errMsg = props.validation && props.validation.errorMessage;
    if (props.validation && !props.validation.valid && props.validation.touched) {
        errorClasses = styles.hasError
    }
    return (
        <div className={errorClasses}>
            <label>{props.label}</label>
            <input type={props.type} name={props.name} onBlur={props.focus} value={props.value} onChange={props.change}
            />
            <div className={styles.errorMessage}>{errMsg}</div>
        </div>
    );
};

export default input;
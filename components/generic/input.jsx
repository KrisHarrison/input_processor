import React from 'react';

const Input = ({name,type,label, input, onChange, error}) => {
    
    return (
            <div>
                <label htmlFor={name}>{label}</label>
                <div className="string">
                    <input value={input} type={type} name={name} onChange={onChange}></input>
                </div>
                {error && <div>{error}</div>}
            </div>
        );
}
 
export default Input;
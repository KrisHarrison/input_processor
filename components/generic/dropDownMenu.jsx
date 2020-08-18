import React from 'react';

const DrownDownMenu = ({name, label, data, onChange, error}) => {
    return (  
        <div className="dropDownMenu">
            <label htmlFor={name}>{label}</label>
            <select name={name} onChange={onChange}>
                {data.map(item => 
                    <option key={item.id} value={item.type}>{item.type}</option>
                )};  
            </select>
            {error && <div>{error}</div>}
        </div>
    );
}
 
export default DrownDownMenu;
import React from "react";

export const Model = ( { isOpen, setIsOpen, modelLocation, setResource_add } ) => {
    const modelStyle = {
        display: isOpen ? 'block': 'none',
        ...modelLocation
    };
    let [ inputValue, setInputValue ] = React.useState('');
    const changeInputValue = e => {
        setInputValue( e.target.value );
    };
    const addResource = () => {
        setResource_add(inputValue);
        setInputValue('');
        setIsOpen(false);
    };
    const closeModel = () => {
        setIsOpen(false);
        setInputValue('');
    };
    return <div className='cruise-model agent-model' style={{...modelStyle}}>
        <span className='cruise-model first-icon'></span>
        <span className='cruise-model blank-icon'></span>
        <span className='cruise-model close-icon' onClick={()=>{closeModel()}}>X</span>
        <div className='cruise-model prompt-message'>
            Separate multiple resource name with commas
        </div>
        <div className='cruise-model input-box'>
            <input className='cruise-model' onChange={(e)=>changeInputValue(e)} value={inputValue} placeholder='Input value' />
        </div>
        <div className='cruise-model btn-box'>
            <span className='cruise-model add' onClick={()=>addResource()}>Add Resource</span>
            <span className='cruise-model cancel' onClick={()=>{closeModel()}}>Cancel</span>
        </div>
    </div>
};
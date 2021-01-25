import React from "react";

export const MessageItem = ( { title, value, className, iconClass } ) => {
    const isOtherMessage = title && Array.isArray(title);
    if(isOtherMessage){
        return <div className={className}>
            <div className='otherTitle'>
                {title.map((titleItem, index) => {
                    return <div key={index}>{titleItem}</div>
                })}
            </div>
             <div className='otherValue'>
                {value.map((valueItem, index) => {
                    return <div key={index}>{valueItem}</div>
                })}
             </div>
        </div>
    }else{
        return <div className={className}>
            <div className='messageTitle'>{title}</div>
            <i className={iconClass}></i>
            <div className='messageValue'>{value}</div>  
        </div>
    }
};
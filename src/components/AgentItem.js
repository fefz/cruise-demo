import React from "react";
import { removeItem } from "../utils/arryFormat";

export const AgentItem = ( { 
    item, 
    setIsOpen, 
    setModelLocation, 
    setAgentItem, 
    setSelectAgent,
    setResource_add,
} ) => {
    
    const handleDelete = source => {
        console.log(source);
        item.resources = [...removeItem(item.resources, source)];
        setAgentItem(item);
    };
    React.useEffect(()=>{
        setAgentItem(item);
    },[setAgentItem, item, item.resources]);
    const setLocation = e => {
        if(e && e.pageX && e.pageY){
            return {
                top: `${e.pageY + 30}px`,
                left: '120px',
            }
        }
        return {
            top: 'calc(50% - 75px)',
            left: '120px',
        }
    };
    const addToolClick = e => {
        setModelLocation(setLocation(e));
        setIsOpen(true);
        setResource_add();
        setSelectAgent(item);
    };
    return <div className='agent-item'>
        <div className='agent-icon'>
            <img src={item.icon} width='80px' height='80px' alt='' />
        </div>
        <div className='agent-content'>
            <div className='agent-attr'>
                <div className='item-name'>
                    <i className='icon-desktop'></i>
                    <span>{item.name}</span>
                </div>
                <div className='item-status'>
                    <span className={item.status}>{item.status}</span>
                </div>
                <div className='item-ip'>
                    <i className='icon-info'></i>
                    <span>{item.ip}</span>
                </div>
                <div className='item-folder'>
                    <i className='icon-folder'></i>
                    <span>{item.location}</span>
                </div>
            </div>
            <div className='agent-avtive'>
                <div className='agent-avtive-left'>
                    <span className='add-tool icon-plus' onClick={(e)=>{addToolClick(e)}}></span>
                    {item&&item.resources&&item.resources.map((source, key)=>{
                        return <div key={key} className='delete-tool' onClick={()=>handleDelete(source)}>
                            <span className='item-resource' >{source}</span>
                            <i className='icon-trash'></i>
                        </div>
                    })}
                </div>
                {item.status && item.status === 'building' &&(
                    <div className='agent-avtive-right'>
                    <i className='icon-deny'></i>
                    <span>Deny</span>
                </div>
                )}
            </div>
        </div>
    </div>
};
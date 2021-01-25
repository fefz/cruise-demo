import React from "react";
import { MessageItem } from "./MessageItem";
import { MessageContent } from "./styled/messageContent";

export const MessageBox = () => {
    const buildingProps = {
        title: 'Building', 
        value: '3', 
        className: 'buildingBox',
        iconClass: 'messageIcon icon-cog',
        
    };
    const idleProps = {
        title: 'Idle', 
        value: '5', 
        className: 'idleBox',
        iconClass: 'messageIcon icon-coffee',
        
    };
    const otherProps = {
        title: ['ALL','PHYSICAL','VIRTUAL'], 
        value: [8,4,4], 
        className: 'otherBox',
        iconClass: '',
        
    };
    return <MessageContent className='messageBox'>
        <MessageItem { ...buildingProps} />
        <MessageItem { ...idleProps} />
        <MessageItem { ...otherProps} />
    </MessageContent>
};
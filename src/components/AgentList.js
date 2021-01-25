import React from "react";
import { AgentBox } from "./styled/agentBox";
import { AgentItem } from "./AgentItem";
import { Model } from "./Model";
import { AllowOpenModelClass, iconList } from "../contants";
//import { useDispatch, useSelector } from "react-redux";

export const AgentList = ( { agents, setAgents } ) => {
    const [ isOpen, setIsOpen ] = React.useState(false);
    const [ modelLocation, setModelLocation ] = React.useState({
        top: 'calc(50% - 75px)',
        left: '120px',
    });
    const [ agentItem, setAgentItem ] = React.useState();
    const [ addResource, setResource_add ] = React.useState();
    const [ selectAgent, setSelectAgent] = React.useState({});
    const isAllowOpenModel = (className) => {
        const result = AllowOpenModelClass.some(classItem=>className.indexOf(classItem)>-1);
        return result;
    };
    React.useEffect(()=>{
        if(!isOpen)setSelectAgent({});
    },[isOpen]);
    document.onclick = e => {
        if(!isAllowOpenModel(e.target.className)){
            setIsOpen(false);
        }
    };
    const modelProps = {
        isOpen, 
        setIsOpen,
        modelLocation,
        setResource_add,
        setSelectAgent,
    };

    return <>
        <div className='agent-list'>
            {agents && agents.length > 0 && agents.map((item,key)=>{
                item.icon = iconList[item.os]
                if(selectAgent && selectAgent.id === item.id && addResource){
                    item.resources.push(addResource);
                }
                if(agentItem && agentItem.id === item.id){
                    item.resources = [...agentItem.resources];
                }
                const itemProps = {
                    item,
                    setIsOpen,
                    setModelLocation,
                    setAgentItem,
                    setSelectAgent,
                    setResource_add,
                }
                return <AgentBox key={key}>
                    <AgentItem {...itemProps} />
                </AgentBox>
            })}
        </div>
        <Model {...modelProps} />
    </>
};
        
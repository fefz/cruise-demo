import React from 'react';
import { Content, MessageBox, TabBarBox, AgentList } from "../components";
import { getAgentList } from "../services/serviceApi";
//import { useDispatch, useSelector } from "react-redux";
//import { getAgentData } from "../redux/actions";
//import { agentDataInfo } from "../redux/selector";

const RightContent = () => {
    const [ agents, setAgents ] = React.useState({});
    const [ datafilter, setDataFilter ] = React.useState('');
    //const dispatch = useDispatch();
    const getAgentData = () => {
        getAgentList().then((data)=> {
            setAgents(data);
            //dispatch(data);
        });
    }
    React.useEffect(()=> {
        getAgentData();
        //dispatch(getAgentData());
    },[]);
    React.useEffect(()=> {
        getAgentList().then((data)=> {
            setAgents(data.filter(agent => agent.name.indexOf(datafilter) > -1));
        });
    },[datafilter]);
    // const testData = useSelector(agentDataInfo());
    const agentProps = {
        agents,
        setAgents,
    };
    const tabProps = {
        setDataFilter,
    };
    return <Content>
        <MessageBox />
        <TabBarBox {...tabProps} />
        <AgentList {...agentProps} />
    </Content>
};

export default RightContent;
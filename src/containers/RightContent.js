import React from 'react';
import { Content, MessageBox, TabBarBox, AgentList } from "../components";
import { getAgentList } from "../services/serviceApi";

const RightContent = () => {
    const [ agents, setAgents ] = React.useState({});
    const [ datafilter, setDataFilter ] = React.useState('');
   
    React.useEffect(()=> {
        getAgentList().then((data)=> {
            setAgents(data.filter(agent => agent.name.indexOf(datafilter) > -1));
        });
    },[datafilter]);
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
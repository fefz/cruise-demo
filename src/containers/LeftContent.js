import React from 'react';
import { LeftMenuBox, LeftMenu } from "../components";

const LeftContent = ( { menu, agents } ) => {
    const data = {menu, agents};
    return <LeftMenuBox>
        <LeftMenu {...data}></LeftMenu>
    </LeftMenuBox>
};

export default LeftContent;
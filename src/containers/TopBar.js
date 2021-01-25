import React from 'react';
import { TopBarBox, TopBarTitle, TopBarUserInco, ContentBox } from "../components";
import { topBarStyle } from "../contants";

const TopBar = () => {
    return <TopBarBox>
        <ContentBox { ...topBarStyle } >
            <TopBarTitle />
            <TopBarUserInco />
        </ContentBox>
    </TopBarBox>
};

export default TopBar;
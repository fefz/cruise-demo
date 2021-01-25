import React from "react";
import { TabBarContent } from "./styled/tabBarContent";
import { TabBarLeft } from "./TabBarLeft";
import { TabBarRight } from "./TabBarRight";

export const TabBarBox = ( { setDataFilter} ) => {
    const filterSerch = {
        setDataFilter
    };
    return <TabBarContent>
        <TabBarLeft {...filterSerch} />
        <TabBarRight />
    </TabBarContent>
};
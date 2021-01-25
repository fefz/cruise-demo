import React from "react";
import { LeftMenuItem } from "./styled/leftMenuItem";
import { leftMenuStyle } from "../contants";
import { HistoryContent } from "./History";

export const LeftMenu = ( { menu, agents } ) => {
    const [ selectItem, setSelectItem ] = React.useState(( item = {})=>{
        return item.id ? item : { id: 1 };
    });
    return <>
        <ul>
            {menu && React.Children.toArray(menu.map((item, key) => {
                if(item.id === selectItem.id){
                    return <LeftMenuItem {...leftMenuStyle} key={key}>
                        <a href='/#' onClick={() => setSelectItem(item)}>
                            <i className={item.icon}></i>
                            {item.lable}
                        </a>
                    </LeftMenuItem>
                }
                return <LeftMenuItem>
                        <a href='/#' onClick={() => setSelectItem(item)} key={key}>
                            <i className={item.icon}></i>
                            {item.lable}
                        </a>
                    </LeftMenuItem>
            }))}
        </ul>
        <HistoryContent data={agents} /> 
    </>
};
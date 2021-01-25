import React from "react";
import { HistoryItem } from "./styled/historyItem";

export const HistoryList = ( { data } ) => {
    return <ul>
        {data && data.map((item, key) => {
            return <HistoryItem key={key}>
                <a href='/#'>{item.name}</a>
            </HistoryItem> 
        })}
    </ul>
};
import React from "react";
import { HistoryBox } from "./styled/historyBox";
import { HistoryTitle } from "./styled/historyTitle";
import { HistoryList } from "./HistoryList";

export const HistoryContent = ( { data } ) => {
    return <HistoryBox>
        <HistoryTitle>
            History
        </HistoryTitle>
        <HistoryList data={data} />
    </HistoryBox>
};
import { createAction } from "@reduxjs/toolkit";
import * as CONSTANT from "./constant";

export const getAgentData = createAction(CONSTANT.GET_AGENT_DATA);
export const getAgentDataDone = createAction(CONSTANT.GET_AGENT_DATA_DONE,
    (data) => ({
        payload: {data}
    })    
);
export const getAgentDataError = createAction(CONSTANT.GET_AGENT_DATA_ERROR,
    (data) => ({
        payload: {data}
    })   
);
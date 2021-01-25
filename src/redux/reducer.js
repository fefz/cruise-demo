import { createReducer } from "@reduxjs/toolkit";
import { 
    getAgentData,
    getAgentDataDone,
    getAgentDataError,
 } from "./actions";

 export const initialState = {
     loading: true,
     agentList: {},
     error: {}
 }

 export default createReducer(initialState,{
     [getAgentData]: (state) => {
         state.loading = true;
         return state;
     },
     [getAgentDataDone]: (state, action) => {
        state.loading = false;
        state.agentList = {};
        state.error = action.payload || {};
        return state;
    },
    [getAgentDataError]: (state, action) => {
        state.loading = false;
        state.agentList = action.payload;
        return state;
    },
 });
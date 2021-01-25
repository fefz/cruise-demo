import { createSelector } from "@reduxjs/toolkit";
import { REDUCER_KEY } from "./constant";

export const agentData = state => (state[REDUCER_KEY] && state[REDUCER_KEY].agentList) || {};

export const agentDataInfo = () => createSelector([agentData], (state) => {
    return state;
});

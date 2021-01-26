import * as Types from "./constant";
import { removeItem } from "../utils/arryFormat";

const updateData = (state, targetState) => {
    return state.data.map(data=>{
        if(data.id === targetState.id)
            return targetState;
        return data;
    });
};
const deleteData = (state, targetState) => {
    return {...removeItem(state, targetState)};
};
export const reducer = ( state, action ) => {
    const { targetState } = action;
    switch(action.type){
        case Types.DELETE_AGENTS_DATA:
            return { ...state, [targetState]: updateData(state, targetState) };
        case Types.UPDATE_AGENTS_DATA:
            return { ...state, [targetState]: deleteData(state, targetState) };
        default:
            return state;
    };
};
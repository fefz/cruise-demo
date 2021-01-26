import * as Types from "./constant";

export const getAgentsData = ( state ) => {
    return {
        type: Types.GET_AGENTS_DATA,
        targetState: state
    }
};
export const deleteAgentsData = ( state ) => {
    return {
        type: Types.DELETE_AGENTS_DATA,
        targetState: state
    }
};
export const updateAgentsData = ( state ) => {
    return {
        type: Types.UPDATE_AGENTS_DATA,
        targetState: state
    }
};
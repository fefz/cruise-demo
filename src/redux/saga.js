import { takeLatest, put, call } from "redux-saga/effects";
import { GET_AGENT_DATA } from "./constant";
import { getAgentDataDone, getAgentDataError } from "./actions";
import { getAgentList } from "../services/serviceApi";

function *loadAgentInfoList(action) {
    try{
        const { data } = yield call(getAgentList, action.payload);
        yield put(getAgentDataDone(data));
    } catch (error){
        yield put(getAgentDataError(error));
    }
}

export default function* getAgentsSage() {
    yield takeLatest(GET_AGENT_DATA, loadAgentInfoList);
}
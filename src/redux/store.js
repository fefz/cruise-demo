import { createStore } from "redux";
import { reducer } from "./reducer";

const initValues = {
    data: {}
}

const store = createStore(reducer, initValues);
export default store;
import {combineReducers} from "@reduxjs/toolkit";
import shiftDataReducer from "./features/Scheduler/shiftDataSlice";

const rootReducer = combineReducers({
    shiftDataReducer
});

export default rootReducer;

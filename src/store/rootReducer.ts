import {combineReducers} from "redux";
import alertHistoryReducers from "./alertHistory/reducers";
import isLoadingReducers from "./isLoading/reducers";
import sensorReducers from "./sensors/reducers";


export const rootReducer = combineReducers(
    {
        alertHistory: alertHistoryReducers,
        isLoading: isLoadingReducers,
        sensors: sensorReducers
    }
)

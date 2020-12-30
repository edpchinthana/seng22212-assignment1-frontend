const initialState : any =[];
const alertHistoryReducers = (state = initialState, action : any) => {
    switch (action.type){
        case "FETCH_ALERT_HISTORY":
            return action.payload;
        default:
            return state;
    }
}

export default alertHistoryReducers;
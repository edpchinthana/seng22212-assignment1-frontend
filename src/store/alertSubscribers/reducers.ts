const initialState : any =[

];
const alertSubscribersReducers = (state = initialState, action : any) => {
    switch (action.type){
        case "FETCH_ALERT_SUBSCRIBERS":
            return action.payload;
        default:
            return state;
    }
}

export default alertSubscribersReducers;
const initialState : boolean = false;

const isLoadingReducers = (state = initialState, action : any) => {
    switch (action.type) {
        case "SET_LOADING":
            return  true;
        case "REMOVE_LOADING":
            return false;
        default :
            return state;
    }
}
export default isLoadingReducers;
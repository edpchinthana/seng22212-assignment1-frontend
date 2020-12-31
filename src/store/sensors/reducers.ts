const initialState : any ={
    categories:[],
    sensors:[],
    sensorData:[],
    from:(new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)).toISOString().substr(0,10),
    to:new Date(Date.now()).toISOString().substr(0,10),
    selectedSensor:null,
    selectedCategory:null
}
const sensorReducers = (state = initialState, action : any) => {
    switch (action.type){
        case "FETCH_SENSOR_CATEGORIES":
            return {
                ...state,
                categories: action.payload,
            };
        case "FETCH_SENSORS":
            return {
                ...state,
                sensors:action.payload.data,
                selectedCategory:action.payload.selectedCategory,
                selectedSensor:null

            }

        case "FETCH_SENSOR_DATA":
            return {
                ...state,
                sensorData:action.payload.data,
                to:action.payload.to,
                from:action.payload.from,
                selectedSensor:action.payload.selectedSensor,
            }

        default:
            return state;
    }
}

export default sensorReducers;


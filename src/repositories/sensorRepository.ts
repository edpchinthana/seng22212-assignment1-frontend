import {removeLoading, setLoading} from "../store/isLoading/actions";
import RestHTTP from "../services/RestHTTP";
import {fetchSensorCategories, fetchSensorData, fetchSensors} from "../store/sensors/actions";

const categoryEndpoint = "/category";
const sensorEndpoint = "/sensor";
const dataEndpoint = "/data";

export const getSensorCategories = () => async(dispatch:any) => {
    try{
        dispatch(setLoading());
        const res = await RestHTTP.GET(categoryEndpoint,[]);
        dispatch(fetchSensorCategories(res));
    }catch (e){
        throw e;
    }finally {
        dispatch(removeLoading());
    }
}

export const getSensors = (category: any) => async(dispatch: any) => {
    try{
        //dispatch(setLoading());
        const param = {
            sensorType: category.type
        }
        const res = await RestHTTP.GET(sensorEndpoint,param);
        const payload = {
            data:res,
            selectedCategory: category
        }
        dispatch(fetchSensors(payload));
    }catch (e){
        throw e;
    }finally {
        //dispatch(removeLoading());
    }
}

export const addSensors = (sensor: any) => async(dispatch: any) => {
    try{
        dispatch(setLoading());
        const sensors = [];
        sensors.push(sensor)
        const res = await RestHTTP.POST(sensorEndpoint,sensors);
    }catch (e){
        throw e;
    }finally {
        dispatch(removeLoading());
    }
}

export const updateSensor = (sensor: any) => async(dispatch: any) => {
    try{
        dispatch(setLoading());
        await RestHTTP.PUT(sensorEndpoint,sensor);
    }catch (e){
        throw e;
    }finally {
        dispatch(removeLoading());
    }
}


export const getSensorData = (sensor:any, from:any, to:any) => async (dispatch: any) => {
    try{

       // dispatch(setLoading());
        const param = {
            sensorId: sensor.id,
            from:from,
            to:to
        }
        console.log(param);
        const res = await RestHTTP.GET(dataEndpoint,param);
        const payload = {
            data:res,
            from:from,
            to:to,
            selectedSensor:sensor
        }
        dispatch(fetchSensorData(payload));
    }catch (e){
        throw e;
    }finally {
       // dispatch(removeLoading());
    }
}
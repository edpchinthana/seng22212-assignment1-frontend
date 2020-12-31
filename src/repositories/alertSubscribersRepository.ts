import RestHTTP from "../services/RestHTTP";
import { fetchAlertSubscribers } from "../store/alertSubscribers/actions";
import { setLoading, removeLoading } from "../store/isLoading/actions";

const endpoint = "/alertSubscriber";

export const getAlertSubscribers = () => async (dispatch : any) => {
    
    try{
        dispatch(setLoading());
        const res =  await RestHTTP.GET(endpoint,[]);
        dispatch(fetchAlertSubscribers(res))
        dispatch(removeLoading());
    }catch (e) {
        dispatch(removeLoading());
        throw e;
    }

}

export const addAlertSubscriber = (data : any) => async (dispatch : any) => {
    
    try{
        dispatch(setLoading());
        const res =  await RestHTTP.POST(endpoint,data);
        dispatch(removeLoading());
    }catch (e) {
        dispatch(removeLoading());
        throw e;
    }

}

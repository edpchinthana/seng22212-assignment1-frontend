import RestHTTP from "../services/RestHTTP";
import {fetchAlertHistory} from "../store/alertHistory/actions";
import {removeLoading, setLoading} from "../store/isLoading/actions";

const endpoint = "/alert";

export const getAlertHistory = () => async (dispatch : any) => {
    try{
        dispatch(setLoading());
        const res =  await RestHTTP.GET(endpoint,[]);
        dispatch(fetchAlertHistory(res));
        dispatch(removeLoading());
    }catch (e) {
        dispatch(removeLoading());
        throw e;
    }

}
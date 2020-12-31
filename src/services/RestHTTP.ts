import axios from "axios";

//const host="https://api-server-t2h37jtwmq-uc.a.run.app/api";
//const host="http://localhost:8080/api";
const host="https://api.monitor-sensor-management-system.live/api";
export default {

    GET: async (endpoint:string, param:any) => {
        return await axios.get(`${host}${endpoint}`,
            {
                params :param,
                headers:{
                    'Authorization': `Bearer `,
                },
            }
        ).then( response => {
            return response.data;
        }).catch( error=> {
            throw error;
        }).catch(error => {
            throw error;
        })

    },

    POST: async (endpoint:string, data:any) => {
        return await axios.post(`${host}${endpoint}`,
            data,
            {
                headers: {
                    'Authorization': `Bearer `,
                    'Content-Type' : 'application/json'
                },

            }) .then((response) => {

        })
            .catch((e) => {
                throw e
            })
    },
    PUT: async (endpoint:string, data:any) => {
        return await axios.put(`${host}${endpoint}`,
            data,
            {
                headers: {
                    'Authorization': `Bearer `,
                    'Content-Type' : 'application/json'
                },

            }) .then((response) => {

        })
            .catch((e) => {
                throw e
            })
    }

}

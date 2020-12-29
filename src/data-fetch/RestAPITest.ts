import axios from 'axios'
import {host} from "./env";
// import {host} from './env.ts'
const HOST = host


export const API = {
    GET: async (endpoint:string) => {
        // return await axios.defaults.get(`${HOST}${endpoint}`,
       return await axios.get<any>(`${HOST}${endpoint}`,

        ).then( response => {
            console.log(response.data)
            return response.data
        }).catch( e=> {
            throw e
        })
    },
    // POST: async (endpoint,idToken,data) => {
    //     return await axios.post(`${HOST}${endpoint}`,
    //         data,
    //         {
    //             headers: {
    //                 'Authorization': `Bearer ${idToken}`,
    //                 'Content-Type' : 'application/json'
    //             },
    //
    //         })
    //         .then((response) => {
    //
    //         })
    //         .catch((e) => {
    //             throw e
    //         })
    // },
    // POST_WITH_PARAMS:async (endpoint,idToken, param) => {
    //     return await axios.post(`${HOST}${endpoint}`,  null  ,
    //         {params :param
    //         },
    //
    //         {headers: {
    //                 'Authorization': `Bearer ${idToken}`,
    //                 'Content-Type' : 'application/json'
    //             }
    //         },
    //     ).then( response => {
    //
    //     }).catch(e => {
    //         throw e
    //
    //     })
    // },
    // PUT: async (endpoint,idToken, param,data) => {
    //     return await axios.put(`${HOST}${endpoint}`,
    //         data,
    //         {params :param
    //         },
    //
    //         {headers: {
    //                 'Authorization': `Bearer ${idToken}`,
    //                 'Content-Type' : 'application/json'
    //             }
    //         },
    //     ).then( response => {
    //
    //     }).catch(e => {
    //         throw e
    //
    //     })
    // },
    // DELETE: async (endpoint,idToken, param) => {
    //     return await axios.delete(`${HOST}${endpoint}`,
    //         {params :param
    //         },
    //         {headers: {
    //                 'Authorization': `Bearer ${idToken}`
    //             }
    //         },
    //     ).then( response => {
    //
    //     }).catch( e=> {
    //         console.log(e)
    //         throw e
    //     })
    // }

}

import React from 'react';
import {API} from "./RestAPITest";

class NoName extends React.Component<any, any>{

    constructor(props:any) {
        super(props);
        this.state={categoryList: []}
    }

    getCategory = async ()=>{
       const r= await API.GET("/category")
        this.setState({categoryList:r})
    }


    componentDidMount() {
       this.getCategory();
    }
    render() {
        return <div>Pasindu
            {this.state.categoryList.map((r:any, index:number)=> <div><span>{r.type}</span><span>{r.id}</span></div>)}
        </div>;
    }
}
export default NoName;

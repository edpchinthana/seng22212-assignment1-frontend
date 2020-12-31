import React from "react";
import {Line} from "react-chartjs-2";

function CustomLine(props:any){

    const labels: any[]=[];
    const dataSet: any[]=[];
    const thresholdSet: any[]=[];

    props.data.map((data: any, index:number)=>{
        labels.push(new Date(data.capturedDate).toDateString().substr(4));
        dataSet.push(data.dataValue);
        thresholdSet.push(data.threshold);
    })

    const chartData = {
        labels: labels,
        datasets:[
            {
                label: "Sensor Reading",
                data:dataSet,
                fill:true,
                borderColor:'#6200ff'
            },
            {
                label: "Threshold Value",
                data:thresholdSet,
                fill:false,
                borderColor:'#ff1a00'
            }
        ],
        options:{
            responsive:false,
            maintainAspectRatio: false
        }

    }

    return <Line data={chartData} height={35} width={100}/>
}

export default CustomLine;

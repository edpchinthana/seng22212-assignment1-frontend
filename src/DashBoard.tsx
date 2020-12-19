import React from 'react';
import { Line } from "react-chartjs-2";
import {
    useParams
} from "react-router-dom";
import {Container} from "react-bootstrap";

const DashBoard: React.FC = () => {
    document.title='weatherApp | Dashboard'
    let {sensor}: any = useParams();

    const renderIcon = (val: number) => {
        switch (sensor) {
            case 'temperature':
                return <div className='p-dashboard-line'>
                    <i className="feather-thermometer"/>
                    <span>Outdoor temperature</span>
                    <p>{val} °F</p>
                </div>
            case 'rain':
                return <div className='p-dashboard-line'>
                    <i className="feather-cloud-rain"/>
                    <span>Last Rain record</span>
                    <p>{val} mm</p>
                </div>
            case 'wind':
                return <div className='p-dashboard-line'>
                    <i className="feather-wind"/>
                    <span>Last wind record</span>
                    <p>{val} kmph</p>
                </div>
            case 'humidity':
                return <div className='p-dashboard-line'>
                    <i className="feather-cloud"/>
                    <span>Outdoor humidity</span>
                    <p>{val} g.kg-1</p>
                </div>
            default:
                return
        }
    }
    type record={
        time: number,
        value: number
    }

    //Todo: add json data into this constants.
    const temperature: record[]=[ {time:0, value:34},  {time:2, value:36},  {time:4, value:28}, {time:6, value:30}, {time:8, value: 28}, {time:10, value:27}, {time:12, value:30},{time:14, value:28}, {time:16, value: 28}, {time:18, value:27}, {time:20, value: 28}, {time:22, value:27}];
    const rain: record[]=[ {time:0, value:22},  {time:2, value:27},  {time:4, value:23}, {time:6, value:24}, {time:8, value: 22}, {time:10, value:24}, {time:12, value:30},{time:14, value:32}, {time:16, value: 32}, {time:18, value:27}, {time:20, value: 26}, {time:22, value:25}];
    const wind: record[]=[ {time:0, value:34},  {time:2, value:36},  {time:4, value:44}, {time:6, value:34}, {time:8, value: 58}, {time:10, value:45}, {time:12, value:34},{time:14, value:34}, {time:16, value: 68}, {time:18, value:65}, {time:20, value: 58}, {time:22, value:45}];
    const humanity: record[]=[ {time:0, value:34},  {time:2, value:36},  {time:4, value:44}, {time:6, value:34}, {time:8, value: 38}, {time:10, value:35}, {time:12, value:20},{time:14, value:17}, {time:16, value: 18}, {time:18, value:15}, {time:20, value: 28}, {time:22, value:25}];
    const dType=(sensor==='wind')?wind:(sensor==='temperature')?temperature:(sensor==='rain')?rain:humanity;

    const val: number = dType[dType.length-1].value;
    const data = {
        labels: dType.slice(Math.max(dType.length - 10, 1)).map((record:record)=> record.time),
        datasets: [
            {
                label: sensor,
                data: dType.slice(Math.max(dType.length - 10, 1)).map((record:record)=> record.value),
                fill: false,
                borderColor: (sensor==='wind')?'#0d8c1a':(sensor==='temperature')?'#ac1010':(sensor==='rain')?'#0824b3':'#13caaf'
            }
        ],
        options: {
            responsive: true,
            maintainAspectRatio: false,
        }
    };

    return (
        <div className='dashboard'>
            <br/><br/>
            <h2 className='pt-4'>Dashboard</h2>
            <br/>
            <Container>
                {renderIcon(val)}
                <Line data={data}/>
            </Container>
            <br/><br/>
        </div>
    );
}

export default DashBoard;

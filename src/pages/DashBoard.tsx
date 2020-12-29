import React, {useState} from 'react';
import {Line} from "react-chartjs-2";
import {
    useParams
} from "react-router-dom";
import {Col, Container, Row} from "react-bootstrap";

const DashBoard: React.FC = () => {
    document.title = 'weatherApp | Dashboard'
    let {sensor}: any = useParams();
    let icon = (sensor === 'temperature') ? "feather-thermometer" : (sensor === "rain") ? "feather-cloud-rain" : (sensor === 'wind') ? "feather-wind" : "feather-cloud";
    // let dropdown = "Outdoor temperature";
    let sensorSet = ['Temperature', 'rain', 'humidity'];

    let day = new Date(Date.now() - 86400000*20);
    const [startDate, setStartDate]=useState(day.toISOString().slice(0, 10))
    const [endDate, setEndDate]=useState(new Date().toISOString().slice(0, 10))
    const onChangeStartHandle =  (e: React.ChangeEvent<HTMLInputElement>) => {setStartDate(e.target.value);}
    const onChangeEndHandle =  (e: React.ChangeEvent<HTMLInputElement>) => {setEndDate(e.target.value);}
    //
    // const renderIcon = (val: number) => {
    //     switch (sensor) {
    //         case :
    //                 icon ="feather-thermometer";
    //         case 'rain':
    //                 icon ="feather-cloud-rain";
    //         case 'wind':
    //                 icon=;
    //         case 'humidity':
    //
    //         default:
    //                 icon="feather-wind";
    //
    //     }
    // // }
    type record = {
        time: number,
        value: number
    }

    let categoryList;

    // const componentDidMount = () => {
    //     const apiUrl = 'https://api-server-t2h37jtwmq-uc.a.run.app/api/category';
    //     fetch(apiUrl)
    //         .then((response) => console.log(response.body) )
    // }
    //
    // componentDidMount();



    //Todo: add json data into this constants.
    const temperature: record[] = [{time: 0, value: 34}, {time: 2, value: 36}, {time: 4, value: 28}, {
        time: 6,
        value: 30
    }, {time: 8, value: 28}, {time: 10, value: 27}, {time: 12, value: 30}, {time: 14, value: 28}, {
        time: 16,
        value: 28
    }, {time: 18, value: 27}, {time: 20, value: 28}, {time: 22, value: 27}];
    const rain: record[] = [{time: 0, value: 22}, {time: 2, value: 27}, {time: 4, value: 23}, {
        time: 6,
        value: 24
    }, {time: 8, value: 22}, {time: 10, value: 24}, {time: 12, value: 30}, {time: 14, value: 32}, {
        time: 16,
        value: 30
    }, {time: 18, value: 27}, {time: 20, value: 26}, {time: 22, value: 25}];
    const wind: record[] = [{time: 0, value: 34}, {time: 2, value: 36}, {time: 4, value: 44}, {
        time: 6,
        value: 34
    }, {time: 8, value: 58}, {time: 10, value: 45}, {time: 12, value: 34}, {time: 14, value: 34}, {
        time: 16,
        value: 68
    }, {time: 18, value: 65}, {time: 20, value: 58}, {time: 22, value: 45}];
    const humanity: record[] = [{time: 0, value: 34}, {time: 2, value: 36}, {time: 4, value: 44}, {
        time: 6,
        value: 34
    }, {time: 8, value: 38}, {time: 10, value: 35}, {time: 12, value: 20}, {time: 14, value: 17}, {
        time: 16,
        value: 18
    }, {time: 18, value: 15}, {time: 20, value: 28}, {time: 22, value: 25}];
    const dType = (sensor === 'wind') ? wind : (sensor === 'temperature') ? temperature : (sensor === 'rain') ? rain : humanity;

    const val: number = dType[dType.length - 1].value;
    const data = {
        labels: dType.slice(Math.max(dType.length - 10, 1)).map((record: record) => record.time.toFixed(2) + 'h'),
        datasets: [
            {
                label: sensor,
                data: dType.slice(Math.max(dType.length - 10, 1)).map((record: record) => record.value),
                fill: false,
                borderColor: (sensor === 'wind') ? '#0d8c1a' : (sensor === 'temperature') ? '#ac1010' : (sensor === 'rain') ? '#0824b3' : '#13caaf'
            }
        ],
        options: {
            responsive: true,
            maintainAspectRatio: false,
        }
    };



    return (
        <Container className='dashboard min-vh-100'>
            <br/><br/>
            <h2 className='pt-4 text-left'>Dashboard</h2>
            <br/>
            <Container>
                <div className='p-dashboard-line'>
                    <Row>
                        <Col xs={12} sm={12} md={4}>
                            <i className={icon}/>
                            <select name="sensors" id="sensors">
                                {sensorSet.map((value: string) => <option value={value}>{value}</option>)}
                            </select>
                        </Col>
                        <Col xs={12} sm={6} md={4}>
                            <span className='float-left'>From:- </span>
                            <input className='float-left' type="date" id="start-date" name="start_date" onChange={onChangeStartHandle} placeholder=""    value={startDate? startDate: ''}/>
                        </Col>
                        <Col xs={12} sm={6} md={4}>
                            <span className='float-left'> To:- </span>
                            <input className='float-left' type="date" id="end-date" name="end_date" onChange={onChangeEndHandle} placeholder="" value={endDate? endDate: ""}/>
                        </Col>
                    </Row>
                    <p>{val}</p>
                </div>
                <Line data={data}/>
            </Container>
            <br/><br/>
        </Container>
    );
}

export default DashBoard;

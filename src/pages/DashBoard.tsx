import React, {useEffect, useState} from 'react';
import {Line} from "react-chartjs-2";
import {
    useParams
} from "react-router-dom";
import {Col, Container, Row} from "react-bootstrap";
import {API} from "../data-fetch/RestAPITest";

const DashBoard: React.FC = () => {
    document.title = 'weatherApp | Dashboard'
    let {sensor}: any = useParams();
    let icon = (sensor === 'temperature') ? "feather-thermometer" : (sensor === "rain") ? "feather-cloud-rain" : (sensor === 'wind') ? "feather-wind" : "feather-cloud";

    let day = new Date(Date.now() - 86400000*20);
    const [startDate, setStartDate]=useState(day.toISOString().slice(0, 10))
    const [endDate, setEndDate]=useState(new Date().toISOString().slice(0, 10))
    const onChangeStartHandle =  (e: React.ChangeEvent<HTMLInputElement>) => {setStartDate(e.target.value);}
    const onChangeEndHandle =  (e: React.ChangeEvent<HTMLInputElement>) => {setEndDate(e.target.value);}

    type sensorRecode = {
        capturedDate: string
        dataValue: number
        id: string
        sensorId: string
        threshold: number
        type: string
        unit: string
    }

    let sensorId='0cbf24d4-0105-4719-a56a-4e6c3cc4def1';//TODO give selected sensor id

    const getSensorSet = async ()=>{
        const r= await API.GET(`/data?sensorId=${sensorId}&from=${startDate}&to=${endDate}`);
        console.log(r)
        return r;
    }

    let sensorSet = ['Temperature', 'rain', 'humidity'];

    let fetchedDataSet: sensorRecode[];
    const getRecord = async ()=>{
        const r= await API.GET(`/data?sensorId=${sensorId}&from=${startDate}&to=${endDate}`);
        console.log(r)
        fetchedDataSet=r;
        return r
    }
    const [sensorData, setSensorData]=useState<any>(null);
    const [lastRead, setLastRead]=useState<any>('');

    useEffect(()=>{
        getRecord().then(()=>{
            let val= fetchedDataSet[fetchedDataSet.length - 1].dataValue;

            let data = {
                // labels: dType.map((record: record) => record.time.toFixed(2) + 'h'),
                labels:  fetchedDataSet.map((recode)=>recode.capturedDate),

                datasets: [
                    {
                        label: sensor,
                        data: fetchedDataSet.map((recode)=>recode.dataValue),
                        fill: false,
                        borderColor: (sensor === 'wind') ? '#0d8c1a' : (sensor === 'temperature') ? '#ac1010' : (sensor === 'rain') ? '#0824b3' : '#13caaf'
                    }
                ],
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                }
            };
            setSensorData(data);
            setLastRead(val);
        })
    }, [startDate, endDate])

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
                    <p>{lastRead}</p>
                </div>
                <Line data={sensorData}/>
            </Container>
            <br/><br/>
        </Container>
    );
}

export default DashBoard;

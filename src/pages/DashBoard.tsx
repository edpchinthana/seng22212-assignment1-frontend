import React, {ChangeEvent, useEffect, useState} from 'react';
import {Line} from "react-chartjs-2";
import {useParams} from "react-router-dom";
import {Col, Container, Row} from "react-bootstrap";
import {API} from "../data-fetch/RestAPITest";
import {SensorMeta, sensorRecode} from "../types/types";
import Swal from "sweetalert2";

const DashBoard: React.FC = () => {
    document.title = 'weatherApp | Dashboard'
    let {sensor}: any = useParams();
    let icon = (sensor === 'temperature') ? "feather-thermometer" : (sensor === "rain") ? "feather-cloud-rain" :
        (sensor === 'wind') ? "feather-wind" : "feather-cloud";
    let day = new Date(Date.now() - 86400000 * 20);
    const [startDate, setStartDate] = useState(day.toISOString().slice(0, 10));
    const [endDate, setEndDate] = useState(new Date().toISOString().slice(0, 10));
    const onChangeStartHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setStartDate(e.target.value);
    };
    const onChangeEndHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEndDate(e.target.value);
    };
    const [sensorData, setSensorData] = useState<any>({labels: [], datasets: [], options: []});
    const [lastRead, setLastRead] = useState<any>('');
    const [sensorId, setSensorId] = useState<any>('');
    const [sensorSet, setSensorSet] = useState<SensorMeta[]>([]);

    let fetchedSensorSet: SensorMeta[];
    const getSensorSet = async () => {
        const r = await API.GET(`/sensor?sensorType=${sensor.toUpperCase()}`);
        fetchedSensorSet = r;
        return r;
    }

    useEffect(() => {
        getSensorSet().then(() => {
            let sensors = fetchedSensorSet.map((sen: SensorMeta) => sen);
            setSensorSet(sensors);
        })

        if (sensor !== "temperature") {
            Swal.fire('Sorry. Those type of sensors does not have setup.  ' +
                'Temperature sensors only have been set up.');
        } else {
            Swal.fire('Please select the sensor and time range as you wish');
        }
    }, [sensor])

    let fetchedDataSet: sensorRecode[];
    const getRecord = async () => {
        const r = await API.GET(`/data?sensorId=${sensorId}&from=${startDate}&to=${endDate}`);
        fetchedDataSet = r;
        return r
    }

    useEffect(() => {
        getRecord().then(() => {
            let val = fetchedDataSet[fetchedDataSet.length - 1].dataValue;
            let data = {
                // labels: dType.map((record: record) => record.time.toFixed(2) + 'h'),
                labels: fetchedDataSet.map((recode) => `${new Date(recode.capturedDate).getDate()}d-${new Date(recode.capturedDate).getHours()}:${new Date(recode.capturedDate).getMinutes()}h`),
                // labels: fetchedDataSet.map((recode) => recode.capturedDate),
                datasets: [
                    {
                        label: sensor,
                        data: fetchedDataSet.map((recode) => recode.dataValue),
                        fill: false,
                        borderColor: (sensor === 'wind') ? '#0d8c1a' : (sensor === 'temperature') ? '#ac1010' :
                            (sensor === 'rain') ? '#0824b3' : '#13caaf'
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

    }, [startDate, endDate, sensorId])

    return (
        <Container className='dashboard min-vh-100'>
            <br/><br/>
            <h2 className='pt-4 text-left'>Dashboard</h2>
            <div className='p-dashboard-line'>
                <Row>
                    <Col xs={12} sm={12} md={4}>
                        <i className={icon}/>
                        <select name="sensors" id="sensors"
                                onChange={(e: ChangeEvent<HTMLSelectElement>) => setSensorId(e.target.value)}>
                            <option value=" ">Select Sensor</option>
                            {sensorSet.map((value: SensorMeta) => <option value={value.id}>{value.title}</option>)}
                        </select>
                    </Col>
                    <Col xs={12} sm={6} md={4}>
                        <span className='float-left'>From:- </span>
                        <input className='float-left' type="date" id="start-date" name="start_date"
                               onChange={onChangeStartHandle}
                               placeholder="" value={startDate ? startDate : ''}/>
                    </Col>
                    <Col xs={12} sm={6} md={4}>
                        <span className='float-left'> To:- </span>
                        <input className='float-left' type="date" id="end-date" name="end_date"
                               onChange={onChangeEndHandle}
                               placeholder="" value={endDate ? endDate : ''}/>
                    </Col>
                </Row>
                <br/>
                <div className='float-right pr-4'>
                    <span className='float-left'>Last read value - </span>
                    <span className='float-left'>{lastRead}</span>
                </div>
            </div>
            <div className='d-none d-md-block d-lg-none'><Line data={sensorData} width={100} height={50}/></div>
            <div className='d-none d-lg-block'><Line data={sensorData} width={100} height={35}/></div>
            <div className='d-none d-sm-block d-md-none'><Line data={sensorData} width={100} height={70}/></div>
            <div className='d-sm-none'><Line data={sensorData} width={90} height={100}/></div>
            <br/><br/>
        </Container>
    );
}

export default DashBoard;

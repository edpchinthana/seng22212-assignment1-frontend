import React from 'react';
import { Line } from "react-chartjs-2";
import {
    useParams
} from "react-router-dom";
import {Container} from "react-bootstrap";

const DashBoard: React.FC = () => {
    let {sensor}: any = useParams();

    const renderIcon = () => {
        switch (sensor) {
            case 'temperature':
                return <i className="feather-thermometer"/>
            case 'rain':
                return <i className="feather-cloud-rain"/>
            case 'wind':
                return <i className="feather-wind"/>
            case 'humidity':
                return <i className="feather-cloud"/>

        }
    }

    const data = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
            {
                label: "Second dataset",
                data: [33, 25, 35, 51, 54, 76],
                fill: false,
                borderColor: "#742774"
            }
        ]
    };

    return (
        <React.Fragment>
            <h2 className='pt-4'>Dashboard</h2>
            <p>{sensor}</p>
            {renderIcon()}
            <Container>
                <Line data={data}/>
            </Container>


        </React.Fragment>
    );
}

export default DashBoard;

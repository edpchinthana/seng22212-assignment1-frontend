import React from 'react';
import {
    useParams
} from "react-router-dom";

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

    return (
        <React.Fragment>
            <h2 className='pt-4'>Dashboard</h2>
            <p>{sensor}</p>
            {renderIcon()}


        </React.Fragment>
    );
}

export default DashBoard;

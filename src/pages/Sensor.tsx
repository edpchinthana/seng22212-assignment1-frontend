import React, {useState} from "react";
import {Row, Col, Container} from "react-bootstrap";
import {SensorMeta} from "../types/types";
import SensorForm from "./SensorForm";



type SensorProps={
    sensor:SensorMeta
    num: number
}

const Sensor:React.FC<SensorProps>=(props)=>{
    const {sensor,num}=props;
    const [isUpdatable, setIsUpdatable]= useState(false)

    const [isEditClick,setIsEditClick]=useState(false);
    const handleEditClick=()=>{
        setIsUpdatable(true);

    }
    const onSensorDelete = () => {

    }

    return(
        <Container className='sensor'>
            <Row className='pt-1 pb-1 pl-0 pr-4 text-left'>
                <Col xs={9} className="pl-0">
                    <label className='mb-2 float-left text-left'>{num}.  {sensor.title}  </label>
                </Col>
                <Col xs={3} className='text-right'>
                    {!isEditClick && <i className='feather-edit mr-3' onClick={()=>handleEditClick()}/>}
                    {!isEditClick && <i className='feather-trash-2' onClick={()=>onSensorDelete()}/>}
                </Col>
            </Row>
            <Row>
                <Col>
                    {
                        isUpdatable &&  <SensorForm formTitle={"Update Sensor"} sensor={sensor} setIsUpdatable={setIsUpdatable}/>
                    }
                </Col>

            </Row>
        </Container>
    );
};

export default Sensor;

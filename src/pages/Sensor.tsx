import React, {useState} from "react";
import {Row, Col, Container} from "react-bootstrap";
import {ISensor} from "../types/types";
import SensorForm from "./SensorForm";
import Swal from "sweetalert2";



type SensorProps={
    sensor:ISensor
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
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                //TODO create delete function here

                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })
    }

    return(
        <Container className='sensor'>
            <Row className='pt-1 pb-1 pl-0 pr-4 text-left'>
                <Col xs={9} className="pl-0">
                    <label className='mb-2 float-left text-left'>{num}.  {sensor.title} - {sensor.threshold} -{sensor.unit} </label>
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

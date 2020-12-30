import React, {ChangeEvent, FormEvent, useState} from "react";
import {Col, Button, Form} from "react-bootstrap";
import {ISensor,} from "../types/types";
import Swal from "sweetalert2";

type UpdateSensorProps = {
    sensor: ISensor;
    formTitle: string;
    setIsUpdatable: (arg: boolean) => void
}

const SensorForm: React.FC<UpdateSensorProps> = (props) => {
    const {sensor, formTitle} = props;
    const [id, setId] = useState(sensor.id);
    const [title, setTitle] = useState(sensor.title);
    const [threshold, setThreshold] = useState(sensor.threshold);
    const [type, setType] = useState(sensor.type);
    const [unit, setUnit] =useState(sensor.unit)
    const [validated, setValidated] = useState(false);
    const sensorCategories = JSON.parse(localStorage.getItem("SensorCategories") as string);


    const handleUpdate = (event: FormEvent) => {
        const form = event.currentTarget;
        // @ts-ignore
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else if (title !== null && id !== null && title !== '' && id !== '') {
            setValidated(false);
            Swal.fire({
                title: 'Do you want to save the changes?',
                showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: `Save`,
                denyButtonText: `Don't save`,
            }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                    Swal.fire('Saved!', '', 'success');
                    //TODO: create update function here

                    props.setIsUpdatable(false)
                } else if (result.isDenied) {
                    Swal.fire('Changes are not saved', '', 'info')
                    props.setIsUpdatable(false)
                }
            })
        } else {
            setValidated(true);
        }


    };


    return (
        <div className="update-Sensor mt-2 mb-5 pb-2 pt-5">
            <Form.Row>
                <Col className="text-left pl-1 mb-3">
                    <span>{formTitle}</span>
                </Col>
                <Col className="text-right">
                    <i className='feather-x-circle text-dark text-right' onClick={() => props.setIsUpdatable(false)}/>
                </Col>
            </Form.Row>
            <Form noValidate validated={validated} className="pl-5">

                <Form.Row>
                    <Form.Group className="form-group-dev">
                        <Form.Label className="text-left label-text">Title of Sensor</Form.Label>
                        <Form.Control required type="text" className="form-input" placeholder=""
                                      value={title ? title : ''}
                                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}/>
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group className="form-group-dev">
                        <Form.Label className="text-left label-text">Sensor Id</Form.Label>
                        <Form.Control className="form-input" required type="text" placeholder="" value={id ? id : ''}
                                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setId(e.target.value)}/>
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Label className="text-left Sensor-label">Sensor</Form.Label>
                    <Form.Group controlId="SensorSelectID" className="form-group-dev">
                        <select name="sensors" id="sensors"
                                onChange={(e: ChangeEvent<HTMLSelectElement>) => setType(e.target.value)}>
                            {
                                sensorCategories.map((sensorCategory: string) =>
                                    <option value={sensorCategory}>{sensorCategory}</option>)}
                        </select>
                    </Form.Group>
                </Form.Row>
                <Button onClick={event => handleUpdate(event)} size='sm' variant='primary'
                        className='float-right'>
                    {formTitle.split(' ')[0]}
                </Button>
            </Form>
        </div>
    );
};
export default SensorForm;

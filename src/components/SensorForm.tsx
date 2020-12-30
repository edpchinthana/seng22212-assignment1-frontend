import React, {ChangeEvent, FormEvent, useState} from "react";
import {Button, Col, Form, Row} from "react-bootstrap";
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
    const [unit, setUnit] = useState(sensor.unit)
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

                    if (formTitle.split(' ')[0] === 'Add') {
                        //TODO: add sensor function here.

                    } else {
                        //TODO: create sensor update function here
                    }

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
        <div className="my-4 p-3 "
             style={{maxWidth: '400px', border: '1px solid gray', margin: "auto", borderRadius: '10px'}}>
            <Form.Row>
                <Col className="pl-1 mb-3">
                    <strong style={{textDecoration: 'underline'}}>{formTitle}</strong>

                    <i className='feather-x-circle text-dark float-right' onClick={() => props.setIsUpdatable(false)}/>
                </Col>
            </Form.Row>
            <Form noValidate validated={validated}>

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
                        <Form.Label className=" label-text ">Sensor Id</Form.Label>
                        <Form.Control className="form-input" required type="text" placeholder="" value={id ? id : ''}
                                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setId(e.target.value)}/>
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group className="form-group-dev">
                        <Form.Label className="text-left label-text">Threshold</Form.Label>
                        <Row>
                            <Col xs={8} sm={8}>
                                <Form.Control className="form-input" required type="range" placeholder=""
                                              value={threshold ? threshold : ''}
                                              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setThreshold(Number(e.target.value))}/>
                            </Col>
                            <Col xs={4} sm={4}>
                                <Form.Control className="form-input" required type="text" placeholder=""
                                              value={threshold ? threshold : ''}
                                              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setThreshold(Number(e.target.value))}/>
                            </Col>
                        </Row>


                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Label className="text-left Sensor-label">Sensor type</Form.Label>
                    <Form.Group controlId="SensorSelectID" className="form-group-dev">
                        <br/>
                        <select name="sensors" id="sensors"
                                onChange={(e: ChangeEvent<HTMLSelectElement>) => setType(e.target.value)}>
                            {
                                sensorCategories.map((sensorCategory: string, index:number) =>
                                    <option key={index} value={sensorCategory}>{sensorCategory}</option>)}
                        </select>
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group className="form-group-dev">
                        <Form.Label className="text-left label-text">Sensor unit</Form.Label>
                        <Form.Control className="form-input" required type="text" placeholder=""
                                      value={unit ? unit : ''}
                                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUnit(e.target.value)}/>
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                </Form.Row>
                <Button onClick={event => handleUpdate(event)} size='sm' variant='success'
                        style={{width: '100%', padding: '10px'}}>
                    {formTitle.split(' ')[0]}
                </Button>
            </Form>
        </div>
    );
};
export default SensorForm;

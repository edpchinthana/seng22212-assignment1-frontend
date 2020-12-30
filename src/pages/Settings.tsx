import React, {ChangeEvent, useEffect, useState} from 'react';
import {Button, Col, Container, Nav, NavDropdown} from "react-bootstrap";
import {Link, useHistory} from "react-router-dom";
import Swal from 'sweetalert2';
import {SensorMeta} from "../types/types";
import {API} from "../data-fetch/RestAPITest";
import Sensor from "./Sensor";
import SensorForm from "./SensorForm";

const Settings: React.FC = () => {
    document.title = 'weatherApp | settings';
    const history = useHistory();
    const [sensorType, setSensorType]= useState('');
    const [sensorSet, setSensorSet] = useState<SensorMeta[]>([]);
    const [isAdd, setIsAdd] =useState(false)


    const handleSignOut = () => {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
        })

        swalWithBootstrapButtons.fire({
            title: 'Are you sure to sign out?',
            text: "You'll need sign in to use this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, sign out me!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                swalWithBootstrapButtons.fire(
                    'Sign out!',
                    'You have been sign out successfully.',
                    'success'
                )
                localStorage.setItem('IS_LOGGED_IN', 'false');
                history.push('/signin');
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                swalWithBootstrapButtons.fire(
                    'Cancelled',
                    'Your imaginary login is safe :)',
                    'error'
                )

            }
        })
    }

    let fetchedSensorSet: SensorMeta[];
    const getSensorSet = async () => {
        const r = await API.GET(`/sensor?sensorType=${sensorType.toUpperCase()}`);
        fetchedSensorSet = r;
        return r;
    }

    useEffect(() => {
        getSensorSet().then(() => {
            let sensors = fetchedSensorSet.map((sen: SensorMeta) => sen);
            setSensorSet(sensors);
        })
    }, [sensorType])

    const sensorCategories = JSON.parse(localStorage.getItem("SensorCategories") as string);

    console.log(sensorSet)

    return (
        <Container  className='min-vh-100'>
            <br/><br/><br/>
            <h2>Settings</h2>
            <br/>
            <div><h3>Sensor manage</h3>

                <select name="sensors" id="sensors"
                        onChange={(e: ChangeEvent<HTMLSelectElement>) => setSensorType(e.target.value)}>
                    <option value=" ">Select Sensor category</option>
                    {
                        sensorCategories.map((sensorCategory:string)=>
                          <option value={sensorCategory}>{sensorCategory}</option>)}
                </select>
                {
                    sensorSet.map((sensor:SensorMeta, index: number)=> <Sensor sensor={sensor} num={index+1} key={index}/>)
                }

            </div>
            <div><h3 onClick={()=> setIsAdd(true)} style={{cursor:'pointer'}}><i className="feather-plus-circle"/> Add new sensor</h3>
                {
                    isAdd &&  <SensorForm formTitle={"Add Sensor"} sensor={{title:'', id:'', type:''}} setIsUpdatable={setIsAdd}/>
                }
            </div>

            <div><h3>Sign out</h3></div>
            <Button className='p-button mt-3' onClick={handleSignOut}>Sign out</Button>
        </Container>
    );
}

export default Settings;

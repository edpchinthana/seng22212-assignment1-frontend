import React from 'react';
import {Button, Col} from "react-bootstrap";
import {useHistory} from "react-router-dom";
import Swal from 'sweetalert2';

const Settings: React.FC = () => {
    document.title = 'weatherApp | settings';
    const history = useHistory();

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

    return (        
        <div>
          <br/><br/>
          <h2 className='pt-4'>Settings</h2>
  
          <div className="form-group">
            <h1 style={{fontSize: '25px', padding: '5px 10px', textAlign: 'left'}}>Change Threshold Value</h1>
          </div>
          <br/>
          <select style={{paddingBottom: '0px', marginBottom: '20px', marginLeft: '10px', width: '200px', height: '38px', float: 'left'}}>
            <option selected>Temperature</option>
            <option>Humidity</option>
            <option>Pressure </option>
          </select>
  
          <form>
            <div className="form-row">
              <div className="col-md-3 col-xl-2"><label className="col-form-label">Temp Sensor 001</label></div>
              <div className="col-md-2"><input className="form-control" type="text" placeholder="Threshold Value" /></div>
            </div>
          </form>

          <div className="form-group">
            <h1 style={{fontSize: '25px', paddingTop: '50px', paddingLeft: '10px', textAlign: 'left'}}>Add Sensor</h1>
            <form style={{width: '1000px', marginLeft: '10px', textAlign: 'left'}}>
                <label>Select Type:</label>
                <select className="form-control" style={{paddingBottom: '0px', marginBottom: '20px', marginLeft: '10px', width: '200px'}}>
                    <option selected>Temperature</option>
                    <option>Humidity</option>
                    <option>Pressure </option>
                </select>
            </form>
  
            <form style={{width: '1000px', marginLeft: '10px', textAlign: 'left'}}>
                <label>Sensor Id:</label>
                <input className="form-control" type="text" style={{width: '200px', marginLeft: '10px'}} />
            </form>
  
            <form style={{width: '1000px', marginLeft: '10px', textAlign: 'left'}}>
                <label style={{marginTop: '15px'}}>Sensor Range:</label>
                <div className="form-row">
                    <div className="col-xl-1"><label className="col-form-label">From</label></div>
                    <div className="col"><input className="form-control" type="text" style={{width: '100px'}} /></div>
                </div>
                <div className="form-row">
                    <div className="col-xl-1"><label className="col-form-label">To</label></div>
                    <div className="col"><input className="form-control" type="text" style={{width: '100px'}} /></div>
                </div>
            </form>
  
            <div style={{float: 'left', paddingTop: '20px'}}>
                <label style={{textAlign: 'left'}}>Default Threshold Value:</label>
                <input type="range" style={{width: '500px', margin: '10px', marginLeft: '20px'}} />
            </div>
            <br/>

            <div className="form-group">
                <h1 style={{fontSize: '25px', paddingTop: '70px', paddingLeft: '10px', textAlign: 'left'}}>Remove Sensor</h1>
                <form style={{width: '1000px', marginLeft: '10px', textAlign: 'left'}}><label>Select Type:</label>
                    <select className="form-control" style={{paddingBottom: '0px', marginBottom: '20px', marginLeft: '10px', width: '200px'}}>
                        <option selected>Temperature</option>
                        <option>Humidity</option>
                        <option>Pressure </option>
                    </select>
                    <label>Sensor Id:</label>
                    <input className="form-control" type="text" style={{width: '200px', marginLeft: '10px'}} />
                    <button className="btn btn-primary" type="button" style={{marginTop: '10px'}}>Remove</button>
                </form>


            
  
            </div>
              
          </div>

        </div>
      );
}

export default Settings;

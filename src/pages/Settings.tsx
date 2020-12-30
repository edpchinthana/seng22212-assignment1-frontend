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

          
          
  
  
          
          
  
        </div>
      );
}

export default Settings;

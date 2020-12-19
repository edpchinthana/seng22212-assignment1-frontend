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
        <div  className='min-vh-100'>
            <br/><br/><br/>
            <h2>Settings</h2>
            <br/>
            <Button className='p-button mt-3' onClick={handleSignOut}>Sign out</Button>
        </div>
    );
}

export default Settings;

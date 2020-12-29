import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown'

const AlertHistory: React.FC = () => {
    document.title = 'weatherApp | alert history'
    return (
        <div  className='min-vh-100'>
            <br/><br/>
            <h2 className='pt-4'>Alert History</h2>
            <div className="App">
                <div className="container">
                    <div className="row">
                        <Dropdown className="mt-5 mr-5 col- text-left">
                            <Dropdown.Toggle className="btn btn-dark text-break text-dark bg-white border rounded-0 border-dark shadow-none" variant="success" id="dropdown-basic">
                                Sensors
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#">First Item</Dropdown.Item>
                                <Dropdown.Item href="#">Second Item</Dropdown.Item>
                                <Dropdown.Item href="#">Third Item</Dropdown.Item>
                                <Dropdown.Item href="#">Fourth Item</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                        <Dropdown className="mt-5 col- text-left">
                            <Dropdown.Toggle className="btn btn-dark text-break text-dark bg-white border rounded-0 border-dark shadow-none" variant="success" id="dropdown-basic">
                                Categories
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#">First Item</Dropdown.Item>
                                <Dropdown.Item href="#">Second Item</Dropdown.Item>
                                <Dropdown.Item href="#">Third Item</Dropdown.Item>
                                <Dropdown.Item href="#">Fourth Item</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>

                    <div className="table-bordered text-monospace text-break text-center text-black-50 mt-5">
                        <table className="table table-striped table-bordered table-hover">
                            <thead>
                                <tr>
                                    <th>Sensor ID</th>
                                    <th>Threshold Level</th>
                                    <th>Sensor Value</th>
                                    <th>Date &amp; Time</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>ID1</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>ID2</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>ID3</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>ID4</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AlertHistory;
import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { connect } from 'react-redux';
import { getAlertHistory } from "../../repositories/alertHistoryRepository";


class AlertHistory extends React.Component<any, {[key:string]:any}> {

    constructor(props: {}| Readonly<{}>) {
        super(props);
    }

    getAlertHistory =async () => {
        const alertHistory = await getAlertHistory();
        this.props.getAlertHistory();
    }

    onSensorCategoryChange =async (event: any) => {
        try{
            const category:any = this.props.sensorCategories.filter((cat:any)=>cat.type==event);
            await this.props.getSensors(category[0]);
        }catch (e) {
            alert(e);
        }
    }

    componentDidMount() {
        this.props.getAlertHistory();
    }

    render() {

        return <div className="d-flex flex-column" id="content-wrapper">
                    <div id="content">
                        <div className="container-fluid" style={{paddingTop: "30px"}}>
                            <h3 className="text-dark mb-4">Alert History</h3>
                            <div className="card shadow">
                                <div className="card-body">
                                    <div className="row" style={{marginBottom: "30px"}}>
                                        <div className="col" style={{marginRight: "10px"}}>
                                            <Dropdown onSelect={(event:any)=>this.onSensorCategoryChange(event)}>
                                                <Dropdown.Toggle id="dropdown-basic">
                                                    {this.props.selectedCategory?this.props.selectedCategory.title:"Select Category"}

                                                </Dropdown.Toggle>

                                                <Dropdown.Menu>
                                                    {this.props.sensorCategories.map((category:any, index:number) => {
                                                        return <Dropdown.Item key={category.type} eventKey={category.type}>{category.title}</Dropdown.Item>
                                                    })}
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>
                                    </div>
                                    <div className="table-responsive table mt-2" id="dataTable" role="grid" aria-describedby="dataTable_info">
                                        <table className="table my-0" id="dataTable">
                                            <thead>
                                            <tr>
                                                <th>Id</th>
                                                <th>Date&nbsp;</th>
                                                <th>Cause</th>
                                                <th>Threshold</th>
                                                <th>Value</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                                {this.props.alertHistory.map((alert:any, index:number)=>{
                                                    return (
                                                        <tr key={index}>
                                                            <td>{alert.id}</td>
                                                            <td>{alert.sensorData.capturedDate}</td>
                                                            <td>{alert.cause}</td>
                                                            <td>{alert.sensorData.threshold}</td>
                                                            <td>{alert.sensorData.dataValue}</td>
                                                        </tr>
                                                    )
                                                })}
                                                <tr></tr>
                                            </tbody>
                                            <tfoot>
                                            <tr>
                                                <td><strong>Id</strong></td>
                                                <td><strong>Date</strong></td>
                                                <td><strong>Cause</strong></td>
                                                <td><strong>Threshold</strong></td>
                                                <td><strong>Value</strong></td>
                                            </tr>
                                            </tfoot>
                                        </table>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 align-self-center">
                                            <p id="dataTable_info" className="dataTables_info" role="status" aria-live="polite">Showing 1 to 10 of 27</p>
                                        </div>
                                        <div className="col-md-6">
                                            <nav className="d-lg-flex justify-content-lg-end dataTables_paginate paging_simple_numbers">
                                                <ul className="pagination">
                                                    <li className="page-item disabled"><a className="page-link" href="#" aria-label="Previous">
                                                        <span aria-hidden="true">«</span></a></li>
                                                    <li className="page-item active"><a className="page-link" href="#">1</a></li>
                                                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                                                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                                                    <li className="page-item"><a className="page-link" href="#" aria-label="Next">
                                                        <span aria-hidden="true">»</span></a></li>
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <footer className="bg-white sticky-footer">
                        <div className="container my-auto">
                            <div className="text-center my-auto copyright"><span>Copyright © Monitor 2020</span></div>
                        </div>
                    </footer>
                </div>;

    }

}

const mapStateToProps = (state : any) => ({
    alertHistory: state.alertHistory
})

export default connect(mapStateToProps, {getAlertHistory})(AlertHistory);

/* const AlertHistory: React.FC = () => {
    document.title = 'weatherApp | alert history'
    return (
        <div className='min-vh-100'>
            <br/><br/>
            <h2 className='pt-4'>Alert History</h2>
        </div>
    );
}

export default AlertHistory; */

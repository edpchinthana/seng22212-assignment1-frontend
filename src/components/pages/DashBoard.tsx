import React from "react";
import {signOutUser} from "../../services/auth/auth";
import index, {Line} from "react-chartjs-2";
import {Dropdown, DropdownButton} from "react-bootstrap";
import {connect} from "react-redux";
import {getSensorCategories, getSensorData, getSensors} from "../../repositories/sensorRepository";
import CustomLine from "../CostomLine";

class Dashboard extends React.Component<any,{[key:string]:any}>{

    constructor(props: any) {
        super(props);


    }

    onSensorCategoryChange = (event: any) => {
        const category:any = this.props.sensorCategories.filter((cat:any)=>cat.type==event);
        this.props.getSensors(category[0]);
    }

    onSensorChange = (event: any ) => {
        const sensor:any = this.props.sensors.filter((sen:any)=>sen.id==event);
        console.log(sensor[0]);
        this.fetchSensorData(this.props.from, this.props.to,sensor[0]);

    }

    fetchSensorData = (from:any, to:any, sensor:any) => {
        if(sensor!=null) {
            this.props.getSensorData(sensor, from, to);
        }
    }

    onFromDateChange = (event: any) => {
        this.fetchSensorData(event.target.value, this.props.to, this.props.selectedSensor);


    }

    onToDateChange = (event: any) => {
        this.fetchSensorData(this.props.from,event.target.value,this.props.selectedSensor);

    }

    componentDidMount() {
        if(this.props.sensorCategories.length==0){
            this.props.getSensorCategories();
        }

    }


    render() {
        return <div className="d-flex flex-column" id="content-wrapper">
            <div id="content">
                <div className="container-fluid" style={{marginTop: "20px"}}>
                    <div className="d-sm-flex justify-content-between align-items-center mb-4">
                        <h3 className="text-dark mb-0">Dashboard</h3><a
                        className="btn btn-primary btn-sm d-none d-sm-inline-block" role="button" href="#"><i
                        className="fas fa-download fa-sm text-white-50"></i>&nbsp;Generate Report</a>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 col-xl-12">
                            <div className="card shadow mb-4">
                                <div className="card-header d-flex justify-content-between align-items-center">
                                    <div className="row">
                                        <div className="col">
                                            <h6 className="text-primary font-weight-bold m-0">{this.props.selectedCategory?this.props.selectedCategory.title:"Select Sensor Category"}</h6>
                                        </div>
                                    </div>
                                </div>
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
                                        <div className="col" style={{marginRight: "10px"}}>
                                            <Dropdown onSelect={(eventKey:any, e)=>this.onSensorChange(eventKey)}>
                                                <Dropdown.Toggle id="dropdown-basic">
                                                    {this.props.selectedSensor?this.props.selectedSensor.title:"Select Sensor"}
                                                </Dropdown.Toggle>

                                                <Dropdown.Menu>
                                                    {this.props.sensors.map((sensor:any, index:number)=>{
                                                        return <Dropdown.Item key={sensor.id} eventKey={sensor.id}>{sensor.title}</Dropdown.Item>
                                                    })}
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>
                                        <div className="col"
                                             style={{marginRight: "10px", height: "38px",paddingTop:" 5px",paddingLeft: "24px"}}>
                                            <strong>From&nbsp;</strong><input type="date"
                                                                              value={this.props.from}
                                                                              max={this.props.to}
                                                                              onChange={(e)=>this.onFromDateChange(e)}
                                                                              style={{color: "rgb(133,135,150)",borderWidth: "0px",filter:"brightness(100%) grayscale(0%) invert(0%)"}}/>
                                        </div>
                                        <div className="col"
                                             style={{marginRight: "10px",paddingTop: "5px",paddingLeft:"24px"}}>
                                            <strong>To&nbsp;&nbsp;</strong><input type="date"
                                                                                  value={this.props.to}
                                                                                  onChange={(e)=>this.onToDateChange(e)}
                                                                                  min={this.props.from}
                                                                                  style={{color:" rgb(133,135,150)",borderWidth:"0px",filter:" brightness(100%) grayscale(0%) invert(0%)"}}/>
                                        </div>
                                    </div>
                                    <div className="chart-area mb-2">
                                        <CustomLine data={this.props.sensorData}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>;
    }
}

const mapStateToProps = (state : any) => ({
    sensorCategories: state.sensors.categories,
    sensors: state.sensors.sensors,
    sensorData: state.sensors.sensorData,
    from: state.sensors.from,
    to:state.sensors.to,
    selectedCategory:state.sensors.selectedCategory,
    selectedSensor:state.sensors.selectedSensor
})


export default connect(mapStateToProps,{getSensorCategories, getSensors, getSensorData})(Dashboard);

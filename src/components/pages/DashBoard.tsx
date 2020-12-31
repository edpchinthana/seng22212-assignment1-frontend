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
                                        <canvas
                                            data-bs-chart="{&quot;type&quot;:&quot;line&quot;,&quot;data&quot;:{&quot;labels&quot;:[&quot;Jan&quot;,&quot;Feb&quot;,&quot;Mar&quot;,&quot;Apr&quot;,&quot;May&quot;,&quot;Jun&quot;,&quot;Jul&quot;,&quot;Aug&quot;],&quot;datasets&quot;:[{&quot;label&quot;:&quot;Earnings&quot;,&quot;fill&quot;:true,&quot;data&quot;:[&quot;0&quot;,&quot;10000&quot;,&quot;5000&quot;,&quot;15000&quot;,&quot;10000&quot;,&quot;20000&quot;,&quot;15000&quot;,&quot;25000&quot;],&quot;backgroundColor&quot;:&quot;rgba(78, 115, 223, 0.05)&quot;,&quot;borderColor&quot;:&quot;rgba(78, 115, 223, 1)&quot;},{&quot;label&quot;:&quot;Threshold&quot;,&quot;fill&quot;:true,&quot;data&quot;:[&quot;2000&quot;,&quot;3000&quot;,&quot;8000&quot;,&quot;4500&quot;,&quot;6352&quot;,&quot;11000&quot;,&quot;50000&quot;,&quot;0&quot;,&quot;&quot;]}]},&quot;options&quot;:{&quot;maintainAspectRatio&quot;:false,&quot;legend&quot;:{&quot;display&quot;:false},&quot;title&quot;:{},&quot;scales&quot;:{&quot;xAxes&quot;:[{&quot;gridLines&quot;:{&quot;color&quot;:&quot;rgb(234, 236, 244)&quot;,&quot;zeroLineColor&quot;:&quot;rgb(234, 236, 244)&quot;,&quot;drawBorder&quot;:false,&quot;drawTicks&quot;:false,&quot;borderDash&quot;:[&quot;2&quot;],&quot;zeroLineBorderDash&quot;:[&quot;2&quot;],&quot;drawOnChartArea&quot;:false},&quot;ticks&quot;:{&quot;fontColor&quot;:&quot;#858796&quot;,&quot;padding&quot;:20}}],&quot;yAxes&quot;:[{&quot;gridLines&quot;:{&quot;color&quot;:&quot;rgb(234, 236, 244)&quot;,&quot;zeroLineColor&quot;:&quot;rgb(234, 236, 244)&quot;,&quot;drawBorder&quot;:false,&quot;drawTicks&quot;:false,&quot;borderDash&quot;:[&quot;2&quot;],&quot;zeroLineBorderDash&quot;:[&quot;2&quot;]},&quot;ticks&quot;:{&quot;fontColor&quot;:&quot;#858796&quot;,&quot;padding&quot;:20}}]}}}"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="bg-white sticky-footer"></footer>
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

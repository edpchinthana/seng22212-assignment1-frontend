import React from "react";
import {Dropdown} from "react-bootstrap";
import {connect} from "react-redux";
import {
    addSensors,
    getSensorCategories,
    getSensorData,
    getSensors,
    updateSensor
} from "../../repositories/sensorRepository";

class ManageSensors extends React.Component<any, any>{

    constructor(props: any) {
        super(props);

        this.state = {
            selectedSensor:null
        }
    }

    componentDidMount() {
        if(this.props.sensorCategories.length==0){
            this.getSensorCategories();
        }
    }

    getSensorCategories =async  () => {
        try{
            await this.props.getSensorCategories();
        }catch (e) {
            alert(e);
        }
    }



    onSensorCategoryChange =async (event:any)=>{
        try{
            const category:any = this.props.sensorCategories.filter((cat:any)=>cat.type==event);
            await this.props.getSensors(category[0]);
            this.setState({selectedSensor:null})
        }catch (e) {
            alert(e);
        }
    }

    onSensorChange = async (event: any) => {
        const sensor:any = this.props.sensors.filter((sen:any)=>sen.id==event);
        this.setState({selectedSensor: sensor[0]});
    }

    onAddSensorSubmit = async (event : any) => {
        event.preventDefault();
        try{
            if(this.props.selectedCategory!=null){
                const sensorType = this.props.selectedCategory.type;
                const title = event.target.elements.title.value;
                const threshold = event.target.elements.threshold.value;
                const unit = event.target.elements.unit.value;

                const sensor = {
                    title : title,
                    type : sensorType,
                    threshold : threshold,
                    unit : unit
                }

                await this.props.addSensors(sensor);
                await this.props.getSensors(this.props.selectedCategory);
            }
        }catch(e){
            alert(e);
        }
    }

    onUpdateSensor =async (event : any) => {
        event.preventDefault();

        try{
            if(this.state.selectedSensor){
                const sensor = {
                    id: this.state.selectedSensor.id,
                    title : this.state.selectedSensor.title,
                    type : this.state.selectedSensor.type,
                    threshold : event.target.elements.threshold.value,
                    unit : this.state.selectedSensor.unit
                }
                console.log(sensor)
                await this.props.updateSensor(sensor);
                await this.props.getSensors(this.props.selectedCategory);
            }
        }catch (e) {
            alert(e);
        }

    }


    render() {
        return <div className="d-flex flex-column" id="content-wrapper">
            <div id="content">
                <div className="container-fluid" style={{paddingTop: "20px"}}>
                    <h3 className="text-dark mb-4">Manage Sensors</h3>
                    <div className="row mb-3">
                        <div className="col-lg-12 col-xl-12">
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="card shadow mb-3">
                                        <div className="card-header py-3">
                                            <p className="text-primary m-0 font-weight-bold">Add Sensor</p>
                                        </div>
                                        <div className="card-body">
                                            <form onSubmit={(e)=> this.onAddSensorSubmit(e)}>
                                                <div className="form-row">
                                                    <div className="col-12 col-xl-4">
                                                        <div className="form-group"><label htmlFor="username"><strong>Sensor
                                                            Category</strong><br/></label>
                                                            <Dropdown onSelect={(event:any)=>this.onSensorCategoryChange(event)} className={"w-100"}>
                                                                <Dropdown.Toggle id="dropdown-basic" className={"w-100 text-left"}>
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
                                                    <div className="col">
                                                        <div className="form-group"><label
                                                            htmlFor="email"><strong>Title</strong><br/></label><input
                                                            className="form-control" type="text"
                                                            placeholder="Station 1" name="title" required/></div>
                                                    </div>
                                                </div>
                                                <div className="form-row">
                                                    <div className="col-12 col-xl-6">
                                                        <div className="form-group"><label htmlFor="first_name"><strong>Threshold
                                                            Value</strong></label><input className="form-control"
                                                                                         type="number"
                                                                                         placeholder="45"
                                                                                         name="threshold" required/></div>
                                                    </div>
                                                    <div className="col-12 col-xl-6">
                                                        <div className="form-group"><label
                                                            htmlFor="first_name"><strong>Unit</strong></label><input
                                                            className="form-control" type="text"
                                                            placeholder="C" name="unit" required/></div>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <button className="btn btn-primary btn-sm" type="submit">Add
                                                        Sensor
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="card shadow mb-3">
                                        <div className="card-header py-3">
                                            <p className="text-primary m-0 font-weight-bold">Change Sensor Threshold</p>
                                        </div>
                                        <div className="card-body">
                                            <form onSubmit={(e)=> this.onUpdateSensor(e)}>
                                                <div className="form-row">
                                                    <div className="col-12 col-xl-4">
                                                        <div className="form-group"><label htmlFor="username"><strong>Sensor
                                                            Category</strong><br/></label>
                                                            <Dropdown onSelect={(event:any)=>this.onSensorCategoryChange(event)} className={"w-100"}>
                                                                <Dropdown.Toggle id="dropdown-basic" className={"w-100 text-left"}>
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
                                                    <div className="col-12 col-xl-4">
                                                        <div className="form-group"><label
                                                            htmlFor="email"><strong>Sensor</strong><br/></label>
                                                            <Dropdown onSelect={(event:any)=>this.onSensorChange(event)} className={"w-100"}>
                                                                <Dropdown.Toggle id="dropdown-basic" className={"w-100 text-left"}>
                                                                    {this.state.selectedSensor?this.state.selectedSensor.title:"Select Sensor"}

                                                                </Dropdown.Toggle>

                                                                <Dropdown.Menu>
                                                                    {this.props.sensors.map((sensor:any, index:number) => {
                                                                        return <Dropdown.Item key={sensor.id} eventKey={sensor.id}>{sensor.title}</Dropdown.Item>
                                                                    })}
                                                                </Dropdown.Menu>
                                                            </Dropdown>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-row">
                                                    <div className="col-12 col-xl-6">
                                                        <div className="form-group"><label htmlFor="first_name"><strong>Threshold
                                                            Value</strong></label><input className="form-control"
                                                                                         type="number"
                                                                                         name="threshold" required placeholder={this.state.selectedSensor?this.state.selectedSensor.threshold:0}/></div>
                                                    </div>
                                                    <div className="col-12 col-xl-6">
                                                        <div className="form-group"><label
                                                            htmlFor="first_name"><strong>Unit</strong></label><input
                                                            className="form-control" type="text"
                                                            placeholder="" name="unit"
                                                            disabled={true}
                                                            value={this.state.selectedSensor?this.state.selectedSensor.unit:""}
                                                        /></div>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <button className="btn btn-primary btn-sm" type="submit">Save
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="card shadow">
                                        <div className="card-body">
                                            <div className="form-row">
                                                <div className="col-12 col-xl-4">
                                                    <div className="form-group"><label htmlFor="username"><strong>Sensor
                                                        Category</strong><br/></label>
                                                        <Dropdown onSelect={(event:any)=>this.onSensorCategoryChange(event)} className={"w-100"}>
                                                            <Dropdown.Toggle id="dropdown-basic" className={"w-100 text-left"}>
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
                                            </div>
                                            <div className="table-responsive table mt-2" id="dataTable-1" role="grid"
                                                 aria-describedby="dataTable_info">
                                                <table className="table my-0" id="dataTable">
                                                    <thead>
                                                    <tr>
                                                        <th>Title</th>
                                                        <th>Threshold</th>
                                                        <th>Unit</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    {this.props.sensors.map((sensor: any, index: number)=>{
                                                        return <tr key={sensor.id}>
                                                            <td>{sensor.title}</td>
                                                            <td>{sensor.threshold}</td>
                                                            <td>{sensor.unit}</td>
                                                        </tr>
                                                    })}
                                                    </tbody>
                                                    <tfoot>
                                                    <tr>
                                                        <td><strong>Title</strong></td>
                                                        <td><strong>Threshold</strong></td>
                                                        <td><strong>Unit</strong></td>
                                                    </tr>
                                                    </tfoot>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="bg-white sticky-footer"/>
        </div>;
    }
}

const mapStateToProps = (state : any) => ({
    sensorCategories: state.sensors.categories,
    sensors: state.sensors.sensors,
    selectedCategory:state.sensors.selectedCategory,
    selectedSensor:state.sensors.selectedSensor
})

export default connect(mapStateToProps,{getSensorCategories, getSensors, getSensorData, addSensors, updateSensor})(ManageSensors);
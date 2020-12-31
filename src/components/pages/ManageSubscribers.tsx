import React from "react";
import {connect} from "react-redux";
import {addAlertSubscriber, getAlertSubscribers} from "../../repositories/alertSubscribersRepository";

class ManageSubscribers extends React.Component<any, any>{

    constructor(props:any) {
        super(props);
        this.state = {
            displayName:"",
            email:"",
            phoneNo:""
        }
    }


    componentDidMount() {
       if(this.props.alertSubscribers.length==0){
           this.getAlertSubscribers();
       }
    }

    getAlertSubscribers = async () => {
        try{
            await this.props.getAlertSubscribers();
        }catch (e) {
            alert(e);
        }
    }

    onAddSubscriber = async (event : any) => {
        event.preventDefault();
        const displayName = event.target.elements.displayName.value;
        const email = event.target.elements.email.value;
        const phoneNo = event.target.elements.phoneNo.value;
        const data = {
            displayName:displayName,
            email:email,
            phoneNo: phoneNo,
        }
        try{
            await this.props.addAlertSubscriber(data);
            await this.getAlertSubscribers();
        }catch (e) {
            alert(e);
        }


    }


    render() {
        return <div className="d-flex flex-column" id="content-wrapper">
            <div id="content">
                <div className="container-fluid" style={{paddingTop: "20px"}}>
                    <h3 className="text-dark mb-4">Manage Alert Subscribers</h3>
                    <div className="row mb-3">
                        <div className="col-lg-12 col-xl-12">
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="card shadow mb-3">
                                        <div className="card-header py-3">
                                            <p className="text-primary m-0 font-weight-bold">Add alert subscriber</p>
                                        </div>
                                        <div className="card-body">
                                            <form onSubmit={(e)=> this.onAddSubscriber(e)}>
                                                <div className="form-row">
                                                    <div className="col-12 col-xl-6">
                                                        <div className="form-group"><label htmlFor="username"><strong>Display
                                                            Name</strong></label><input className="form-control"
                                                                                        type="text"
                                                                                        placeholder="display name"
                                                                                        name="displayName" required={true}/></div>
                                                    </div>
                                                    <div className="col">
                                                        <div className="form-group"><label htmlFor="email"><strong>Email
                                                            Address</strong></label><input className="form-control"
                                                                                           type="email"
                                                                                           placeholder="user@example.com"
                                                                                           name="email" required={true} /></div>
                                                    </div>
                                                </div>
                                                <div className="form-row">
                                                    <div className="col-12 col-xl-6">
                                                        <div className="form-group"><label htmlFor="first_name"><strong>Phone
                                                            Number</strong></label><input className="form-control"
                                                                                          type="text"
                                                                                          placeholder="0712656458"
                                                                                          name="phoneNo" required={true}/></div>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <button className="btn btn-primary btn-sm" type="submit">Add
                                                        Subscriber
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card shadow">
                        <div className="card-body">
                            <div className="table-responsive table mt-2" id="dataTable-1" role="grid"
                                 aria-describedby="dataTable_info">
                                <table className="table my-0" id="dataTable">
                                    <thead>
                                    <tr>
                                        <th>Display Name</th>
                                        <th>Email Address&nbsp;</th>
                                        <th>Phone Number</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {this.props.alertSubscribers.map((alertSubscriber:any, index:number)=>{
                                        return (
                                            <tr key={alertSubscriber.id}>
                                                <td>{alertSubscriber.displayName}</td>
                                                <td>{alertSubscriber.email}</td>
                                                <td>{alertSubscriber.phoneNo}</td>
                                            </tr>
                                        )
                                    })}

                                    </tbody>
                                    <tfoot>
                                    <tr>
                                        <td><strong>Display Name</strong></td>
                                        <td><strong>Email Address</strong></td>
                                        <td><strong>Phone Number</strong></td>
                                    </tr>
                                    </tfoot>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="bg-white sticky-footer"/>
        </div>;
    }
}
const mapStateToProps = (state: any) => ({
    alertSubscribers : state.alertSubscribers
})

export default connect(mapStateToProps, {getAlertSubscribers, addAlertSubscriber})(ManageSubscribers);
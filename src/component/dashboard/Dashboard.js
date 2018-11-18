import React, {Component} from 'react'
import PatientList from '../patient/PatientList'
import PatientSummary from '../patient/PatientSummary'
class Dashboard extends Component {

    render() {
        
        const data =[{"name":"test1"},{"name":"test2"}];

        return(
            // let filteredPatient = this.props.patients;
            <div className = "dashboard">
                <div className ="row">
                    <div className = "grid-example col s12 m6">
                        <h4 style = {textStyle}>Check In</h4>
                            <PatientSummary />
                            {/* <PatientSummary /> */}

                            
                    </div>
                    <div className = "grid-example col s12 m6">
                        <h4 style = {textStyle}>In Progress</h4>
                        <PatientSummary />
                        {/* <PatientSummary /> */}
                    </div>
                        
                    </div>
            </div>
        )
    }

}

export default Dashboard

const textStyle = {
     textAlign: 'center',
     color: '#636e72',
};
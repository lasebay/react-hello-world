import React, {Component} from 'react'
import PatientList from '../patient/PatientList'

class Dashboard extends Component {
    render() {
        return(
            <div className = "dashboard">
                <div className ="row">
                    <div className = "grid-example col s12 m6">
                        <h4 style = {textStyle}>Check In</h4>
                        <PatientList />
                    </div>
                    <div className = "grid-example col s12 m6">
                        <h4 style = {textStyle}>In Progress</h4>
                        <PatientList />
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
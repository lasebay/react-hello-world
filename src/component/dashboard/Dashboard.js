import React, {Component} from 'react'
import PatientList from '../patient/PatientList'

class Dashboard extends Component {
    render() {
        return(
            <div className = "dashboard">
                <div className ="row">
                    <div className = "grid-example col s12 m6">
                        <h2>Check In</h2>
                        <PatientList />
                    </div>
                    <div className = "grid-example col s12 m6">
                        <h2>In Progress</h2>
                        <PatientList />
                    </div>
                        
                    </div>
            </div>
        )
    }

}

export default Dashboard
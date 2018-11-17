import React, {Component} from 'React'
import PatientList from '../patient/PatientList'

class Dashboard extends Component {
    render() {
        return(
            <div className = "dashboard">
                <div className ="column">
                    <div className = "grid-example col s12 m6">
                        <PatientList />
                    </div>
                    <div className = "grid-example col s12 m6"></div>
                        
                    </div>
            </div>
        )
    }

}

export default Dashboard
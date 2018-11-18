import React, {Component} from 'react'
import PatientList from '../patient/PatientList'
import PatientSummary from '../patient/PatientSummary'
class Dashboard extends Component {
     constructor() {
            super();
            this.state = {
                search:''
            };
        }
        updateSearch(event) {
            this.setState({
                search: event.target.value.substr(0,20)
            });
        }
    render() {
        
        const data =[{"name":"test1"},{"name":"test2"}];
        let filteredPatient = data.filter(
            (data) => {
                return data.name.indexOf(this.state.search) !== -1;
            }
        )

        return(
            // let filteredPatient = this.props.patients;

            <div className = "dashboard">

                <div className ="row">
                    
                    <div className = "grid-example col s12 m6">
                        <h4 style = {textStyle}>Check In</h4>
                        <ul>
                        {filteredPatient.map((item)=> {
                            return (
                            <p>{item.name}</p>
                            )
                        })}
                    </ul>
                    <div>
                        <input type = "text"
                            value = {this.state.search}
                            onChange={this.updateSearch.bind(this)}
                        />
                    </div>
                            <PatientSummary />
                            {/* <PatientSummary /> */}

                            
                    </div>
                    <div className = "grid-example col s12 m6">
                    
                        <h4 style = {textStyle}>In Progress</h4>
                        <ul>
                        {filteredPatient.map((item)=> {
                            return (
                            <p>{item.name}</p>
                            )
                        })}
                    </ul>
                    <div>
                        <input type = "text"
                            value = {this.state.search}
                            onChange={this.updateSearch.bind(this)}
                        />
                    </div>

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
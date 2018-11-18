import React, {Component} from 'react'
import PatientList from '../patient/PatientList'
import PatientSummary from '../patient/PatientSummary'
import dashReducer from '../../reducer/dashReducer';
//connect to store via import
import { connect } from 'react-redux';
class Dashboard extends Component {
        constructor(props) {
            super(props);
            this.state = {
                search:'',
                content: props.contents
            };
        }
        updateSearch(event) {
            this.setState({
                search: event.target.value.substr(0,20)
            });
        }
    render() {
        console.log("props",this.props);
        const {data} = this.props;
         console.log("props1",data);
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
                            <PatientSummary  data={data}/>
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

const mapStateToProps = (state) => {
    // console.log('State on subscribe', state);
    return {
        data: state.dash.contents
    }
};
export default connect(mapStateToProps)(Dashboard)

const textStyle = {
     textAlign: 'center',
     color: '#636e72',
};
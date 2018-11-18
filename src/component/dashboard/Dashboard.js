import React, {Component} from 'react'
import PatientList from '../patient/PatientList'
import PatientSummary from '../patient/PatientSummary'
import SearchBar from '../patient/SearchBar'
import dashReducer from '../../reducer/dashReducer';
import Popup from "reactjs-popup";
//connect to store via import
import { connect } from 'react-redux';
class Dashboard extends Component {
        constructor(props) {
            super(props);
            this.state = {
                search:'',
                search2:'',
                content: props.contents
            };
        }
        updateSearch(event) {
            this.setState({
                search: event.target.value.substr(0,20)
            });
        }

        updateSearchProgress(event) {
            this.setState({
                search2: event.target.value.substr(0,20)
            });
        }
        // _submitDelete = (item) => {
        //     console.log("submit delete", item);
        //     let id = this.props.id;
        //     this.props.postDelete({id});  
        //     this.setState(this.state);
        // }
    render() {
        console.log("props",this.props);
        const {data} = this.props;
        const {data2} = this.props;
         console.log("props1",data);
         console.log("propsdata2",data2);
        let filteredPatient = data.filter(
            (data) => {
                return data.name.indexOf(this.state.search) !== -1;
            }
        )
        console.log("props2",filteredPatient);
        let filteredInProgressPatient = data2.filter(
            (data2) => {
                return data2.name.indexOf(this.state.search2) !== -1;
            }
        )
        return(
            // let filteredPatient = this.props.patients;

            <div className = "dashboard">

                <div className ="row">
                    
                    <div className = "grid-example col s12 m6">
                        <h4 style = {textStyle}>Check In</h4>
                         <div>
                        <input type = "text"
                            value = {this.state.search}
                            onChange={this.updateSearch.bind(this)}
                        />
                    </div>
                        <ul>
                        {filteredPatient.map((item)=> {
                            return (
                              <div className="card z-depth-0 project-summary grey lighten-5" style = {{alignItems: 'center'}} >
                                <Popup trigger={<a key={item.name} >
                                    <div className="" style = {buttonstyle}>
                                    {item.name}
                                    <i style = {iconstyle} class="material-icons right">check_circle</i>
                                    </div>
                                    
                                    </a>} modal>
                                    {close => (
                                    <div class="card" style = {modalstyle}>
                                        <a className="close" onClick={close} style = {closeStyle}>
                                        &times;
                                        </a>
                                    <div class = "card-title">{item.name}</div>
                                    <div className="content" style = {modalContent}>
                                    {' '}
                                    SSN: {item.ssn}
                                        <br />
                                    Cheif Complaints: {item.comp}
                                    </div>
                                    <div className="actions">
                                    </div>
                                </div>
                                )}
                            </Popup>
                            </div>
                            )
                        })}
                    </ul>         
                    </div>
                    <div className = "grid-example col s12 m6">
                    
                        <h4 style = {textStyle}>In Progress</h4>
                        <div>
                            <input type = "text"
                                value = {this.state.search2}
                                onChange={this.updateSearchProgress.bind(this)}
                            />
                        </div>
                        <ul>

                        
                        {filteredInProgressPatient.map((item)=> {
                            return (
                              <div className="card z-depth-0 project-summary grey lighten-5" style = {{alignItems: 'center'}} >
                                <Popup trigger={<a key={item.name} >
                                    <div className="" style = {buttonstyle}>
                                    {item.name}
                                    <i style = {iconstyle} class="material-icons right">all_inclusive</i>
                                    
                                    </div>
                                    
                                    </a>} modal>
                                    {close => (
                                    <div class="card" style = {modalstyle}>
                                        <a className="close" onClick={close} style = {closeStyle}>
                                        &times;
                                        </a>
                                    <div class = "card-title">{item.name}</div>
                                    <div className="content" style = {modalContent}>
                                    {' '}
                                    SSN: {item.ssn}
                                        <br />
                                    Cheif Complaints: {item.comp}
                                    </div>
                                    <div className="actions">
                                    </div>
                                </div>
                                )}
                            </Popup>
                            </div>
                            )
                        })}
                    </ul>         
                    
                    </div>
                        
                    </div>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    // console.log('State on subscribe', state);
    return {
        data: state.dash.contents,
        data2: state.dash.contents2
    }
};

//  const mapDispatchToProps = dispatch =>
//     bindActionCreators(
//         {
//         ...Games
//         },
//         dispatch
//     );
export default connect(mapStateToProps)(Dashboard)

const textStyle = {
     textAlign: 'center',
     color: '#636e72',
};

const styles = {
    display: 'row',
}
const modalstyle = {
    fontSize: 12,
}
const headerstyle = {
    width: 100,
    // borderWidth: 1,
    fontSize: 18,
    alignItems:'center',
    padding: 5,
}
const modalContent = {
  "width":"100%",
  "padding":"10px 5px"
}

const modalActions = {
  "width":"100%",
  "padding":"10px 5px",
  "margin":"auto",
  "textAlign":"center"
}
const closeStyle = {
  "cursor":"pointer",
  "position":"absolute",
  "display":"block",
  "padding":"2px 5px",
  "lineHeight":"20px",
  "right":"-10px",
  "top":"-10px",
  "fontSize":"24px",
  "background":"#ffffff",
  "borderRadius":"18px",
  "border":"1px solid #cfcece",
  color: "#aaa",
  justifyContent:"center"
  
  }
const buttonstyle = {
  flex:1,
  fontSize: 18,
  justifyContent:"center",
  borderBottom :1,
  borderBottomColor:"#000",
  // "width":"90%",
}
const iconstyle = {
  alignItems: "right",
  justifyContent:"center",
  alignSelf:'center'

}
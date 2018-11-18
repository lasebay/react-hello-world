import React from 'react'
import Popup from "reactjs-popup";
import Search from "react-search-box";
import dashReducer from '../../reducer/dashReducer';

const PatientSummary = ({data}) => {
  console.log("patientsummary", data)
  return (
            <div>
              {data && data.map(function(d, idx){
                return (
                <div className="card z-depth-0 project-summary grey lighten-5" style = {{alignItems: 'center'}} >
                <Popup trigger={<a key={idx} >
                    <div className="" style = {buttonstyle}>
                    {d.name}
                    <i style = {iconstyle} class="material-icons right">check_circle</i>
                    </div>
                    
                    </a>} modal>
                      {close => (
                      <div class="card" style = {modalstyle}>
                        <a className="close" onClick={close} style = {closeStyle}>
                        &times;
                        </a>
                      <div class = "card-title">{d.name}</div>
                      <div className="content" style = {modalContent}>
                      {' '}
                      SSN: {d.ssn}
                        <br />
                      Cheif Complaints: {d.comp}
                      </div>
                      <div className="actions">
                    </div>
                  </div>
                )}
              </Popup>
              </div>
                
                       
                )
            })}
            </div>
  )
}



export default PatientSummary

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
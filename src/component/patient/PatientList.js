import React from 'react'
import PatientSummary from './PatientSummary';


const PatientList = () => {
    return (
        <div className="project-list section" style = {playoutStyle}>  
            <PatientSummary />
            
            <PatientSummary />
            <PatientSummary />
            <PatientSummary />
            <PatientSummary />
            <PatientSummary />
        </div>
    )
}

export default PatientList

const playoutStyle = {
    backgroundColor: '#fafafa '
    
}
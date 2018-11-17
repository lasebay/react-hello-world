import React from 'react'

const PatientSummary = () => {
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3 grey lighten-5">
        <span className="card-title ">Patient Name</span>
        {/* <p>First Name</p>
        <p>Last Name</p> */}
        <p className="grey-text"></p>
        {/* <AlertDialog isOpen={this.state.isOpen} onCancel={this.handleCancel.bind(this)} cancelable>
          <div className="alert-dialog-title">Warning!</div>
          <div className="alert-dialog-content">
                An error has occurred!
          </div>
          <div className="alert-dialog-footer">
       <Button onClick={this.handleCancel.bind(this)} className="alert-dialog-button">
         Cancel
       </Button>
       <Button onClick={this.handleCancel.bind(this)} className="alert-dialog-button">
         Ok
       </Button>
     </div>
   </AlertDialog> */}
      </div>
    </div>
  )
}

export default PatientSummary

import React from 'react'

export default function Alert(props) {
    const capitalize=(word)=>{
        let low=word.toLowerCase()
        return low.charAt(0).toUpperCase()+low.slice(1);
    }
    return (
        //     <div className="alert alert-success alert-dismissible fade show" role="alert">
        //   <strong>Holy guacamole!</strong> You should check in on some of those fields below.
        //   <button type="button" className="close" data-dismiss="alert" aria-label="Close">
        //     <span aria-hidden="true">&times;</span>
        //   </button>
        // </div>

<div className='container text-center my-2' style={{height:'50px', width:'35%' }}>{
    props.alert &&  <div div className = {`alert alert-${props.alert.type} alert-dismissible fade show`} role = "alert" >
        <strong>{capitalize(props.alert.type)} : </strong> { props.alert.msg }
      </div>}
    </div>
  )
}

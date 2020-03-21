import React from "react";

function Input(props) {
  return ( 
    <div className="mb-3"> 
      Search for employee:
      <form className="form mb-3">
        <input  
          value={props.name}
          name="searchname"
          onChange={props.handleInputChange}
          type="text"
          placeholder="First Name"/>{props.children}
      </form>
    </div>
  )
}

export default Input;
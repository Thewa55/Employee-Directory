import React from "react";

function Input(props) {
  return ( 
    <div className="mb-3"> 
      Search for employee:
      <form className="form mb-3">
        <input  
          value={props.searchname}
          name="searchname"
          onChange={props.handleInputChange}
          type="text"
          placeholder="Search"/>{props.children}
      </form>
    </div>
  )
}

export default Input;
import React from "react";
import "./style.css";

function FriendCard(props) {
  console.log(props.searchname)
  if(props.name.includes(props.search) || props.search === "")
    return (
      <ul className="list-inline col-12">
        <li className="list-group-item col-1">ID: {props.id}</li>
        <li className="list-group-item col-3">Name: {props.name}</li>
        <li className="list-group-item col-3">Role: {props.role}</li>
        <li className="list-group-item col-5">E-mail: {props.email}</li>
      </ul>  
    );
  else{
    return (
      <div></div>
    )
  }
}

export default FriendCard;

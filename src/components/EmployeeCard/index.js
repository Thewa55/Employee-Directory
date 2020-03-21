import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <ul className="list-inline col-12">
      <li className="list-group-item col-3">Name: {props.name}</li>
      <li className="list-group-item col-3">Role: {props.role}</li>
      <li className="list-group-item col-6">E-mail: {props.email}</li>
    </ul>  
  );
}

export default FriendCard;

import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <ul class="list-inline col-12">
      <li class="list-group-item col-3">Name: {props.name}</li>
      <li class="list-group-item col-3">Role: {props.role}</li>
      <li class="list-group-item col-6">E-mail: {props.email}</li>
    </ul>  
  );
}

export default FriendCard;

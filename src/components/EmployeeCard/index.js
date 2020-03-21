import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div className="row">
      <ul class="list-inline col-12">
        <li class="list-group-item col-3">{props.name}</li>
        <li class="list-group-item col-3">{props.role}</li>
        <li class="list-group-item col-6">{props.email}</li>
      </ul>  
        {/* <div className="col-4">
            <strong>Name:</strong> {props.name}
        </div>
        <div className="col-4">
            <strong>Role:</strong> {props.role}
        </div>
        <div className="col-4">
            <strong>E-mail:</strong> {props.email}
        </div> */}
    </div>
  );
}

export default FriendCard;

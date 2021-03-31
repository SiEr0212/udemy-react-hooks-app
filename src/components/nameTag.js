import React, { Fragment } from "react";

function nameTag(props) {
  if (!props.firstName && !props.lastName) {
    return (
      <div className="name">
        <h3>Ivalid Name</h3>
      </div>
    );
  }

  return (
    <div className="name">
      <h3>First Name: {props.firstName}</h3>
      <h3>Last Name: {props.lastName}</h3>
      {props.firstName === "john" && <div style={{ color: "green" }}>VIP</div>}
    </div>
  );
}

export default nameTag;

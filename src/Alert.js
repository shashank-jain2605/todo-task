import React from "react";

const Alert = ({ alert }) => {
  console.log(alert);
  const { msg, type } = alert;
  return (
    <div>
      <h2 className={`alert-${type}`}>{msg}</h2>
    </div>
  );
};

export default Alert;

import React from 'react';


function UserItems(props) {
  
  return (
    <div className="row UserItems">
      <div className="col-md-3"> <h4>Username</h4> {props.user.username}</div>
      <div className="col-md-3"> <h4>Email</h4> {props.user.email}</div>
      <div className="col-md-2"> <h4>Country</h4> {props.user.country}</div>
      <div className="submit">
        <button className="renew"> Update</button>
        <button className="remove">Delete</button>
      </div>
    </div>
  );
}

export default UserItems;


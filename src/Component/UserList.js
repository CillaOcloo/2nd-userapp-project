import React from 'react';
import UserItems from './UserItems';

function UserList(props) {
    return (
      <div>
        {props.allUsers.map((user) => (
          <UserItems user={user} />
        ))}
      </div>
    );
  }
  
  export default UserList;
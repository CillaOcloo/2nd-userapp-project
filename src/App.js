import './App.css';
import UserForms from './Component/UserForms';
import UserList from './Component/UserList';
import { useState } from 'react';

function App() {
  
  const [users, setUsers] = useState([]);

  function addUser(user) {
    setUsers([...users, user]);
  }

  function deleteUser(id) {
    let newUsers = users.filter((user) => user.id !== id);
    setUsers(newUsers);
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          
          <UserForms addUser={addUser} />
        </div>
        <div className="col-md-6">
          <UserList allUsers={users} delete={deleteUser}/>
        </div>
      </div>
    </div>
  );
}

export default App;
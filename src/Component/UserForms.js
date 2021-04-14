import React, { useState }   from 'react';
  
function UserForms(props) {

        const [state, setState] = useState({
          username: '',
          email: '',
          password: '',
          country: '',
        });
      
        function handleOnChange(event) {
          setState({
            ...state,
            [event.target.name]: event.target.value,
          });
        }
      
        function handleSubmit() {
          props.addUser(state);
        }
    return(
        <div className="details" >
            <form>
                <div>
                <label>Username</label>
          <input
            type="text"
            name="username"
            value={state.username} 
            onChange={handleOnChange} 
          />
        </div> <br></br>

        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={state.email}
            onChange={handleOnChange} 
          />
        </div><br></br>

        <div>
          <label>Country</label>
          <input
            type="text"
            name="country"
            value={state.country}
            onChange={handleOnChange} 
          />
        </div> <br></br>

        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={state.password}
            onChange={handleOnChange} 
          />
        </div> <br></br>

        <div>
          <button type="button" className="btn" onClick={handleSubmit}>
            Create User
          </button>
                </div>
                
            </form>

        </div>
        
    )
}
export default UserForms;
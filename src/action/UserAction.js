import React from 'react'

function addUser(newUser) {
    return {
        type:"ADD_USER",
        payload: newUser
    }
}

export default addUser;

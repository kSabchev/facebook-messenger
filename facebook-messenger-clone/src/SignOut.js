import React from 'react'
import {auth } from './firebase';
 
function SignOut() {
    return (
      auth.currentUser && (
        <button onClick={() => auth.signOut()}>Sign out</button>
      )
    );
  }

export default SignOut

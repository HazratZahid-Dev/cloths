import React from 'react'
import '../style/SignIn.css'

const SignIn = () => {
  return (
    <>
      <div >
        <div className='signIn leading-8'>
        <h1 className='text-center sign-heading'>Sign in to your account</h1><br/>
        <input type='text' placeholder='User name' className='signIn-input' ></input><br/><br/>
        <input type='password' placeholder='User name'  className='signIn-input'></input><br/><br/>
        <button type='button' className='signIn-btn'>Login</button>


        </div>
      </div>
    </>
  )
}

export default SignIn
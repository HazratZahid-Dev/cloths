import React from 'react'
import '../style/CreateAcount.css'

const CreateAcount = () => {
  return (
    <>
        <div className='createAcount gap-4'>
          <h2 className=' acount-heading'>Create your own account</h2>
          <div className='m-auto text-center  '>
            <input type='text' placeholder='user name' className='acountInput '></input>
            <input type='text' placeholder='Email user' className='acountInput ml-4'></input><br/><br/>
            <input type='text' placeholder='user number'className='acountInput'></input>
            <input type='password' placeholder='password'className='acountInput ml-4'></input><br/><br/>
            <input type='text' placeholder='Address' className='addressInput'></input><br/><br/>
            <button type='text'  className='acount-btn'>Login</button>
          </div>
         
        </div>

    </>
  )
}

export default CreateAcount
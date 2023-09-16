import React from 'react'

function UpdateUser() {
  return (
    <div className='d-flex vh-100 bg-secondary justify-content-center align-items-center' >
      <div className='w-50 bg-white rounded p-3'>
        <form>
          <h2>Update User</h2>
          <div className='mb-2'>
          <label>Name</label>
          <input type='text' placeholder='Enter Name' className='form-control'/>
          </div>
          <div className='mb-2'>
          <label>Email</label>
          <input type='Email' placeholder='Enter Email' className='form-control'/>
          </div>
          <div className='mb-2'>
          <label>Age</label>
          <input type='text' placeholder='Enter Age' className='form-control'/>
          </div>
          <button className='btn btn-dark'>Update</button>
        </form>
      </div>
      </div>
  )
}

export default UpdateUser
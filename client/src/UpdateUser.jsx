import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react';
import axios from 'axios';

function UpdateUser() {
  const {id} =useParams();
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [age, setAge] = useState()
  const navigate = useNavigate ();

  useEffect (() => {
    axios.get('http://localhost:3003/getUser/'+id)
    .then(result => {console.log (result.data)
    setName(result.data.name)
    setEmail(result.data.email)
    setAge(result.data.age)
    })

    .catch(err => console.log(err))
},[])

const Update = (e) =>{
e.preventDefault();
axios.put('http://localhost:3003/updateUser/'+id, {name,email,age})
.then(result => {console.log (result.data)
  navigate('/')
})
.catch(err => console.log(err))

}

  return (
    <div className='d-flex vh-100 bg-secondary justify-content-center align-items-center' >
      <div className='w-50 bg-white rounded p-3'>
        <form onSubmit={Update}>
          <h2>Update User</h2>
          <div className='mb-2'>
          <label>Name</label>
          <input type='text' placeholder='Enter Name' className='form-control' value={name} onChange={(e) => {setName(e.target.value)}}/>
          </div>
          <div className='mb-2'>
          <label>Email</label>
          <input type='Email' placeholder='Enter Email' className='form-control'  value={email} onChange={(e) => {setEmail(e.target.value)} }/>
          </div>
          <div className='mb-2'>
          <label>Age</label>
          <input type='text' placeholder='Enter Age' className='form-control' value={age} onChange={(e) => {setAge(e.target.value)}}/>
          </div>
          <button className='btn btn-dark'>Update</button>
        </form>
      </div>
      </div>
  )
}

export default UpdateUser
import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
  const {userId} = useParams();
  return (
    <div className='bg-gray-800 text-white text-center'>User: {userId}</div>
  )
}

export default User
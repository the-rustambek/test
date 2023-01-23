import React from 'react'

export default function Loader() {
  return (
    <div className='d-flex justify-content-center align-items-center' style={{height:"100vh"}}>
    <div className="spinner-border text-info" role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
  </div>
  )
}

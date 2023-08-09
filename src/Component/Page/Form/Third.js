import React from 'react'

const Third = ({handleChange,FormData,error}) => {
  return (
    <div className='d-flex flex-column'>
      <label className="h4 mb-4" htmlFor="email">Email</label>
      
      <input className='noOutline p12' id="email" type="email" name='email'  placeholder="Email" value={FormData?.email} onChange={(e)=>handleChange(e)}/>
      {
      error && <p className='themeColor mt-1'>{error}</p>
    }
    </div>
    
  )
}

export default Third

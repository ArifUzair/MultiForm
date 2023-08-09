import React from 'react'

const Fourth = ({handleChange,formData,error}) => {
  return (
    <div className='d-flex flex-column'>
      <label className="h4 mb-4" htmlFor="C1d">How old are you?</label>
      
      <input className='noOutline p12' id="C1d" type="text" name='Age' value={formData?.Age} placeholder="How old are you?" onChange={(e)=>handleChange(e)}/>
      {
      error && <p className='themeColor mt-1'>{error}</p>
    }
    </div>
  )
}

export default Fourth

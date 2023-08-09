import React from 'react'

const Second = ({handleChange,formData,error}) => {
  return (
    <div className='d-flex flex-column'>
      <label className="h4 mb-4" htmlFor="phone_number">Phone Number</label>
      
      <input className='noOutline p12' id="phone_number" type="number" placeholder="Phone Number" name='phoneNumber'  value={formData?.phoneNumber}
      onChange={(e)=>handleChange(e)}
      />
       {
      error && <p className='themeColor mt-1'>{error}</p>
     }
    </div>
  )
}

export default Second

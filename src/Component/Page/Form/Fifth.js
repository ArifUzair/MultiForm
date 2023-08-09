import React from 'react'

const Fifth = ({handleChange,formData,error}) => {
  return (
    <div className='d-flex flex-column'>
      <label htmlFor='' className="h4 mb-4" for="Gender">Gender</label>

      <div className='genderMale bb2'>
        <label htmlFor="male" className='py-2' >
          <input type="radio" name="gender" id="male" checked={formData?.gender === "Male"}  value='Male'  onChange={(e)=>handleChange(e)}/><span className='mx-2 fs-5'>Male</span>
        </label>
      </div>
      <div className='bb2'>
        <label htmlFor="female" className='py-2'>
          <input type="radio" name="gender" id="female" checked={formData?.gender === "Female"} value='Female' onChange={(e)=>handleChange(e)} /><span className='mx-2 fs-5'>Female</span>
        </label>
      </div>
      {
      error && <p className='themeColor mt-1'>{error}</p>
    }
    </div>



  )
}

export default Fifth

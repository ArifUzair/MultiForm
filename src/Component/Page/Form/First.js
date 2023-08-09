import React, { useState } from 'react'
import "./Form.css"

const First = ({ handleChange, formData,error}) => {
  

 

  return (
    <div className='d-flex flex-column'>
      <label className="h4 mb-4" htmlFor="first_name">Before we start, can we get your name? </label>

      <input className='noOutline p12' id="first_name" type="text" placeholder="Before we start, can we get your name?" name='name' value={formData?.name || " "}
        onChange={(e) => handleChange(e)} 
      />
     
     {
       error && <p className='themeColor mt-1'>{error}</p>
      }
    </div>
  )
}

export default First

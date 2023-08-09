import React from 'react'

const Eight = ({formData,handleChange,error}) => {
  return (
    <div className='d-flex flex-column'>
    <label className="h4 mb-4" for='2c'>Family history of Hair loss</label>
    <div className='margin-bottom-2 text-secondary'>Select atleast one option</div>

    <div className='malebranchh bb2'>
      <label htmlFor="2c_1" className='py-2' >
        <input type="radio" name='FamilyhistoryofHairloss' id="2c_1" value="Mother or anyone from mother's side of the family" checked={formData?.FamilyhistoryofHairloss === "Mother or anyone from mother's side of the family"} onChange={(e)=>handleChange(e)} /><span className='mx-2 fs-5'>Mother or anyone from mother's side of the family</span>
      </label>
    </div>
    <div className='bb2'>
      <label htmlFor="2c_2" className='py-2'>
        <input type="radio"  name='FamilyhistoryofHairloss' id="2c_2" value="Father or anyone from father's side of the family" checked={formData?.FamilyhistoryofHairloss === "Father or anyone from father's side of the family"} onChange={(e)=>handleChange(e)} /><span className='mx-2 fs-5'>Father or anyone from father's side of the family</span>
      </label>
    </div>
    <div className='bb2'>
      <label htmlFor="2c_3" className='py-2'>
        <input type="radio"  name='FamilyhistoryofHairloss' id="2c_3" value="Both" checked={formData?.FamilyhistoryofHairloss === "Both"} onChange={(e)=>handleChange(e)} /><span className='mx-2 fs-5'>Both</span>
      </label>
    </div>
    <div className='bb2'>
      <label htmlFor="2c_4" className='py-2'>
        <input type="radio" name='FamilyhistoryofHairloss'  id="2c_4" value="None" checked={formData?.FamilyhistoryofHairloss === "None"} onChange={(e)=>handleChange(e)} /><span className='mx-2 fs-5'>None</span>
      </label>
    </div>
    {
      error && <p className='themeColor mt-1'>{error}</p>
    }
  </div>
  )
}

export default Eight

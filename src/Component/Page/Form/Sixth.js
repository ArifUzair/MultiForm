import React from 'react'

const Sixth = ({handleChange,formData,error}) => {
  return (
    <div className='d-flex flex-column'>
    <label className="h4 mb-4" for="male-branch">Do you have dandruff?</label>

    <div className='malebranchh bb2'>
      <label htmlFor="malebranch_1" className='py-2' >
        <input type="radio" name='Doyouhavedandruff' id="malebranch_1" value="No" checked={formData?.Doyouhavedandruff === "No"} onChange={(e)=>handleChange(e)} /><span className='mx-2 fs-5'>No</span>
      </label>
    </div>
    <div className='bb2'>
      <label htmlFor="malebranch_2" className='py-2'>
        <input type="radio" name='Doyouhavedandruff' id="malebranch_2" value="Yes, mild that comes and goes" checked={formData?.Doyouhavedandruff === "Yes, mild that comes and goes"}  onChange={(e)=>handleChange(e)} /><span className='mx-2 fs-5'>Yes, mild that comes and goes</span>
      </label>
    </div>
    <div className='bb2'>
      <label htmlFor="malebranch_3" className='py-2'>
        <input type="radio" name='Doyouhavedandruff' id="malebranch_3" value="Yes, heavy dandruff that sticks to the scalp" checked={formData?.Doyouhavedandruff === "Yes, heavy dandruff that sticks to the scalp"} onChange={(e)=>handleChange(e)} /><span className='mx-2 fs-5'>Yes, heavy dandruff that sticks to the scalp</span>
      </label>
    </div>
    <div className='bb2'>
      <label htmlFor="malebranch_4" className='py-2'>
        <input type="radio" name='Doyouhavedandruff'  id="malebranch_4" value="I have Psoriasis" checked={formData?.Doyouhavedandruff === "I have Psoriasis"} onChange={(e)=>handleChange(e)}  /><span className='mx-2 fs-5'>I have Psoriasis</span>
      </label>
    </div>
    {
      error && <p className='themeColor mt-1'>{error}</p>
    }
  </div>
  )
}

export default Sixth

import React from 'react'

const Seventh = ({handleChange,formData,error}) => {
  return (
    <div className='d-flex flex-column'>
    <label className="h4 mb-4" >What are your major hair goals?</label>
    <div className='margin-bottom-2 text-secondary'>Select atleast one option</div>

    <div className='malebranchh bb2'>
      <label htmlFor="3i_1" className='py-2' >
        <input type="checkbox" name="Whatareyourmajorhairgoals" id="3i_1" value="Regrow hair" checked={formData?.Whatareyourmajorhairgoals === "Regrow hair"} onChange={(e)=>handleChange(e)}/><span className='mx-2 fs-5'>Regrow hair</span>
      </label>
    </div>
    <div className='bb2'>
      <label htmlFor="3i_2" className='py-2'>
        <input type="checkbox" name="Whatareyourmajorhairgoals" id="3i_2" value="Control hair fall" checked={formData?.Whatareyourmajorhairgoals === "Control hair fall"} onChange={(e)=>handleChange(e)}/><span className='mx-2 fs-5'>Control hair fall</span>
      </label>
    </div>
    <div className='bb2'>
      <label htmlFor="3i_3" className='py-2'>
        <input type="checkbox" name="Whatareyourmajorhairgoals" id="3i_3" value="Work on hair quality" checked={formData?.Whatareyourmajorhairgoals === "Work on hair quality"} onChange={(e)=>handleChange(e)}/><span className='mx-2 fs-5'>Work on hair quality</span>
      </label>
    </div>
    <div className='bb2'>
      <label htmlFor="3i_4" className='py-2'>
        <input type="checkbox" name="Whatareyourmajorhairgoals" id="3i_4" value="Delay greying" checked={formData?.Whatareyourmajorhairgoals === "Delay greying"} onChange={(e)=>handleChange(e)}/><span className='mx-2 fs-5'>Delay greying</span>
      </label>
    </div>
    {
      error && <p className='themeColor mt-1'>{error}</p>
    }
  </div>
  )
}

export default Seventh

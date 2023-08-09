import React, { useState } from 'react'
import "./Tabs.css"
import Form from './Form/Form'



const Tabs = () => {
    const [formData, setformData] = useState()
    const [error, setError] = useState('')
    const [tab, setTabs] = useState(saveTabtoLocal())
    const [page, setPage] = useState(savePagetoLocal())


    
        const handleEnterKey=(event)=>{
            if(event.key==="Enter"){
            nextPage()
            }
        }
        window.addEventListener('keydown',handleEnterKey)
       


    const nextPage = () => {
        const errorMsg ="Please fill this in"
        const SelectError="Please select one"
            if (page === 0 || page===8 || page===16) {
                if (!formData?.name) {
                    setError(errorMsg)
                } else {
                    setError('')
                     let d = page;
            localStorage.setItem("page", d + 1)
            localStorage.setItem("tab", d + 1)
                    setPage(page + 1);
                    setTabs(tab + 1);
                }

            }
            else if (page === 1 || page===9 || page===17) {
                if (!formData?.phoneNumber) {
                    setError("please fill phone number")
                } else if (formData?.phoneNumber.length !== 10) {
                    setError("Phone number should have exactly 10 digits")
                }
                else {
                    setError('')
                     let d = page;
            localStorage.setItem("page", d + 1)
            localStorage.setItem("tab", d + 1)
                    setPage(page + 1);
                    setTabs(tab + 1);
                }
            }
            else if (page === 2 || page===10 || page===18){
                if (!formData?.email) {
                    setError(errorMsg)
                }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData?.email)) {
                        setError('Please enter a valid email');
                }else{
                    setError('')
                     let d = page;
            localStorage.setItem("page", d + 1)
            localStorage.setItem("tab", d + 1)
                    setPage(page + 1);
                    setTabs(tab + 1);

                }
            }
            else if (page===3 || page===11 || page ===19){
                if(!formData?.Age){
                    setError(errorMsg)
                }else if (formData?.Age.length>2){
                    setError("Well,please enter age <100")
                }else{
                    setError('')
                     let d = page;
            localStorage.setItem("page", d + 1)
            localStorage.setItem("tab", d + 1)
                    setPage(page + 1);
                    setTabs(tab + 1);
                }
            }
            else if (page===4 || page===12 || page===20){
               if (!formData?.gender){
                setError(SelectError)
               }else{
                setError('')
                 let d = page;
            localStorage.setItem("page", d + 1)
            localStorage.setItem("tab", d + 1)
                setPage(page + 1);
                setTabs(tab + 1);
               }
            }

            else if (page===5 || page===13){
                if(!formData?.Doyouhavedandruff){
                    setError(SelectError)
                }else{
                    setError('')
                     let d = page;
            localStorage.setItem("page", d + 1)
            localStorage.setItem("tab", d + 1)
                setPage(page + 1);
                setTabs(tab + 1);
                }
            }
            else if (page===6 || page===14){
                if(!formData?.Whatareyourmajorhairgoals){
                    setError(SelectError)
                }else{
                    setError('')
                     let d = page;
            localStorage.setItem("page", d + 1)
            localStorage.setItem("tab", d + 1)
                setPage(page + 1);
                setTabs(tab + 1);
                }
            }
            else if (page===7 || page===15){
                if(!formData?.FamilyhistoryofHairloss){
                    setError(SelectError)
                }else{
                    setError('')
                    let d = page;
                    localStorage.setItem("page", d + 1)
                    localStorage.setItem("tab", d + 1)
                    setPage(page + 1);
                    setTabs(tab + 1);
                }
            }
            
    }


    const prevPage = () => {
        setError('')
        let d = page;
        localStorage.setItem("page", d - 1)
        localStorage.setItem("tab", d - 1)
        setPage(page - 1)
        setTabs(tab - 1)
    }
    // <----------------localStorage***PAGE***----------------------->
    function savePagetoLocal() {
        let pagee = localStorage.getItem("page");

        let pagevalue = JSON.parse(pagee);

        if (pagevalue) {
            return pagevalue
        } else {
            let data = 0
            localStorage.setItem("page", 0);
            return 0
        }
    }
    // <------------------localStorage***Tabs***---------------------------->
    function saveTabtoLocal() {
        let tabee = localStorage.getItem("tab");
        let tabvalue = JSON.parse(tabee)
        if (tabvalue) {
            return tabvalue
        } else {
            let data = 0
            localStorage.setItem("page", 0);
            return 0
        }

    }
    // <------------------End localStorage--------------------------->



    const arr = [
        1, 2, 3, 4, 5
    ]


    return (
        <div className='w90'>
            <div className='allTags'>
                <div className='d-flex justify-content-between gap-2 mt-3'>
                    <div className='w-100'>

                        <div className={`rounded  w-100 py-3 px-3 ${page < 5 ? 'shadow shadowColor text-white' : 'btnGray'}`}>
                            <p className='m-0 text-uppercase letterSpace fz-18 ps-2'>A Bit <br /> About you</p>
                        </div>
                        {/*----------------------- DashTabs1 ------------------------------------------- */}

                        <div className={`dashed d-flex mt-3 gap-2 ${page < 5 ? 'd-block' : 'd-none'}`}>
                            {
                                arr.map((item, index) => <span key={index} className={`rounded w-100 h15 btnGray ${tab == index ? "shadowColor" : tab < index ? "btnGray" : 'lightGreen'}`}></span>)
                            }
                        </div>
                        {/*-----------------------EndDashTabs ------------------------------------------- */}
                    </div>
                    <div className='w-100'>
                        <div className={`rounded  w-100 py-3 px-3 ${(page > 4 && page < 10) ? 'shadow shadowColor text-white' : 'btnGray'}`}>
                            <p className='m-0 text-uppercase letterSpace fz-18 ps-2'>Know your <br /> Hair</p>
                        </div>
                        {/*----------------------- DashTabs2 ------------------------------------------- */}
                        <div className={`dashed d-flex mt-3 gap-2 ${(page > 4 && page < 10) ? 'd-block' : 'd-none'}`}>
                            {
                                arr.map((item, index) => <span key={index} className={`rounded w-100 h15 btnGray ${tab - 5 == index ? "shadowColor" : tab - 5 < index ? "btnGray" : 'lightGreen'}`}></span>)
                            }
                        </div>
                        {/*-----------------------EndDashTabs ------------------------------------------- */}
                    </div>
                    <div className='w-100'>
                        <div className={`rounded  w-100 py-3 px-3 ${(page > 9 && page < 15) ? 'shadow shadowColor text-white' : 'btnGray'}`}>
                            <p className='m-0 text-uppercase letterSpace fz-18 ps-2'>Your <br /> Lifestyle</p>
                        </div>
                        {/*----------------------- DashTabs3 ------------------------------------------- */}
                        <div className={`dashed d-flex mt-3 gap-2 ${(page > 9 && page < 15) ? 'd-block' : 'd-none'}`}>
                            {
                                arr.map((item, index) => <span key={index} className={`rounded w-100 h15 btnGray ${tab - 10 == index ? "shadowColor" : tab - 10 < index ? "btnGray" : 'lightGreen'}`}></span>)
                            }
                        </div>
                        {/*-----------------------EndDashTabs ------------------------------------------- */}
                    </div>
                    <div className='w-100'>
                        <div className={`rounded  w-100 py-3 px-3 ${(page > 14 && page < 20) ? 'shadow shadowColor text-white' : 'btnGray'}`}>
                            <p className='m-0 text-uppercase letterSpace fz-18 ps-2'>Scalp<br /> Assessment</p>
                        </div>
                        {/*----------------------- DashTabs ------------------------------------------- */}
                        <div className={`dashed d-flex mt-3 gap-2 ${(page > 14 && page < 20) ? 'd-block' : 'd-none'}`}>
                            {
                                arr.map((item, index) => <span key={index} className={`rounded w-100 h15 btnGray ${tab - 15 == index ? "shadowColor" : page < index ? "btnGray" : 'lightGreen'}`}></span>)
                            }
                        </div>
                        {/*-----------------------EndDashTabs ------------------------------------------- */}
                    </div>
                </div>


            </div>
            <Form nextPage={nextPage} page={page}
                prevPage={prevPage}
                tab={tab}
                formData={formData}
                setformData={setformData}
                error={error}
            />
        </div>
    )
}

export default Tabs


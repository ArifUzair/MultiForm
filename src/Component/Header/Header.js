import React from "react";
import './Header.css';
import { Link } from "react-router-dom";


const Header = () => {
    return (
        <section className="navbarHT " >
            <div className="px-5">
                <div className="insideContainer">
                    <img src="https://form.traya.health/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftraya.a5a9cff0.png&w=256&q=75" alt="" className="" width="96px" height="30px" />
                <Link to="" className="btn text-white"><span className="ExitButton">Exit</span></Link>
                </div>
                <p className="text-white headSays ">This hair test is co-created with doctors</p>
            </div>
        </section>
    )
}

export default Header

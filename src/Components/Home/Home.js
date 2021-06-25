import React from 'react';
import './Home.css'
import img from "../../images/learn2.png"
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

const Home = () => {
    return (
        <section className="container home d-flex justify-content-center align-items-center mt-5 ">
            <div className="row  home d-flex justify-content-center align-items-center mt-5 ">
            <div className="col-md-6 mb-5">
                <img src={img} style={{maxWidth:'90%', borderRadius:'10px'}} alt="" />
            </div> 
            <div className=" col-md-6 py-3">
                <h2>
                     Minority Pogrammers Association
                </h2>
                <h4>Code, Culture, Community</h4>
                <Tippy content={<span style={{color: 'green', fontWeight:"bold"}}> Enroll our couse</span>}>
                    <a href="/learn"> <button className='btn_brand'> Start Your Journey</button>
                    </a>
               </Tippy>
            </div>  
            </div>    
        </section>
    );
};

export default Home;
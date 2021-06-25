import React from 'react';
import progress from '../../../images/progress.png';
import { Link } from 'react-router-dom';
import './CourseF.css';
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";


const CourseF = (props) => {
    const {id, name, Details, modules, level} = props.course;
    return (
        <div className="compon-style">
            <div className="course">
                 <h1>{name}</h1>
                 <p>{Details}</p>
                 <br />
                 <Tippy content={<span style={{color: 'white'}}>Explore about this startup</span>}>
                 <button className='btn__one'><Link to={`/progress/${id}`}>Learn More</Link></button>
                 </Tippy>
                 <p className="mod">{modules}</p>
                    <img src={progress} style={{maxWidth:"320px"}} alt="" />
                 <p>{level} completed</p>
           </div>
        </div>
    );
};

export default CourseF;
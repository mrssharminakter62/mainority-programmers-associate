import React, { useEffect, useState } from 'react';
import data from '../../../Data/data1.json';
import CourseF from '../CourseF/CourseF';
import './FeatureCourse.css'

const FeatureCourse = () => {
    const [courses, setCourses] = useState([]);
    useEffect(()=>{
        setCourses(data);
    },[]);
    return (
        <div className='col-12 mt-5' style={{width:'100%'}}>
            <h1 style={{color: 'white'}}>Featured Courses__________________________________________</h1>
            <div className="box"> 
                {
                    courses.map(course => <CourseF course={course} key={course.id}></CourseF>)
                }
            </div>
           
        </div>
    );
};

export default FeatureCourse;
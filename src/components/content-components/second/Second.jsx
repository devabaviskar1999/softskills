import React from 'react';
import "./Second.css"
import OfficeSitting from "../../../assets/OfficeSitting.png"
const Second = () => {
    return (
        <div className='second'>
            <div className='heading-div'>
                <h3>
                    Our expertise
                </h3>
            </div>
         <div className='main-div'>
         <div className='left-text-div'>
            <li>Communication skills</li>
            <li>Time management skills</li>
            <li>Problem solving skills</li>
            <li>Software knowledge</li>
            <li>Data analysis</li>
            <li>Research and Data collection skills</li>
            <li>Adptability</li>
         </div>
         <div className='right-image-div'>
            <img src={OfficeSitting} alt="Office sitted img" />
         </div>
         </div>
        </div>
    );
}

export default Second;

import React from 'react';
import "./Map.css"
const Map = () => {
    return (
        <div className='map'>
        <div></div>
        <iframe
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1243.0889835966377!2d75.56629966667263!3d20.99028771284872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd90ff5a024c2eb%3A0x367554870f90b5e2!2sKit-Cat%20boarding%20%26%20playschool%20(cat%20hostel))!5e0!3m2!1sen!2sin!4v1736247256560!5m2!1sen!2sin" 
                width="300"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location"
            ></iframe>
        </div>
    );
}

export default Map;

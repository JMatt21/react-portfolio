import React from 'react';
import "./Section.css"


const Section = ({bg, children, isLast}) => {
    const sectionStyle = {
        backgroundColor: bg
    }
    return (
        (isLast ? 
        <section className='last' style={sectionStyle}>
            {children}
        </section> :
        <section className='content' style={sectionStyle}>
            {children}
        </section>
        )
    )
}

export default Section;
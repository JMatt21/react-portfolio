import React from 'react';
import ALink from "../ALink";
import "./Project.css";
export default ({ title, src, git, link, desc, tech }) => {
    return (
        <div>
            <div className="title">
                <ALink href={git}>
                    <h2>{title || 'no_title'}</h2>
                </ALink>
            </div>
            <ALink href={link || '#'}>
                <img src={src} alt={title} />
            </ALink>
            <div className='text-boxes clearfix'>
                <div className='description'>
                    {desc.split("\n").map((paragraph, key) => {
                        return <p className="line-break" key={key}>{paragraph}</p>
                    })}
                </div>
                <div className='tech-used'>
                    <ul>
                        <p>Technologies I Used</p>
                        {tech.map((t, key) => <li key={key}>{t}</li>)}
                    </ul>
                </div>
            </div>
        </div>
    );
};
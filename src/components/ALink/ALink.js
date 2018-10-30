import React from 'react';

export default ({children, href, className}) => {
return (
    <a className={className || ''}target="_blank" rel="noopener noreferrer" href={href}>{children}</a>
   );
};
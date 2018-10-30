import React from 'react';
import "./Tooltip.css";
export default ({ children, dataToolTip, className }) => {
    return (
        <div className={`tooltip ${className || ''}`}
            data-tool-tip={dataToolTip || children}
        >{children}</div>
    );
};
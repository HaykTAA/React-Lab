import React from 'react';

const DropDown = ({children,className = "",setVisible}) => {
    return (
        <div
            className="fixed justify-center w-full h-full inset-0"
            onClick={() => setVisible(false)}
        >
            <div
                onClick={(e)=> e.stopPropagation()}
                className={`absolute ${className}`}
            >
                {children}
            </div>
        </div>
    );
};

export default DropDown;
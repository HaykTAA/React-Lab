export const UiComponentsCode = `
So firstly you need to make the component you gonna use 
and obviously  you should have the direction "ui"  to make your project even clear
I took for the example button

import React from 'react';

const Button = ({children,onClick,className}) => {
    return (
            <button
            className={className}
            onClick={onClick}
            >
                {children}
            </button>
    );
};

export default Button;

so now instead of using every time the tag button 
and giving him the same classes you will call the component and give that by props


import React from 'react';
import Button from "../../ui/Button.jsx";

const UiComponents = () => {
    return (
        <div>
            <Button
                className="border-solid text-black bg-orange-700 rounded-xl"
                onClick={()=> {}}
            >
                that's how it works
            </Button>
        </div>
    );
};

export default UiComponents;
`
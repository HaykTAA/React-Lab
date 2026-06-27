import React from 'react';

const Code = ({props}) => {
    return (
        <div className={"min-h-125 bg-gray-900 text-green-400 p-4 rounded-xl overflow-auto text-sm"}>
            <pre>
                <code>{props}</code>
            </pre>
        </div>
    );
};

export default Code;
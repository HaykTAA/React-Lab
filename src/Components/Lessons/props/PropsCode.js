// import React from 'react';
const PropsCode = `
in Props file:

function Props({title, color, fontSize = "26px",fontWeight = "normal"})
{
    return (
        <p
    style={{
        color,
        fontSize,
        fontWeight,
    }}
    >
        {title}
    </p>)
}
export default Props

and then:

return <Props
            key={el.id}
            title = {el.title}
            color = {el.color}
            fontSize = {el.fontsize}
            fontWeight = {el.fontWeight}
        />
`;

export default PropsCode;
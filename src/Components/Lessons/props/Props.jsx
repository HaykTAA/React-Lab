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
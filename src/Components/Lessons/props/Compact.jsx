import Props from "./Props.jsx";

const text = [
    {id: Math.random(),title: "Pops:", color: "black",fontsize: "60px", fontWeight:"bold"},
    {id: Math.random(), title: "lav1", color: "blue", fontsize: "31px"},
    {id: Math.random(), title: "lav2", color: "gary",},
    {id: Math.random(), title: "lav3", color: "red", fontsize: "31px"},
    {id: Math.random(), title: "lav4", color: "green",}
]

function Compact(){
    return (

        <main >

            {
                text.map((el ) => {
                        return <Props
                            key={el.id}
                            title = {el.title}
                            color = {el.color}
                            fontSize = {el.fontsize}
                            fontWeight = {el.fontWeight}
                        />
                    }
                )
            }
        </main>
    )
}
export default Compact
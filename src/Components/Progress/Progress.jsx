import "./progress.css"

function Progress(current,total){
    const precent = (current / total) * 100;
    return (
        <div className="progress">
            <p className="progressText">
                Your Progress: 10 / 10
            </p>
            <div className="progressBar">
                <div className="fill"
                     style={{width: precent + "%"}}/>
            </div>
        </div>
    )
}
export default Progress;
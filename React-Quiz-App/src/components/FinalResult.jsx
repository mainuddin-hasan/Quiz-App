function FinalResult(props) {
    const corr = props.point;
   
    return (
        <>
            <h1>Quiz Result</h1>
            {corr >= 3 ?  <p className="comment"><span className="commnent-congo">Congratulations</span> Your Outstanding Performance</p> 
            : <h2 className="comment2">Please Try Again</h2> }
            <div className="show-result">
            Total Points : {props.totalPoint}<br/>
            Your Points : {props.point}
            </div>
            <button id="next-btn" onClick={props.reStart}>Restart</button>
        </>
    );
}

export default FinalResult;
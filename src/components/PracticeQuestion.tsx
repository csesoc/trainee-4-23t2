export default function PracticeQuestion() {
    return (
        <div id="question-container" className="m-4 bg-theme-black px-4 py-2 rounded-lg" style={{minHeight: "50vh", maxHeight: "70vh", display:"flex", width: "80%", flexDirection: "row", padding: "20px", fontSize: "20px", overflow: "hidden"}}>
            <div style={{width:"35%", borderRight: "1px solid white", textAlign: "center", display: "flex", padding: "10px", flexDirection: "column"}}>
                <h1 style={{marginBottom: "7.5vh"}}>Question</h1>
                <div style={{display: "block", width: "100%", overflowWrap: "anywhere", padding: "10px"}}>To declare an Array (but not initialise), I must provide the size of the array. aslmlsflmlasflmsafmlafmlamsfmaslflmsamlfmlafsmafsmsmf </div>
            </div>
            <div style={{width:"65%", borderLeft: "1px solid white", display: "flex", alignItems: "center", padding: "10px", flexDirection: "column",  overflowWrap: "anywhere"}}>
                <h2 style={{marginBottom: "7.5vh"}}>Answer</h2>
                <div style={{display: "block", width: "100%", overflowWrap: "anywhere", padding: "10px"}}> An array's size must be specified at the time of declaration in order to determine how much memory is required to store all of it's elements.  </div>
            </div>  
        </div>
    );
}
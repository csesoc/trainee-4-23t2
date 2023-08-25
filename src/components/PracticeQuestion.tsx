export default function PracticeQuestion() {
    return (
        <div id="question-container" className="m-4 bg-theme-black px-4 py-2 rounded-lg" style={{display:"flex", width: "80%", flexDirection: "row", padding: "20px", fontSize: "20px"}}>
            <div style={{border: "1px solid white", width:"35%", minHeight: "30vh", borderRight: "1px solid white", textAlign: "center", display: "flex", padding: "10px", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                <h1 style={{marginBottom:"15%"}}>Question</h1>
                <div style={{display: "block", border: "1px solid red", width: "100%"}}>To declare an Array (but not initialise), I must provide the size of the array. aslmlsflmlasflmsafmlafmlamsfmaslflmsamlfmlafsmafsmsmf </div>
            </div>
            <div style={{border: "1px solid white", width:"65%", borderLeft: "1px solid white", display: "flex", alignItems: "center", padding: "10px", flexDirection: "column"}}>
                <h2 style={{marginBottom:"10%"}}>Answer</h2>
                <p style={{}}> An array's size must be specified at the time of declaration in order to determine how much memory is required to store all of it's elements. </p>
            </div>  
        </div>
    );
}
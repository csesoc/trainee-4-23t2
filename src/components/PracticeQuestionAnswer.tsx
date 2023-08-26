export default function PracticeQuestion() {
    return (
        <div id="question-container" className="m-4 bg-theme-black px-4 py-2">
            <table id="question-answer-display">
                <thead>
                    <tr>
                        <th style={{width: "35%"}}>Question</th>
                        <th style={{width: "65%"}}>Answer</th>
                    </tr>
                </thead>
                <tr>
                    <td style={{width: "35%"}}>To declare an Array (but not initialise), I must provide the size of the array. aslmlsflmlasflmsafmlafmlamsfmaslflmsamlfmlafsmafsmsmf </td>
                    <td>An array's size must be specified at the time of declaration in order to determine how much memory is required to store all of it's elements.  </td>
                </tr>
            </table>
        </div>

    );
}
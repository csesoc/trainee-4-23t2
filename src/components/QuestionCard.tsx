import { QuestionData } from "../types";
import { PiCheckFatLight } from "react-icons/pi";

interface QuestionCardProps {
    qData: QuestionData;
    isCorrect?: boolean;
}


export default function QuestionCard(props: QuestionCardProps) {
    let qData = props.qData;
    return (
        <div id="question-container" className="m-4 bg-theme-black px-4 py-2 mb-10">
            <table id="question-answer-display">
            <thead>
                <tr>
                <th style={{width: "35%"}}>Question </th>
                <th style={{width: "65%"}}>Answer {(props.isCorrect ? <PiCheckFatLight className="inline-block text-[#E87195]"/> : <></>)}</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td style={{width: "35%"}}>{qData.question}</td>
                <td>{qData.explanation}</td>
                </tr>
            </tbody>
            </table>
      </div>
    );
}
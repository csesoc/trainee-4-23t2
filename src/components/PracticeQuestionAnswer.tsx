import NextSave from "./NextSave";
import { QuestionData } from '../types';

interface PracticeQuestionAnswerProps {
  questionData: QuestionData;
  setQCount: Function;
  dataLength: number;
  isCorrect: boolean
}

export default function PracticeQuestionAnswer(props: PracticeQuestionAnswerProps) {
  let qData = props.questionData;
  return (
    <div id='question-answer-next-save-container'>
      <div id="question-container" className={`${props.isCorrect ? 'bg-theme-blue' : 'bg-theme-red' } m-4  px-4 py-2`}>
        <table id="question-answer-display">
          <thead>
            <tr>
              <th style={{width: "35%"}}>Question</th>
              <th style={{width: "65%"}}>Answer</th>
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
      <NextSave setQCount={props.setQCount} dataLength={props.dataLength}/>
    </div>
  );
}
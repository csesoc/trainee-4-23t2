import NextSave from "./NextSave";
import { QuestionData } from '../types';
import QuestionCard from "./QuestionCard";

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
      <QuestionCard qData={qData}/>
      <NextSave setQCount={props.setQCount} dataLength={props.dataLength}/>
    </div>
  );
}
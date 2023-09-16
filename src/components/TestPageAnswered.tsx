import { QuestionData } from "../types";
import QuestionCard from "./QuestionCard";

interface TestPageAnsweredProps {
  qData: QuestionData[];
}



export default function TestPageAnswered(props: TestPageAnsweredProps) {
  let questionCards : JSX.Element[] = [];
  props.qData.forEach((q) => {
    questionCards.push(<QuestionCard qData={q} isCorrect={q.correctAns === q.chosenAnswerValue}/>)
  });

  console.log(props.qData);

  return (
    <>
      <div className="w-3/5 m-auto">
        {questionCards}
      </div>
    </>
  );
}
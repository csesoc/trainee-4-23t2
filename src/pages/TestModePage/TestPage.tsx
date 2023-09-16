import { useEffect, useState } from "react";
import { ExitPage } from "../../components/ExitButton";
import { QuestionData } from "../../types";
import { collection, getDocs, query, where } from "firebase/firestore";
import { database } from "../../firebase";
import PracticeQuestionDisplay from "../../components/PracticeQuestionDisplay";
import NextPrev from "../../components/NextPrev";
import TestQuestionDisplay from "../../components/TestQuestionDisplay";
import TestPageAnswered from "../../components/TestPageAnswered";

interface TestPageProps {
    topic: string[];
}

export function TestPage(props: TestPageProps) {
  const [finished, setFinished] = useState<Boolean>(false);

  let localised = localStorage.getItem('qData') as string;
  let [loading, setLoading] = useState<boolean>(!localised);
  const [data, setData] = useState<QuestionData[]>(!localised ? [] : JSON.parse(localised));
  let localQCount : any = localStorage.getItem('qCount') as string;
  if (!localQCount) {
    localStorage.setItem('qCount', '0');
    localQCount = '0';
  }

  const [qCount, setQCount] = useState<number>(localQCount === null ? 0 : parseInt(localQCount)); 

  function updateData(option: number, optionValue: string) {
    let localisedData = localStorage.getItem('qData') as string;
    let jsonifiedData : QuestionData[] = JSON.parse(localisedData);

    jsonifiedData[parseInt(localQCount)].answered = true;
    jsonifiedData[parseInt(localQCount)].chosenAnswer = option;
    jsonifiedData[parseInt(localQCount)].chosenAnswerValue = optionValue;

    setData(jsonifiedData);

    localStorage.setItem('qData', JSON.stringify(jsonifiedData));
  }

  //const [answered, setAnswered] = useState<boolean>(!data.length ? false : data[qCount].answered as boolean);

  useEffect(() => {
    async function RetrieveQuestions(topic: string[]) {
      setLoading(true);
    
      const collectRef = collection(database, '1511');

      if (data.length > 0) {
        setLoading(false);
        return;
      }
  
      const questions = await getDocs(query(collectRef, where('topics', 'array-contains-any', topic)));
  
      let dataArr : QuestionData[] = [];
  
      questions.forEach((doc) => {
        let docData = doc.data();
        dataArr.push({
          id: doc.id,
          correctAns: docData.correctAns, 
          difficulty: docData.difficulty,
          explanation: docData.explanation,
          incorrectAns: docData.incorrectAns,
          question: docData.question,
          questionType: docData.questionType,
          topics: docData.topics,
          chosenAnswer: -1,
          chosenAnswerValue: ''
        });
      });
  
      setData(dataArr);
      setLoading(false);
      localStorage.setItem('qData', JSON.stringify(dataArr));
    }

    RetrieveQuestions(['Arrays']);

  }, []);

  return (
    <>
      <ExitPage/>
      { loading && 'Loading...' }
      { !loading && !finished && (
        <>
          <TestQuestionDisplay questionData={data[qCount]} updateData={updateData}/> 
          <NextPrev setQCount={setQCount} dataLength={data.length}/>
          <button className="mt-150" onClick={() => setFinished(true)}>Finish</button>
        </>
      )}
      { finished && <TestPageAnswered qData={data}/>}
    </>
  )
}
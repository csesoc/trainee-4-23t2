import './PracticePage.css';
import '../../components/css/PracticeQuestionAnswer.css'
import '../../components/PracticeQuestionAnswer'
import { ExitPage } from "../../components/ExitButton";
import PracticeQuestionAnswer from '../../components/PracticeQuestionAnswer';

import PracticeQuestionDisplay from '../../components/PracticeQuestionDisplay';
import { useEffect, useState } from 'react';

import { database } from "../../firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import { QuestionData } from '../../types';

import { getDataStore, setDataStore } from '../../localDataStore';

interface PracticePageProps {
  topic: string;
}

export function PracticePage(props: PracticePageProps) {
  let localised = localStorage.getItem('qData') as string;
  let [loading, setLoading] = useState<boolean>(!localised);
  const [data, setData] = useState<QuestionData[]>(!localised ? [] : JSON.parse(localised));
  let localQCount : any = localStorage.getItem('qCount') as string;
  if (!localQCount) {
    localStorage.setItem('qCount', '0');
    localQCount = '0';
  }

  const [qCount, setQCount] = useState<number>(localQCount === null ? 0 : parseInt(localQCount)); 

  function updateData() {
    let localisedData = localStorage.getItem('qData') as string;
    let jsonifiedData : QuestionData[] = JSON.parse(localisedData);

    jsonifiedData[parseInt(localQCount)].answered = true;

    setData(jsonifiedData);

    localStorage.setItem('qData', JSON.stringify(jsonifiedData));
  }

  console.log(data);

  const [answered, setAnswered] = useState<boolean>(!data.length ? false : data[qCount].answered);
  
  useEffect(() => {
    async function RetrieveQuestions(topic: string) {
      setLoading(true);
    
      const collectRef = collection(database, '1511');

      if (data.length > 0) {
        setLoading(false);
        return;
      }
  
      const questions = await getDocs(query(collectRef, where('topics', 'array-contains', topic)));
  
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
          answered: false
        });
      });
  
      setData(dataArr);
      setLoading(false);
      localStorage.setItem('qData', JSON.stringify(dataArr));
    }

    if (getDataStore().qData.length < 1) {
      RetrieveQuestions('Arrays');
    }
  }, []);

  return (
    <>
      <ExitPage/>
      {loading && "Loading..."}
      {!loading && (answered ? <PracticeQuestionAnswer questionData={data[qCount]} setQCount={setQCount} dataLength={data.length}/> : <PracticeQuestionDisplay questionData={data[qCount]} setAnswer={setAnswered} updateData={updateData}/>)}
    </>
  )
}
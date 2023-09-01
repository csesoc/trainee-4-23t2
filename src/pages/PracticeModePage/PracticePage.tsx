import './PracticePage.css';
import '../../components/css/PracticeQuestionAnswer.css'
import '../../components/PracticeQuestionAnswer'
import { ExitPage } from "../../components/ExitButton";
import PracticeQuestionAnswer from '../../components/PracticeQuestionAnswer';
import NextSave from '../../components/NextSave';
import PracticeQuestionDisplay from '../../components/PracticeQuestionDisplay';
import { useEffect, useState } from 'react';

import { database } from "../../firebase";
import firebase from 'firebase/app';
import { collection, getDocs, query, where } from "firebase/firestore";
import { QuestionData } from '../../types'

export function PracticePage() {
  const [data, setData] = useState<QuestionData[]>([]);

  let localQCount : any = localStorage.getItem('qCount') as string;
  if (!localQCount) {
    localStorage.setItem('qCount', '0');
    localQCount = '0';
  }
  localQCount = parseInt(localQCount);

  const [qCount, setQCount] = useState<number>(localQCount); 

  const [loading, setLoading] = useState<boolean>(true);
  const [answered, setAnswered] = useState<boolean>(false);

  let result;

  useEffect(() => {
    async function RetrieveQuestions(topic: string) {
      setLoading(true);
    
      const collectRef = collection(database, '1511');
  
      const questions = await getDocs(query(collectRef, where('topics', 'array-contains', topic)));
  
      let dataArr : QuestionData[] = [];
  
      questions.forEach((doc) => {
        let qData = doc.data();
        dataArr.push({
          id: doc.id,
          correctAns: qData.correctAns, 
          difficulty: qData.difficulty,
          explanation: qData.explanation,
          incorrectAns: qData.incorrectAns,
          question: qData.question,
          questionType: qData.questionType,
          topics: qData.topics,
          answered: false
        });
      });
  
      setData(dataArr);
      setLoading(false);
    }
    RetrieveQuestions('Arrays');
  }, []);

  /*
  useEffect(() => {
    if (data.length > 0) {
      let currQ = parseInt(localStorage.getItem('qCount') as string);
      console.log(data);
      if (data[currQ].answered) setAnswered(true);
      setLoading(false);
    }
  }, [data]);*/

  localStorage.setItem('qData', JSON.stringify(data));
  
  /*
  if (data.length > 0) {
    localQCount = parseInt(localStorage.getItem('qCount') as string);
    setAnswered(data[localQCount].answered);
    setQCount(qCount);
  }*/

  return (
    <>
      <ExitPage/>
      {loading && "Loading..."}
      {!loading && (answered ? <PracticeQuestionAnswer questionData={data[qCount]}/> : <PracticeQuestionDisplay questionData={data[qCount]} setAnswer={setAnswered}/>)}
    </>
  )
}
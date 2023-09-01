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


interface QuestionData {
  id: string;
  correctAns: string;
  difficulty: number;
  explanation: string;
  incorrectAns: string[];
  question: string;
  questionType: string[];
  topics: string[];
  answered: boolean;
}

export function PracticePage() {
  const [data, setData] = useState<QuestionData[]>([]);
  const [qCount, setQCount] = useState<number>(0); 
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    RetrieveQuestions('Arrays');
  }, []);


  let result =  <PracticeQuestionDisplay/>;

  async function RetrieveQuestions(topic: string) {
    
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
    if (!loading && dataArr) setLoading(false);

    if (dataArr[qCount].answered) {
      result =  <div id='question-answer-next-save-container'> <PracticeQuestionAnswer/> <NextSave/> </div>
    } else {
      result = <PracticeQuestionDisplay/>;
    }

    console.log(data);
  }

  localStorage.setItem('qData', JSON.stringify(data));

  return (
    <>
      <ExitPage/>
      {loading ? "Loading ... " : result}
     </>
  )
}
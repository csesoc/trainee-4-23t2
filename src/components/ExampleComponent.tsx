import { getDocs, collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import { database } from "../firebase";
import ExampleWithProp from "./ExampleWithProp";
import { Question, QDiff, QType, QTopic } from "../types";

interface QuestionData {
    id: string,
    question: string,
    explanation: string,
    // etc.
}

function ExampleComponent() {
    const [data, setData] = useState<QuestionData[]>([]);
    
    // calls getQuestions ONCE everytime the page is reloaded
    useEffect(() => {
        getQuestions();
    }, []);

    // gets data for the '1511' questionbank from firebase, and stores it in the 'data' variable above
    const getQuestions = async() => {
        const questionData: QuestionData[] = [];
        const questionsRef = await getDocs(collection(database, "1511"));

        questionsRef.forEach((doc) => {
            const docData = doc.data();
            const questionInfo:QuestionData = {
                id: doc.id ?? "--",
                question: docData.question ?? "no question data",
                explanation: docData.explanation ?? "no explanation data",
            }
            questionData.push(questionInfo);
        });
        setData(questionData);
    }

    // make a new questioncard for every item in the 1511 questionbank
    const listQuestions = data.map((q) => {
        const qInfo: Question = {
            questionId: q.id,
            question: q.question,
            explanation: q.explanation,
            correctAns: "None atm",
            incorrectAns: ["S", "U", "S"],
            questionType: [QType.MCQ, QType.SA],
            difficulty: QDiff.Maddening,
            topics: [QTopic.Variables]
        }
        return <ExampleWithProp key={`qCard${q.id}`} questionInfo={qInfo}/>
    })

    return (
        <div className="container flex flex-row rounded-xl bg-red-200 h-50 w-100 p-2 m-4">
            <div className="h-full w-1/2 bg-sky-950 hover:bg-pink-500 rounded-xl p-2 m-2">
                <p className="text-pink-500 hover:text-sky-950">wahoooo this is a component very slay!!</p>
            </div>
            <div className="h-full w-1/2 bg-red border-black border-2 p-2 m-2">
                <p className="text-black">sample firebase output</p>
                {listQuestions}
            </div>
        </div>

    )
}

export default ExampleComponent;
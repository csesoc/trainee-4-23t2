import { collection, getDocs, query } from "firebase/firestore";
import UserStatCard from "../components/UserStatCard";
import { database } from "../firebase";
import { useEffect, useState } from "react";

type Counter = {
    answered: number,
    total: number
}

const UserStatPage = () => {
    const [best, setBest] = useState({
        topic: "",
        ratio: -5,
        answered: 0,
        total: 0
    })
    const [worst, setWorst] = useState({
        topic: "",
        ratio: 2,
        answered: 0,
        total: 0
    })
    const data = JSON.parse(localStorage.getItem('userStats') || "0")

    const { numNormal, numHard, numMaddening } = data;

    const topicData:  { [topic: string]: Counter } = {}

    topicData.Arrays = {"answered": data.numArrayQ, "total": 0}
    topicData.Pointers = {"answered":  data.numPointerQ, "total": 0}
    topicData.Other = {"answered":  data.OtherQ, "total": 0}
    

    useEffect(() => {
        getQuestions();
    }, []);

    const getQuestions = async() => {
        const questionData: any = [];
        await getDocs(collection(database, "1511")).then((questionsRef) => {
            questionsRef.forEach((doc) => {
                const topics = doc.data().topics
                for (let topic of topics) {
                    topic = topic.trim()
                    if (topicData[topic]) {
                        topicData[topic].total += 1
                    }
                }
            });
            let best = {
                topic: "",
                ratio: -5,
                answered: 0,
                total: 0
            }
            let worst = {
                topic: "",
                ratio: 2,
                answered: 0,
                total: 0
            }
            Object.entries(topicData).forEach(([key, value]) => {
                const sum = value.answered / value.total
                const data = {
                    topic: key,
                    ratio: sum,
                    answered: value.answered,
                    total: value.total
                }
                if (sum > best.ratio){
                    best = data
                } 
                if (sum < worst.ratio) {
                    worst = data
                }
              });
            setWorst(worst)
            setBest(best)
        })


    }

    return (
        <div className="bg-theme-black flex mt-20 p-20 rounded-xl justify-center gap-10">
            <div className="container w-1/2">
                <h3 className="text-3xl font-bold mb-8">Damn you suck</h3>
                <div className="text-left text-lg">
                    <p>
                        Your best topic was {best.topic}, where you attempted {best.answered} out of {best.total} questions.
                    </p>
                    <p>
                        Keep on working on {worst.topic}! You’ve attempted {worst.answered} out of {worst.total} questions.
                    </p>
                    {/* <p>
                        Your fastest test time is x:xx, which is 14% faster than your previous record of x:xx.
                    </p> */}
                </div>
            </div>
            <div className="">
                <h3 className="text-3xl mb-8 font-bold"> Your Stats</h3>
                <div className="grid grid-cols-2 gap-10 justify-items-center">
                    <UserStatCard name="Maddening Questions" number={numMaddening} style="bg-theme-pink"></UserStatCard>
                    <UserStatCard name="Hard Questions" number={numHard} style="bg-slate-500"></UserStatCard>
                    <UserStatCard name="Normal Questions" number={numNormal} style="bg-purple-400"></UserStatCard>
                    <UserStatCard name="Easy Questions" number={0} style="bg-theme-blue"></UserStatCard>
                </div>
            </div>
        </div>
    )
}

export default UserStatPage
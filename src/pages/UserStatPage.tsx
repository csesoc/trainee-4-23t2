import { collection, getDocs, query } from "firebase/firestore";
import UserStatCard from "../components/UserStatCard";
import { database } from "../firebase";
import { useEffect, useState } from "react";

type Counter = {
    answered: number,
    total: number
}

const UserStatPage = () => {
    const num_challenging = parseInt(localStorage.getItem('num-challenging')||'0')
    const num_hard = parseInt(localStorage.getItem('num-hard')||'0')
    const num_medium = parseInt(localStorage.getItem('num-medium')||'0')
    const num_easy = parseInt(localStorage.getItem('num-easy')||'0')

    const topicData:  { [topic: string]: Counter } = {}

    topicData.Arrays = {"answered":  parseInt(localStorage.getItem('num-array-q')||'4'), "total": 0}
    topicData.Pointers = {"answered":  parseInt(localStorage.getItem('num-pointer-q')||'2'), "total": 0}
    

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
    
            const x = Object.entries(topicData)
            let best = {"topic":"", "ratio" : -1}
            let worst = {"topic":"", "ratio" : 10}
            x.forEach(([key, value]) => {
                const sum = value.answered / value.total
                console.log(sum)
                if (sum > best.ratio){
                    best.topic = key
                    best.ratio = sum
                } 
                if (sum < worst.ratio) {
                    worst.topic = key
                    worst.ratio = sum
                }
              });
            console.log("Best", best)
            console.log("Worst", worst)
        })


    }

    console.log(topicData)

    return (
        <div className="bg-theme-black flex mt-20 p-20 rounded-xl justify-center gap-10">
            <div className="container w-1/2">
                <h3 className="text-3xl font-bold mb-8">Damn you suck</h3>
                <div className="text-left text-lg">
                    <p>
                        Your best topic was Arrays, where you attempted 60 out of 69 questions.
                    </p>
                    <p>
                        Keep on working on loops! You’ve attempted 10 out of 40 questions.
                    </p>
                    <p>
                        Your fastest test time is x:xx, which is 14% faster than your previous record of x:xx.
                    </p>
                </div>
            </div>
            <div className="">
                <h3 className="text-3xl mb-8 font-bold"> Your Stats</h3>
                <div className="grid grid-cols-2 gap-10 justify-items-center">
                    <UserStatCard name="Challenging Questions" number={num_challenging} style="bg-theme-pink"></UserStatCard>
                    <UserStatCard name="Hard Questions" number={num_hard} style="bg-slate-500"></UserStatCard>
                    <UserStatCard name="Medium Questions" number={num_medium} style="bg-purple-400"></UserStatCard>
                    <UserStatCard name="Easy Questions" number={num_easy} style="bg-theme-blue"></UserStatCard>
                </div>
            </div>
        </div>
    )
}

export default UserStatPage
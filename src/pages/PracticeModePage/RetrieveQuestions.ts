import { database } from "../../firebase";
import firebase from 'firebase/app';
import { collection, getDocs, query, where } from "firebase/firestore";

export default async function RetrieveQuestions(topic: string) {
    const collectRef = collection(database, '1511');

    const questions = await getDocs(query(collectRef, where('topics', 'array-contains', topic)));

    const dataArr = questions.docs.map((doc) => doc.data());

    return dataArr;
}


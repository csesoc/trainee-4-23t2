import { database } from "../../firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

const collectRef = collection(database, '1511');

const questions = await getDocs(query(collectRef, where('topic', '==', 'Arrays')));

questions.forEach((doc) => {
    console.log(doc.data());
});



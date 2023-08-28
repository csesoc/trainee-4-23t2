import fetch from 'node-fetch';
import { initializeApp } from "firebase/app";
import { getFirestore, setDoc, doc } from 'firebase/firestore';

const API_KEY = "AIzaSyA5QHpZxfp5SGmPF72i2pYTE_SoqdeTH4g";

const spreadsheetId = `13CjGA3e65ICI12IJlDXt8klXOoI4IlNE71cUS-YP8o8`;
const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/1511`;

async function readSheets() {
    const actualUrl = new URL(url);
    actualUrl.search = new URLSearchParams({
        key: API_KEY,
    }).toString();

    const response = await fetch(actualUrl);

    const result = await response.json();

    return result;
}

async function authenticateFireBase() {
    const firebaseConfig = {
        apiKey: "AIzaSyCfYOzVv-LT6bhGKA3zMnFtTljmOMFMjy8",
        authDomain: "trainee-4-23t2.firebaseapp.com",
        projectId: "trainee-4-23t2",
        storageBucket: "trainee-4-23t2.appspot.com",
        messagingSenderId: "350061830654",
        appId: "1:350061830654:web:c210659fb0525b7ffe20af"
    };
      
    const app = initializeApp(firebaseConfig);
    const database = getFirestore(app);

    return database;
}

async function writeToFireBase(sheetData) {
    for (let i = 1; i < sheetData.values.length; i++) {
        const row = sheetData.values[i];

        if (row.length < 9) {
            console.log("Invalid row of spreadsheet at row " + i); 
            break;
        }

        const db = await authenticateFireBase();
        const post = {
            question: row[2],
            correctAns: row[3],
            incorrectAns: JSON.parse(row[4]),
            explanation: row[5],
            questionType: row[6].split(','),
            difficulty: row[7],
            topics: row[8].split(',')
        };
    
        await setDoc(doc(db, '1511', row[1]), post);
    }
}

const sheetData = await readSheets();
await writeToFireBase(sheetData);

console.log("Done!");

process.exit(0);














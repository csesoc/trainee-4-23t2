import fetch from 'node-fetch';

const API_KEY = "AIzaSyA5QHpZxfp5SGmPF72i2pYTE_SoqdeTH4g";

const spreadsheetId = `13CjGA3e65ICI12IJlDXt8klXOoI4IlNE71cUS-YP8o8`;
const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/1511`;

async function readSheets() {

    const actualUrl = new URL(url);
    actualUrl.search = new URLSearchParams({
        key: API_KEY,
    }).toString();

    console.log(actualUrl.toString());

    const response = await fetch(actualUrl);

    const result = await response.json();

    console.log(result);
}

readSheets();









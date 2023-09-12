import { QuestionData } from './types';

interface DataStore {
    qData: QuestionData[];
}

let dataStore : DataStore = {
    qData: []
}

export function getDataStore() : DataStore {
    return dataStore;
}

export function setDataStore(qData: QuestionData[]) {
    dataStore.qData = qData;
}

export function clearDataStore() {
    dataStore.qData = [];
}
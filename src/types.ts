export enum QType {
    MCQ,
    SA,
    Code
}

export enum QDiff {
    Normal,
    Hard,
    Maddening
}

export enum QTopic {
    Variables,
    Conditionals,
    Arrays,
    Loops,
    Pointers,
    LinkedLists, 
    Structs,
    MultiFiles,
    Other,
}

export enum QuestionStatus {
    Unanswered,
    Correct,
    Incorrect
}

export type Question = {
    questionId: string,
    question: string,
    correctAns: string,
    incorrectAns: string[],
    explanation: string,
    questionType: QType[],
    difficulty: QDiff,
    topics: QTopic[],
}

// Hashmap with <key: questionId, value: Question>
export type Questions = {
    [questionId: string]: Question;
}

// Hashmap with <key: questionId, value: QuestionStatus>
export type UserAnswers = {
    [questionId: string]: QuestionStatus;
}

// For caching (stores user's answers and saved question ids)
export type UserInfo = {
    userAnswers: UserAnswers;
    savedQuestions: string[];
}

// For filter selection page, feel free to add fields
export type Filters = {
    topics: QTopic[],
    difficulty: QDiff,
}

// etc. (feel free to add more!)
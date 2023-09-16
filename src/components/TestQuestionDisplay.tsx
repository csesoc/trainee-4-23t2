import TagContainer from './TagContainer';
import DotContainer from './DotContainer';
import './css/Option.css';
import { QuestionData, UserStats } from '../types';
import { useState } from 'react';

interface TestQuestionDisplayProps {
  questionData: QuestionData;
  updateData: Function;
}

function updateStats(qData: QuestionData) {
  let userStats = localStorage.getItem('userStats');
  let userStatJSON : UserStats;

  if (userStats === null || userStats.length === 0) {
    let newUserStat : UserStats = {
      numNormal: 0,
      numHard: 0,
      numMaddening: 0,
      numArrayQ: 0,
      numPointerQ: 0,
      numOtherQ: 0
    };
    userStatJSON = newUserStat;
  } else {
    userStatJSON = JSON.parse(userStats);
  }

  switch (qData.difficulty) {
    case 1:
      userStatJSON.numNormal++;
      break;
    case 2:
      userStatJSON.numHard++;
      break;
    case 3:
      userStatJSON.numMaddening++;
      break;
    default:
      break;
  }

  for (const topic of qData.topics) {
    let lowerTopic = topic.toLowerCase();
    switch (lowerTopic) {
      case "arrays":
        userStatJSON.numArrayQ++;
        break;
      case "pointers":
        userStatJSON.numPointerQ++;
        break;
      default:
        userStatJSON.numOtherQ++;
        break;
    }
  }

  localStorage.setItem('userStats', JSON.stringify(userStatJSON));
}

function onOptionClick(option: number, optionValue: string, updateData: Function, qData: QuestionData) {
  updateData(option, optionValue);
  updateStats(qData);
}

function buttonGenerator(value: string, count: number, updateData: Function, qData: QuestionData) {
  let bg = (qData.chosenAnswer === count) ? "bg-theme-red" : "bg-[#EBC7E7]"

  let finalClassName = `option text-black ${bg} w-[30%] h-20 m-[1.70%] rounded-lg text-xl`;

  return <button className={finalClassName} key={`option${count}`} onClick={() => { onOptionClick(count, value, updateData, qData)}}>{value}</button>
}

export default function TestQuestionDisplay(props: TestQuestionDisplayProps) {
  let qData = props.questionData;
  const buttons : JSX.Element[] = [];
  let count = 0;
  qData.incorrectAns.forEach((iA) => {
    buttons.push(buttonGenerator(iA, count, props.updateData, qData));
    count++;
  });
  buttons.push(buttonGenerator(qData.correctAns, count, props.updateData, qData));

  return (
    <div id="question-options-container">
      <div id='question-display' className="bg-theme-black bg-opacity-80 rounded-3xl m-auto w-[800px] my-5 py-5">
        <div id="question-headers" className="flex flex-row space-between justify-evenly pt-6">
          <h1 className="text-[25px] -translate-x-[103px]">{qData.id}</h1>
          <TagContainer tagNames={qData.topics}/>
          <DotContainer difficulty={qData.difficulty}/>
        </div>
        <div id="question-content" className="pb-6 text-xl -translate-x-[15px]">
          {qData.question}
        </div>
      </div>
      <div id='options-display'>
        {buttons}
      </div>
    </div>
  );
}
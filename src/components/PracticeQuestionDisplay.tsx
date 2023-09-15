import TagContainer from './TagContainer';
import DotContainer from './DotContainer';
import './css/Option.css';
import { QuestionData, UserStats } from '../types';

interface PracticeQuestionDisplayProps {
  questionData: QuestionData;
  setAnswer: Function;
  updateData: Function;
}

// credit to stack overflow for this :)
function shuffleArray(array: JSX.Element[]) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
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

function onOptionClick(setAnswer: Function, updateData: Function, qData: QuestionData) {
  setAnswer(true);
  updateData();
  updateStats(qData);
}

function buttonGenerator(value: string, count: number, setAnswer: Function, updateData: Function, qData: QuestionData) {
  return <button className="option text-black bg-[#EBC7E7] w-[30%] h-20 m-[1.70%] rounded-lg text-xl" key={`option${count}`} onClick={() => { onOptionClick(setAnswer, updateData, qData)}}>{value}</button>
}

export default function PracticeQuestionDisplay(props: PracticeQuestionDisplayProps) {
  let qData = props.questionData;
  const buttons : JSX.Element[] = [];
  let count = 0;
  qData.incorrectAns.forEach((iA) => {
    buttons.push(buttonGenerator(iA, count, props.setAnswer, props.updateData, qData));
    count++;
  });
  buttons.push(buttonGenerator(qData.correctAns, count, props.setAnswer, props.updateData, qData));
  shuffleArray(buttons);

  return (
    <div id="question-options-container" className="translate-y-2/3">
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
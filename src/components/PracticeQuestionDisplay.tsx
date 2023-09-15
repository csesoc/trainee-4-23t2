import './css/PracticeQuestionDisplay.css'
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
  return <button className="option" key={`option${count}`} onClick={() => { onOptionClick(setAnswer, updateData, qData)}}>{value}</button>
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
    <div id="question-options-container">
      <div id='question-display' className='m-4 bg-theme-black px-4 py-2'>
        <div id="question-headers">
          <h1>{qData.id}</h1>
          <TagContainer tagNames={qData.topics}/>
          <DotContainer difficulty={qData.difficulty}/>
        </div>
        <div id="question-content">
          {qData.question}
        </div>
      </div>
      <div id='options-display'>
        {buttons}
      </div>
    </div>
  );
}
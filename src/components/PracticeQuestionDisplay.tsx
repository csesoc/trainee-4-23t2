import TagContainer from './TagContainer';
import DotContainer from './DotContainer';
import { QuestionData, UserStats } from '../types';

interface PracticeQuestionDisplayProps {
  questionData: QuestionData;
  setAnswer: Function;
  updateData: Function;
  setIsCorrect: Function
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

function onOptionClick(value: string, setAnswer: Function, updateData: Function, qData: QuestionData, setIsCorrect: Function) {
  if (value == qData.correctAns) {
    setIsCorrect(true)
  } else {
    setIsCorrect(false)
  }
  setAnswer(true);
  updateData();
  updateStats(qData);
}

function buttonGenerator(value: string, count: number, setAnswer: Function, updateData: Function, qData: QuestionData, setIsCorrect:Function) {
  return <button className="text-black bg-[#EBC7E7] rounded-lg text-xl p-2 h-24" key={`option${count}`} onClick={() => { onOptionClick(value, setAnswer, updateData, qData, setIsCorrect)}}>{value}</button>
}

export default function PracticeQuestionDisplay(props: PracticeQuestionDisplayProps) {
  let qData = props.questionData;
  const buttons : JSX.Element[] = [];
  let count = 0;
  qData.incorrectAns.forEach((iA) => {
    buttons.push(buttonGenerator(iA, count, props.setAnswer, props.updateData, qData, props.setIsCorrect));
    count++;
  });
  buttons.push(buttonGenerator(qData.correctAns, count, props.setAnswer, props.updateData, qData, props.setIsCorrect));
  shuffleArray(buttons);

  return (
    <div id="question-options-container" className="translate-y-1/2">
      <div id='question-display' className="bg-theme-black bg-opacity-80 rounded-3xl m-auto w-[800px] my-5 py-5">
        <div id="question-headers" className="flex flex-row space-between justify-evenly pt-6">
          <h1 className="text-[25px] -translate-x-[103px]">{qData.id}</h1>
          <TagContainer tagNames={qData.topics}/>
          <DotContainer difficulty={qData.difficulty}/>
        </div>
        <div id="question-content" className="pb-6 text-xl">
          {qData.question}
        </div>
      </div>
      <div className='grid grid-cols-2 grid-rows-2 gap-6 w-[800px] justify-center m-auto mt-10'>
        {buttons}
      </div>
    </div>
  );
}
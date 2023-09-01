import './css/PracticeQuestionDisplay.css'
import TagContainer from './TagContainer';
import DotContainer from './DotContainer';
import './css/Option.css';
import { QuestionData } from '../types';

interface PracticeQuestionDisplayProps {
  questionData: QuestionData;
  setAnswer: Function;
}

// credit to stack overflow for this :)
function shuffleArray(array: JSX.Element[]) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
}

function onOptionClick(setAnswer: Function) {
  localStorage.setItem('answered', 'true');
  setAnswer(true);
}

export default function PracticeQuestionDisplay(props: PracticeQuestionDisplayProps) {
  let qData = props.questionData;
  const buttons : JSX.Element[] = [];
  let count = 0;
  qData.incorrectAns.forEach((iA) => {
    buttons.push(<button className="option" key={`option${count}`} onClick={() => { onOptionClick(props.setAnswer)}}>{iA}</button>);
    count++;
  });
  buttons.push(<button className="option" key={`option${count}`} onClick={() => { onOptionClick(props.setAnswer)}}>{qData.correctAns}</button>);
  shuffleArray(buttons);

  return (
    <div id="question-options-container">
      <div id='question-display' className='m-4 bg-theme-black px-4 py-2'>
        <div id="question-headers">
          <h1>{qData.id}</h1>
          <TagContainer tagNames={qData.topics}/>
          <DotContainer difficulty={1}/>
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
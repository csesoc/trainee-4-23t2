import './css/PracticeQuestionDisplay.css'
import TagContainer from './TagContainer';
import DotContainer from './DotContainer';
import './css/Option.css'

export default function PracticeQuestionDisplay() {
  return (
    <div id="question-options-container">
      <div id='question-display' className='m-4 bg-theme-black px-4 py-2'>
        <div id="question-headers">
          <h1>1151_Q1</h1>
          <TagContainer tagNames={["Arrays", "LinkedLists", "Variables"]}/>
          <DotContainer difficulty={1}/>
        </div>
        <div id="question-content">
          which array gets outputted when you run this code blah blah 
        </div>
      </div>
      <div id='options-display'>
        <button className="option">Slay 1</button>
        <button className="option">Slay 2</button>
        <button className="option">Slay 3</button>
        <button className="option">Slay 4</button>
      </div>
    </div>
  );
}
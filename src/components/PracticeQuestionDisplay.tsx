import './css/PracticeQuestionDisplay.css'
import { GoDot } from 'react-icons/go'
import { GoDotFill } from 'react-icons/go';

export default function PracticeQuestionDisplay() {
  return (
    <>
      <div id="question-options-container">
        <div id='question-display' className='m-4 bg-theme-black px-4 py-2'>
          <div id="question-headers">
            <h1>1151_Q1</h1>
            <div id="tags-container">
              <div>Arrays</div>
              <div>Linked List</div>
            </div>
            <div id="dot-container">
              <GoDotFill className="dot"/>
              <GoDotFill className='dot'/>
              <GoDot className='dot'/>
            </div>
          </div>
          <div id="question-content"></div>
        </div>
        <div id='options-display'>
        </div>
      </div>
    </>
  );
}
import './PracticePage.css';
import '../../components/css/PracticeQuestionAnswer.css'
import '../../components/PracticeQuestionAnswer'
import { ExitPage } from "../../components/ExitButton";
import PracticeQuestion from '../../components/PracticeQuestionAnswer';
import { MdOutlineBookmark } from 'react-icons/md'

export function PracticePage() {
  return (
    <>
      <ExitPage/>
      <div id='question-answer-container' style={{display:'flex', width: '80%', height: '85vh', boxSizing: 'border-box', border: "1px solid red", flexWrap: "wrap", margin: 'auto'}}>
        <PracticeQuestion/>
        <div id="button-container">
          <button id="save-question" className="next-save"> <MdOutlineBookmark style={{display: "inline-block"}}/> save question </button>
          <button id="next-question" className="next-save"> next question </button>
        </div>

      </div>
    </>
  )
}
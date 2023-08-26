import './PracticePage.css';
import '../../components/css/PracticeQuestionAnswer.css'
import '../../components/PracticeQuestionAnswer'
import { ExitPage } from "../../components/ExitButton";
import PracticeQuestion from '../../components/PracticeQuestionAnswer';
import { MdOutlineBookmark } from 'react-icons/md'
import NextSave from '../../components/NextSave';

export function PracticePage() {
  return (
    <>
      <ExitPage/>
      <div id='question-answer-next-save-container'>
        <PracticeQuestion/>
        <NextSave/>
      </div>
    </>
  )
}
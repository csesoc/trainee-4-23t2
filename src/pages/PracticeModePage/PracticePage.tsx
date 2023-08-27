import './PracticePage.css';
import '../../components/css/PracticeQuestionAnswer.css'
import '../../components/PracticeQuestionAnswer'
import { ExitPage } from "../../components/ExitButton";
import PracticeQuestion from '../../components/PracticeQuestionAnswer';
import NextSave from '../../components/NextSave';
import PracticeQuestionDisplay from '../../components/PracticeQuestionDisplay';

export function PracticePage() {
  return (
    <>
      <ExitPage/>
      <PracticeQuestionDisplay/>
    </>
  )
}
import './PracticePage.css';
import '../../components/PracticeQuestion'
import { ExitPage } from "../../components/ExitButton";
import PracticeQuestion from '../../components/PracticeQuestion';

export function PracticePage() {
  return (
    <>
      <ExitPage/>
      <div style={{display:'flex', justifyContent: 'center', alignItems: 'center', height: '80vh'}}>
        <PracticeQuestion/>
      </div>
    </>
  )
}
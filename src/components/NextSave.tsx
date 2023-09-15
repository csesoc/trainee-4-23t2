import { MdOutlineBookmark } from 'react-icons/md'
import '../components/css/NextSave.css'

interface NextSaveProps {
  setQCount: Function;
  dataLength: number;
}

function onButtonClick(setQCount: Function, dataLength: number) {
  let current : number = parseInt(localStorage.getItem('qCount') as string);
  current++;

  if (current > dataLength - 1) {
    current = 0;

  } else if (current < 0) {
    current = dataLength - 1;
  }

  setQCount(current);
  localStorage.setItem('qCount', current.toString());
  window.location.reload();

}

export default function NextSave(props: NextSaveProps) {
    return (
      <div id="button-container">
        <button id="save-question" className="next-save"> <MdOutlineBookmark style={{display: "inline-block"}}/> save question </button>
        <button id="next-question" className="next-save" onClick={() => onButtonClick(props.setQCount, props.dataLength)}> next question </button>
      </div>
    );
}
import { MdOutlineBookmark } from 'react-icons/md'
import '../components/css/NextSave.css'

export default function NextSave() {
    return (
      <div id="button-container">
        <button id="save-question" className="next-save"> <MdOutlineBookmark style={{display: "inline-block"}}/> save question </button>
        <button id="next-question" className="next-save"> next question </button>
      </div>
    );
}
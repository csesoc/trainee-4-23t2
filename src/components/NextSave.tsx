import { MdOutlineBookmark } from 'react-icons/md'
import '../components/css/NextSave.css'
import NextQ from './NextQ';

interface NextSaveProps {
  setQCount: Function;
  dataLength: number;
}

export default function NextSave(props: NextSaveProps) {
    return (
      <div id="button-container">
        <button id="save-question" className="next-save"> <MdOutlineBookmark style={{display: "inline-block"}}/> save question </button>
        <NextQ setQCount={props.setQCount} dataLength={props.dataLength}/>
      </div>
    );
}
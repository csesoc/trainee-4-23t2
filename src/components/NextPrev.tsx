import NextQ from "./NextQ";
import PrevQ from "./PreviousQ";

interface NextPrevProps {
    setQCount: Function;
    dataLength: number;
  }

export default function NextPrev(props: NextPrevProps) {
    return (
      <div id="button-container">
        <PrevQ setQCount={props.setQCount} dataLength={props.dataLength}/>
        <NextQ setQCount={props.setQCount} dataLength={props.dataLength}/>
      </div>
    );
}
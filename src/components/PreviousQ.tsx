interface PreviousQProps {
    setQCount: Function;
    dataLength: number;
}

function onButtonClick(setQCount: Function, dataLength: number) {
    let current : number = parseInt(localStorage.getItem('qCount') as string);
    current--;
  
    if (current > dataLength - 1) {
      current = 0;
  
    } else if (current < 0) {
      current = dataLength - 1;
    }
  
    setQCount(current);
    localStorage.setItem('qCount', current.toString());
    window.location.reload();
}

export default function PrevQ(props: PreviousQProps) {
    return (
        <button id="save-question" className="next-save" onClick={() => onButtonClick(props.setQCount, props.dataLength)}> prev question </button>
    )
}
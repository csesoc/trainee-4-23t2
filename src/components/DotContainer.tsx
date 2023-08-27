import { GoDotFill, GoDot } from "react-icons/go";

interface DotContainerProps {
  difficulty: number;
}

export default function DotContainer(props: DotContainerProps) {
  let dots = [];

  for (let i = 1; i <= 3; i++) {
    if (i <= props.difficulty) {
      dots.push(<GoDotFill className='dot'/>);
    } else {
      dots.push(<GoDot className='dot'/>);
    }
  }

  return (
    <div id="dot-container" style={{fontSize: "20px", color: "#E87195"}}>
      {dots}
    </div>
  );

}
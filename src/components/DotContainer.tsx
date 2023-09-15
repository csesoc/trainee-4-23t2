import { GoDotFill, GoDot } from "react-icons/go";

interface DotContainerProps {
  difficulty: number;
}

export default function DotContainer(props: DotContainerProps) {
  let dots = [];

  for (let i = 1; i <= 3; i++) {
    if (i <= props.difficulty) {
      dots.push(<GoDotFill className='dot' key={`dot${i}`} />);
    } else {
      dots.push(<GoDot className='dot' key={`dot${i}`} />);
    }
  }

  return (
    <div id="dot-container" style={{fontSize: "20px", color: "#E87195", transform: "rotate(-90deg)", marginTop: "-10px"}}>
      {dots}
    </div>
  );

}
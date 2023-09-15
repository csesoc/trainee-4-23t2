import TagContainer from './TagContainer';
import DotContainer from './DotContainer';

export default function PracticeQuestionDisplay() {
  return (
    <div id="question-options-container" className="translate-y-1/3">
      <div id='question-display' className="bg-theme-black bg-opacity-80 rounded-3xl m-auto w-[800px] my-5 py-5">
        <div id="question-headers" className="flex flex-row space-between justify-evenly pt-6">
          <h1 className="text-[25px] -translate-x-[65px]">1511_Q1</h1>
          <TagContainer tagNames={["Arrays", "LinkedLists", "Variables"]}/>
          <DotContainer difficulty={1}/>
        </div>
        <div id="question-content" className="pb-6 text-xl -translate-x-[84px]">
          which array gets outputted when you run this code blah blah 
        </div>
      </div>
      <div id='options-display' className="">
        <button className="text-black bg-[#EBC7E7] w-[30%] h-20 m-[1.70%] rounded-lg text-xl">Slay 1</button>
        <button className="text-black bg-[#EBC7E7] w-[30%] h-20 m-[1.70%] rounded-lg text-xl">Slay 2</button>
        <button className="text-black bg-[#EBC7E7] w-[30%] h-20 m-[1.70%] rounded-lg text-xl">Slay 3</button>
        <button className="text-black bg-[#EBC7E7] w-[30%] h-20 m-[1.70%] rounded-lg text-xl">Slay 4</button>
      </div>
      <div className="flex text-xl underline underline-offset-8">
        <div className="flex-1">
          save question
        </div>
        <div className="flex-1">
          next question
        </div>
      </div>
    </div>
  );
}
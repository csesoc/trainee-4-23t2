import PropTypes from 'prop-types';

type Props = {
  questionInfo: {
    id: string,
    question: string,
    explanation: string,
  }
}

function ExampleWithProp({questionInfo}: Props) {
  return (
    <div className="flex-row bg-sky-950 w-100 rounded-xl m-4 p-2 hover:outline outline-offset-2 outline-blue-500">
      <div className="flex flex-row divide-x divide-pink-500">
        <div className="w-1/6 mr-2">
          <p className="text-pink-500 font-bold">{questionInfo.id}</p>
        </div>
        <div className="flex-col w-5/6">
          <p className="font-bold">{questionInfo.question}</p>
          <br/>
          <p>{questionInfo.explanation}</p>
        </div>
      </div>
    </div>
  );
} 

ExampleWithProp.propTypes = {
  questionInfo: PropTypes.object
}


export default ExampleWithProp;
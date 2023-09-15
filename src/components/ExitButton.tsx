import { useNavigate } from "react-router-dom";
import { IoCaretBack } from 'react-icons/io5';

function clearQData() {
    localStorage.removeItem('qData');
    localStorage.removeItem('answered');
    localStorage.removeItem('qCount');
}

export function ExitPage() {
    const navigate = useNavigate();
    return (
        <button onClick={() => { clearQData(); navigate('/');}} className="top-left" style={{position:"absolute", top:"5%", left:"2.5%", fontSize:"30px"}}> <IoCaretBack style={{display: "inline-block"}}/>Exit</button>
    );
}
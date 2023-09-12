import { useNavigate } from "react-router-dom";
import { IoCaretBack } from 'react-icons/io5';

export function ExitPage() {
    const navigate = useNavigate();
    return (
        <button onClick={() => { localStorage.clear(); navigate('/');}} className="top-left" style={{position:"absolute", top:"5%", left:"2.5%", fontSize:"30px"}}> <IoCaretBack style={{display: "inline-block"}}/>Exit</button>
    );
}
import { useNavigate } from "react-router-dom";
import { IoCaretBack } from 'react-icons/io5';

export function ExitPage() {
    const navigate = useNavigate();
    return (
        <button onClick={() => navigate('/')} className="top-left" style={{position:"absolute", top:"5%", left:"2.5%", fontSize:"30px"}}> <IoCaretBack style={{display: "inline-block", translate: "0px -4px"}}/>Exit</button>
    );
}
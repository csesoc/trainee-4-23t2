import { useNavigate } from "react-router-dom"
export function LandingPage() {
    const navigate = useNavigate();

    return (
        <div>
            <h1 className="text-5xl uppercase">
                OllieBot
            </h1>
            <button onClick={() => navigate("/example")} className='m-4'> owo whats this </button>
        </div>
    )
 }
import { useNavigate } from "react-router-dom"

export function NewLandingPage() {
    const navigate = useNavigate();

    return (
        <div>
            {/* header */}
            <div className="flex-col justify-center" >
                <h1 className="text-3xl font-semibold mb-2">&lt; Olliebot &gt;</h1>

                <h2 className="text-xl font-normal">🦦your best programming companion🦦</h2>
            </div>
            {/* boxes */}

            <div className="flex justify-center h-screen">
                <button onClick={() => navigate("/practice")}className="h-3/6 w-2/6 bg-theme-black m-20 rounded-lg hover:bg-theme-red">Practice Mode</button>

                <button className="h-3/6 w-2/6 bg-theme-black m-20 rounded-lg hover:bg-theme-red">Test Mode</button>

            </div>
        </div>
    )
 }
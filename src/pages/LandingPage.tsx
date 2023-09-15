import React, {useState, createContext, useContext} from "react";
import { useNavigate } from "react-router-dom"
import { TopicSelection } from "./TopicSelection";



export const modeContext = createContext("practice");


export function NewLandingPage() {
    const navigate = useNavigate();
   
    
    const handleClick = () => {
        
        navigate("/topic_selection");

    }

    return (
        
        <div>
            {/* header */}
            <div className="flex-col justify-center" >
                <h1 className="text-3xl font-semibold mb-2">&lt; Olliebot &gt;</h1>

                <h2 className="text-xl font-normal text-theme-pink">🦦your best programming companion🦦</h2>
            </div>
            {/* boxes */}



            <div className="flex flex-col justify-center h-screen md:flex-row">

                <modeContext.Provider value="practice">
                    <button onClick={() =>handleClick()}
                    className="h-3/6 w-4/6 bg-theme-black m-20 rounded-lg text-xl text-theme-pink font-semibold md:w-2/6 hover:bg-theme-red">
                        <h1>Practice Mode</h1>
                    </button>

                </modeContext.Provider>
                
                <modeContext.Provider value="test">

                    <button onClick={() => handleClick()}
                    className="h-3/6 w-4/6 bg-theme-black m-20 rounded-lg text-xl text-theme-pink font-semibold md:w-2/6 hover:bg-theme-red">
                        <h1>Test Mode</h1>
                    </button>
                </modeContext.Provider>
                
                
            </div>
           
        </div>
    )
 }
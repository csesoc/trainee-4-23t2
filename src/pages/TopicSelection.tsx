import { useLocation, useNavigate } from "react-router-dom"
import { Grid } from "@mui/material"
import React, {useState} from 'react'

//Imported icons
import {BiLink} from "react-icons/bi"
import { MdDataArray } from "react-icons/md"
import {BsThreeDots} from "react-icons/bs"
import {TbFishBone} from "react-icons/tb"
import {BiSolidRightArrow} from "react-icons/bi"


export function TopicSelection() {
    

    const navigate = useNavigate();
    let location = useLocation();

    const mode = location.state;

    const [topics, setTopics] = useState<String[]>([]);
    const [difficulty, setDifficulty] = useState<number>(0);

    const addTopic = (newTopic : string) => {
        console.log(newTopic);
        
        let copy = [...topics];

        if (topics.includes(newTopic)) {
            copy = topics.filter(x => x != newTopic)
        } else {
            copy.push(newTopic);
        }

        setTopics(copy);

        console.log(copy)

       
    }

   
    const changeDiff = (diff:number) => {
        console.log("hi"+difficulty)
        setDifficulty(diff);
        
        console.log(difficulty)
    }
    

    return (
        <div>
            {/* topic selection */}
            <div className="flex-col justify-center">
                <h1 className="text-3xl font-semibold mb-2"> &lt;choose your topic!&gt;</h1>
                <h2 className="text-xl font-normal mb-2 text-theme-pink">linked lists, arrays and more</h2>
            </div>
            <Grid container spacing={2}
                justifyContent="center"
                alignItems="center">
                <Grid item xs={8} md={4}>
                    <button 
                    onClick={() => addTopic("linked_lists")}
                    className="border-4 border-red w-40 h-40 bg-theme-blue rounded-xl text-xl font-semibold text-theme-pink active:bg-theme-black">
                        <BiLink style={{fontSize:'100px', margin:'auto'}}/>
                        <h1>Linked Lists</h1>
                    </button>
                </Grid>
                <Grid item xs={8} md={4}>
                    <button 
                    onClick={() => addTopic("arrays")}
                    className="border-4 border-red w-40 h-40 bg-theme-blue rounded-xl text-xl font-semibold text-theme-pink active:bg-theme-black">
                        <MdDataArray style={{fontSize:"100px", margin:"auto"}}/>
                        <h1>Arrays</h1>
                    </button>
                </Grid>

                <Grid item xs={8} md={4}>
                    <button 
                    onClick={() => addTopic("others")}
                    className="border-4 border-red w-40 h-40 bg-theme-blue rounded-xl text-xl font-semibold text-theme-pink active:bg-theme-black">
                        <BsThreeDots style={{fontSize:"100px", margin:"auto"}}/>
                        <h1>Others</h1>
                    </button>
                </Grid>
            </Grid>


            {/* difficulty selection */}
            <div className="flex-col justify-center mt-10">
                <h1 className="text-3xl font-semibold mb-2"> &lt;choose your difficulty level!&gt;</h1>
                <h2 className="text-xl font-normal mb-2 text-theme-pink">the more fish there are, the harder they will be</h2>
                
            </div>
            <Grid container spacing={2}
                justifyContent="center"
                alignItems="center">
                <Grid item xs={8} md={4}>
                    <button 
                    onClick={() => changeDiff(1)}
                    className="border-4 border-red w-40 h-40 bg-theme-blue rounded-xl text-xl font-semibold text-theme-pink active:bg-theme-black">
                        <TbFishBone style={{fontSize:'100px', margin:'auto'}}/>
                        
                    </button>
                </Grid>
                <Grid item xs={8} md={4}>
                    <button 
                    onClick={() => changeDiff(2)}
                    className="border-4 border-red w-40 h-40 bg-theme-blue rounded-xl text-3xl font-semibold text-theme-pink active:bg-theme-black">
                        <TbFishBone style={{fontSize:'70px', margin:'auto'}}/>
                        <TbFishBone style={{fontSize:'70px', margin:'auto'}}/>
                    </button>
                </Grid>

                <Grid item xs={8} md={4}>
                    <button 
                    onClick={() => changeDiff(3)}
                    className="border-4 border-red w-40 h-40 bg-theme-blue rounded-xl text-xl font-semibold text-theme-pink active:bg-theme-black">
                        <TbFishBone style={{fontSize:'50px', margin:'auto'}}/>
                        <TbFishBone style={{fontSize:'50px', margin:'auto'}}/>
                        <TbFishBone style={{fontSize:'50px', margin:'auto'}}/>
                    </button>
                </Grid>
            </Grid>

            {/* next page */}

            <div className="flex justify-end">
                <button className="w-32 h-32 rounded-full bg-theme-pink text-3xl font-semibold text-theme-blue md:absolute right-10 bottom-10">
                    <BiSolidRightArrow style={{fontSize:'60px', margin:'auto'}}/>
                </button>

            </div>
        </div>
    )
}
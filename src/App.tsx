import { Route, Routes } from "react-router-dom"
import { ExamplePage } from "./pages/ExamplePage/ExamplePage"
import UserStatPage from "./pages/UserStatPage"
import { NewLandingPage } from "./pages/LandingPage"
import { PracticePage } from "./pages/PracticeModePage/PracticePage"
import { TopicSelection } from "./pages/TopicSelection"

export function App() {
    return (
        <Routes>
            <Route path="/" element={<NewLandingPage/>}/>
            <Route path="/example" element={<ExamplePage/>}/>
<<<<<<< HEAD
            <Route path="/your_stats" element={<UserStatPage/>}/>
            <Route path="/practice" element={<PracticePage/>}></Route>
=======
            <Route path="/practice" element={<PracticePage topic=""/>}></Route>
            <Route path="/topic_selection" element={<TopicSelection/>}></Route>
>>>>>>> origin/main
        </Routes>
    )
}
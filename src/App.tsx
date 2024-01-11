import { Route, Routes } from "react-router-dom"
import { ExamplePage } from "./pages/ExamplePage/ExamplePage"
import UserStatPage from "./pages/UserStatPage"
import { NewLandingPage } from "./pages/LandingPage"
import { PracticePage } from "./pages/PracticeModePage/PracticePage"
import { TopicSelection } from "./pages/TopicSelection"
import { TestPage } from "./pages/TestModePage/TestPage"

export function App() {
    return (
        <Routes>
            <Route path="/" element={<NewLandingPage/>}/>
            <Route path="/example" element={<ExamplePage/>}/>
            <Route path="/your_stats" element={<UserStatPage/>}/>
            <Route path="/practice" element={<PracticePage/>}></Route>
            <Route path="/topic_selection" element={<TopicSelection/>}></Route>
            <Route path="/test" element={<TestPage/>}></Route>
        </Routes>
    )
}
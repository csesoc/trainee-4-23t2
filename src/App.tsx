import { Route, Routes } from "react-router-dom"
import { ExamplePage } from "./pages/ExamplePage/ExamplePage"
import { LandingPage } from "./pages/LandingPage"
import { PracticePage } from "./pages/PracticeModePage/PracticePage"

export function App() {
    return (
        <Routes>
            <Route path="/" element={<LandingPage/>}/>
            <Route path="/example" element={<ExamplePage/>}/>
            <Route path="/practice" element={<PracticePage/>}></Route>
        </Routes>
    )
}
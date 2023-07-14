import { Route, Routes } from "react-router-dom"
import { ExamplePage } from "./pages/ExamplePage/ExamplePage"
import { LandingPage } from "./pages/LandingPage"

export function App() {
    return (
        <Routes>
            <Route path="/" element={<LandingPage/>}/>
            <Route path="/example" element={<ExamplePage/>}/>
        </Routes>
    )
}
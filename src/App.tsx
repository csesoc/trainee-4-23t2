import { Route, Routes } from "react-router-dom"
import { ExamplePage } from "./pages/ExamplePage/ExamplePage"
import { LandingPage } from "./pages/LandingPage"
import { UserStatPage } from "./pages/UserStatPage"

export function App() {
    return (
        <Routes>
            <Route path="/" element={<LandingPage/>}/>
            <Route path="/example" element={<ExamplePage/>}/>
            <Route path="/your_stats" element={<UserStatPage/>}/>
        </Routes>
    )
}
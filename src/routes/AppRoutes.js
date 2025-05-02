import { Routes, Route } from "react-router-dom";
import Home from "../screens/Home";
import About from "../screens/About";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
        </Routes>
    );
}

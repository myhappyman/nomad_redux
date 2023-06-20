import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/:id" element={<Detail />}></Route>
                <Route path="/" element={<Home />}></Route>
            </Routes>
        </Router>
    );
}

export default App;

import './App.css';
import {useEffect} from "react";
import {connectToSocket} from "./utils/wss/Collection";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";
import Login from "./Components/Login/Login";

function App() {
    useEffect(() => {
        connectToSocket();
    }, [])

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login/>}/>
                <Route path='/dashboard' element={<Dashboard/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;

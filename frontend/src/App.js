import './App.css';
import {useEffect} from "react";
import {connectToSocket} from "./utils/wss/Collection";


function App() {
    useEffect(() => {
        connectToSocket();
    }, [])

    return (
        <div className="App">
            hello world!
        </div>
    );
}

export default App;

import React, {useState} from 'react';
import logo from '../../assets/logo.png'
import Input from "./Input";
import {useNavigate} from "react-router-dom";
import Button from "./Button";
import './Login.css';
import {setUsername} from "../../store/actions/dashboardActions";
import {connect} from "react-redux";
import {registerNewUser} from "../../utils/wss/Connection";

const Login = ({saveUserName}) => {
    const [username, setUsername] = useState('');
    const navigate = useNavigate();

    const handleSubmit = () => {
        if (!username) {
            alert("Enter your name first 😒 !")
            return;
        }
        saveUserName(username);
        registerNewUser(username);
        navigate('/dashboard');
    }

    return (
        <div className="container">
            <div className="box">
                <div className="logo">
                    <img src={logo} alt="takingHouse"/>
                </div>
                <div className="title-container">
                    <h2>Your friends are waiting 👀</h2>
                </div>
                <Input username={username} setUsername={setUsername}/>
                <Button handleSubmit={handleSubmit}/>
            </div>
        </div>
    );
};

const mapActionToProps = (dispatch) => {
    return {
        saveUserName: username => dispatch(setUsername(username))
    }
}

export default connect(null, mapActionToProps)(Login);
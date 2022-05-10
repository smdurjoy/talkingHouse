import React, {useEffect, useState} from 'react';
import logo from '../../assets/logo.png'
import ActiveUsersList from "../ActiveUsers/ActiveUsersList";
import * as webRTCHandler from '../../utils/webRTC/webRTCHandler'
import DirectCall from "../DirectCall/DirectCall";

const Dashboard = () => {
    const [clockText, setClockText] = useState('');

    useEffect(() => {
        webRTCHandler.getLocalStream();
    }, [])

    const showTime = () => {
        let date = new Date();
        let h = date.getHours();
        let m = date.getMinutes();
        let s = date.getSeconds();
        let session = "AM";

        if (h === 0) {
            h = 12;
        }
        if (h > 12) {
            h = h - 12;
            session = "PM";
        }
        h = (h < 10) ? "0" + h : h;
        m = (m < 10) ? "0" + m : m;
        s = (s < 10) ? "0" + s : s;

        let time = h + ":" + m + ":" + s + " " + session;
        setClockText(time);
        setTimeout(showTime, 1000);
    }

    return (
        <div className='dashboard'>
            <div className='dashboard__left__content'>
                <div className='dashboard__left__content__logo'>
                    <img src={logo} alt='talkingHouse'/>
                </div>
                <div className='dashboard__left__content__clock'>
                    {/*<span>{clockText}</span>*/}
                </div>
                <ActiveUsersList/>
            </div>
            <div className='dashboard__main__content'>
                <div className='dashboard__main__content__sections'>
                    <div className='dashboard__main__content__sections__top'>
                        <DirectCall/>
                    </div>
                    <div className='dashboard__main__content__sections__bottom'>
                        from bottom
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
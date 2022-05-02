import React from 'react';
import ActiveUsersListItem from "./ActiveUsersListItem";
import './ActiveUsers.css';
import {connect} from "react-redux";

const ActiveUsersList = ({activeUsers}) => {
    return (
        <div className='active__users__list'>
            {activeUsers.map(user => {
                return <ActiveUsersListItem key={user.socketId} user={user}/>
            })}
        </div>
    );
};

const mapActionToProps = ({dashboard}) => ({
    ...dashboard
})

export default connect(mapActionToProps)(ActiveUsersList);
import React from 'react';
import ActiveUsersListItem from "./ActiveUsersListItem";
import './ActiveUsers.css';

const ActiveUsersList = () => {
    const activeUsers = [
        {
            socketId: 1234,
            username: 'Saqlain'
        },
        {
            socketId: 1222,
            username: 'Mustaq'
        },
        {
            socketId: 1233,
            username: 'Durjoy'
        },
    ]
    return (
        <div className='active__users__list'>
            {activeUsers.map(user => {
                return <ActiveUsersListItem key={user.socketId} user={user}/>
            })}
        </div>
    );
};

export default ActiveUsersList;
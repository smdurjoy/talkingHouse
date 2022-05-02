import React from 'react';
import defaultUserImg from '../../assets/default_user.jpg'

const ActiveUsersListItem = ({user}) => {
    const handleCall = () => {
        // TODO
    }
    return (
        <div className='active__users__list__item' onClick={handleCall}>
            <div className='active__users__list__item__image'>
                <img src={defaultUserImg} alt='user'/>
            </div>
            <div className='active__users__list__item__name'>
                <span>{user.username}</span>
            </div>
        </div>
    );
};

export default ActiveUsersListItem;
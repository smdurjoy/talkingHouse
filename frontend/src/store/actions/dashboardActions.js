export const DASHBOARD_SET_USERNAME = 'DASHBOARD_SET_USERNAME';
export const SET_ACTIVE_USERS = 'SET_ACTIVE_USERS';

export const setUsername = (username) => {
    return {
        type: DASHBOARD_SET_USERNAME,
        username
    }
}

export const setActiveUsers = (activeUsers) => {
    return {
        type: SET_ACTIVE_USERS,
        activeUsers
    }
}
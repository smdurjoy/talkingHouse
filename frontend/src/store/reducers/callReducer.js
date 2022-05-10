import * as callActions from '../actions/callActions';

const initState = {
    localStream: null,
    callState: callActions.callStates.CALL_UNAVAILABLE,
    callModalVisible: false,
    callerUsername: ''
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case callActions.CALL_SET_LOCAL_STREAM:
            return {
                ...state,
                localStream: action.localStream
            }
        case callActions.CALL_SET_CALL_STATE:
            return {
                ...state,
                callState: action.callState
            }
        case callActions.CALL_SET_CALLING_MODAL_VISIBLE:
            return {
                ...state,
                callModalVisible: action.visible
            }
        case callActions.CALL_SET_CALLER_USERNAME:
            return {
                ...state,
                callerUsername: action.username
            }
        default:
            return state;
    }
}

export default reducer;
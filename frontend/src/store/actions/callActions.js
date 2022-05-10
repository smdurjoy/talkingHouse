export const callStates = {
    CALL_AVAILABLE: 'CALL_AVAILABLE',
    CALL_UNAVAILABLE: 'CALL_UNAVAILABLE',
    CALL_REQUESTED: 'CALL_REQUESTED',
    CALL_IN_PROGRESS: 'CALL_IN_PROGRESS',
}

export const CALL_SET_LOCAL_STREAM = 'CALL.SET_LOCAL_STREAM';
export const CALL_SET_CALL_STATE = 'CALL.SET_CALL_STATE';
export const CALL_SET_CALLING_MODAL_VISIBLE = 'CALL.SET_CALLING_MODAL_VISIBLE';
export const CALL_SET_CALLER_USERNAME = 'CALL.SET_CALLER_USERNAME';

export const setLocalStream = (localStream) => {
    return {
        type: CALL_SET_LOCAL_STREAM,
        localStream
    }
}
export const setCallState = (callState) => {
    return {
        type: CALL_SET_CALL_STATE,
        callState
    }
}
export const setCallingModalVisible = (visible) => {
    return {
        type: CALL_SET_CALLING_MODAL_VISIBLE,
        visible
    }
}
export const setCallerUsername = (username) => {
    return {
        type: CALL_SET_CALLER_USERNAME,
        username
    }
}
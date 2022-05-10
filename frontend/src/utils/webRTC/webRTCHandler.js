import store from "../../store/store";
import {
    callStates,
    setCallerUsername,
    setCallingModalVisible,
    setCallState,
    setLocalStream
} from "../../store/actions/callActions";
import * as wss from '../wss/Connection';

const defaultConstrains = {
    audio: true,
    video: true
}

export const getLocalStream = () => {
    navigator.mediaDevices.getUserMedia(defaultConstrains)
        .then(stream => {
            store.dispatch(setLocalStream(stream));
            store.dispatch(setCallState(callStates.CALL_AVAILABLE));
        })
        .catch(error => {
            console.log(error);
        })
}

let connectedUserSocketId;

export const callToOtherUser = (calleeDetails) => {
    connectedUserSocketId = calleeDetails.socketId;
    store.dispatch(setCallState(callStates.CALL_IN_PROGRESS));
    store.dispatch(setCallingModalVisible(true));
    wss.sendPreOffer({
        callee: calleeDetails,
        caller: {
            username: store.getState().dashboard.username,
        }
    })
}

export const handlePreOffer = (data) => {
    connectedUserSocketId = data.callerSocketId;
    store.dispatch(setCallerUsername(data.callerUsername));
    store.dispatch(setCallState(callStates.CALL_REQUESTED));
}
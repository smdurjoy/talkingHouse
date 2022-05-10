import store from "../../store/store";
import {callStates, setCallState, setLocalStream} from "../../store/actions/callActions";

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
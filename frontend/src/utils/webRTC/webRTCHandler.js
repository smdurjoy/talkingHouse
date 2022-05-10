import store from "../../store/store";
import {setLocalStream} from "../../store/actions/callActions";

const defaultConstrains = {
    audio: true,
    video: true
}

export const getLocalStream = () => {
    navigator.mediaDevices.getUserMedia(defaultConstrains)
        .then(stream => {
            store.dispatch(setLocalStream(stream))
        })
        .catch(error => {
            console.log(error);
        })
}
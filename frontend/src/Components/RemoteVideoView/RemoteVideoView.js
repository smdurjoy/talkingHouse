import React, {useEffect, useRef} from 'react';

const RemoteVideoView = ({remoteStream}) => {
    const remoteVideoRef = useRef();

    useEffect(() => {
        if (remoteStream) {
            const remoteVideo = remoteVideoRef.current;
            remoteVideo.srcObject = remoteStream

            remoteVideo.onloadedmetadata = () => {
                remoteVideo.play();
            }
        }
    }, [remoteStream])

    return (
        <div style={styles.videoContainer}>
            <video style={styles.videoElement} ref={remoteVideoRef} autoPlay muted></video>
        </div>
    );
};

const styles = {
    videoContainer: {
        width: '150px',
        height: '150px',
        borderRadius: '5px',
        top: '5%',
        right: '5%',
        position: 'absolute'
    },
    videoElement: {
        height: '100%',
        width: '100%',
    }
}

export default RemoteVideoView;
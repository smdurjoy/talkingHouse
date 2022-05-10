import React, {useEffect, useRef} from 'react';

const LocalVideoView = ({localStream}) => {
    const localVideoRef = useRef();

    useEffect(() => {
        if (localStream) {
            const localVideo = localVideoRef.current;
            localVideo.srcObject = localStream

            localVideo.onloadedmetadata = () => {
                localVideo.play();
            }
        }
    }, [localStream])

    return (
        <div style={styles.videoContainer}>
            <video style={styles.videoElement} ref={localVideoRef} autoPlay muted></video>
        </div>
    );
};

const styles = {
    videoContainer: {
        width: '170px',
        height: '170px',
        border: '1px solid black',
        borderRadius: '5px',
        top: '5%',
        right: '5%',
        position: 'absolute',
        backgroundColor: '#02183a'
    },
    videoElement: {
        height: '100%',
        width: '100%',
    }
}

export default LocalVideoView;
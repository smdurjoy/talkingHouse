import React from 'react';
import {connect} from "react-redux";
import LocalVideoView from "../LocalVideoView/LocalVideoView";
import RemoteVideoView from "../RemoteVideoView/RemoteVideoView";
import CallingModal from "../CallingModal/CallingModal";
import CallRejectModal from "../CallRejectModal/CallRejectModal";
import IncomingCallModal from "../IncomingCallModal/IncomingCallModal";

const DirectCall = ({localStream, remoteStream}) => {
    return (
        <>
            <LocalVideoView localStream={localStream}/>
            {remoteStream && <RemoteVideoView remoteStream={remoteStream}/>}
            {/*<CallingModal/>*/}
            {/*<CallRejectModal/>*/}
            {/*<IncomingCallModal/>*/}
        </>
    );
};

function mapStoreStateToProps({call}) {
    return {
        ...call
    }
}

export default connect(mapStoreStateToProps, null)(DirectCall);
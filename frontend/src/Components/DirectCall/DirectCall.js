import React from 'react';
import {connect} from "react-redux";
import LocalVideoView from "../LocalVideoView/LocalVideoView";
import RemoteVideoView from "../RemoteVideoView/RemoteVideoView";
import CallingModal from "../CallingModal/CallingModal";
import CallRejectModal from "../CallRejectModal/CallRejectModal";
import IncomingCallModal from "../IncomingCallModal/IncomingCallModal";
import {callStates} from "../../store/actions/callActions";

const DirectCall = ({localStream, remoteStream, callState, callerUsername, callModalVisible}) => {
    return (
        <>
            <LocalVideoView localStream={localStream}/>
            {remoteStream && <RemoteVideoView remoteStream={remoteStream}/>}
            {callModalVisible && <CallingModal/>}
            {/*<CallRejectModal/>*/}
            {callState === callStates.CALL_REQUESTED && <IncomingCallModal callerUsername={callerUsername}/>}
        </>
    );
};

function mapStoreStateToProps({call}) {
    return {
        ...call
    }
}

export default connect(mapStoreStateToProps, null)(DirectCall);
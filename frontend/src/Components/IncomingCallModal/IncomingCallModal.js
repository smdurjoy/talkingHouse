import React from 'react';
import './IncomingCallModal.css'

const IncomingCallModal = ({callerUsername}) => {

    const handleAcceptButtonPress = () => {
        // :TODO
    }

    const handleRejectButtonPress = () => {
        // :TODO
    }

    return (
        <div className='direct_call_dialog'>
            <span className='caller_name'>{callerUsername} is calling ...</span>
            <div className='direct_call_dialog_button_container'>
                <button className='direct_call_dialog_accept_button' onClick={handleAcceptButtonPress}>
                    Accept
                </button>
                <button className='direct_call_dialog_reject_button' onClick={handleRejectButtonPress}>
                    Reject
                </button>
            </div>
        </div>
    );
};

export default IncomingCallModal;
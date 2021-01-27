import React from 'react';
import PropTypes from 'prop-types';

function Alert(props) {
    if (props.message == null) {
        return null;
    }

    return (
        <div className="alert alert-warning alert-dismissible" role="alert">
            <strong>Error!</strong> {props.message}
            <button data-testid="close" type="button" className="close" onClick={() => props.onClose()}>
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    );
}

Alert.propTypes = {
    message: PropTypes.string,
    onClose: PropTypes.func.isRequired
}

export default Alert
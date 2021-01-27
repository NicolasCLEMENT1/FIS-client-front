import React from 'react';

function Logout(props) {
    return(
        <div>
            Logged user: {props.user.email}
            <button className="btn btn-primary" onClick={() => props.onLogout()}>Logout</button>
        </div>
    )
}

export default Logout;
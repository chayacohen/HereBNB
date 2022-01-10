import React from "react";

const Profile = ({currentUser, user}) => {

    return (
        <div>
            {user.about ? 
            <div id="about-profile">
                <h1>About</h1>
                <p>{user.about}</p>
            </div>
            : null }
            <div className="border-line"></div>
        </div>
    )
}

export default Profile;
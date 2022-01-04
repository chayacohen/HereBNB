import React from 'react'; 

const Account = () => {
    return (
        <div className="account">
            <div className="account-sidebar">
                <img src="https://a0.muscache.com/defaults/user_pic-50x50.png?v=3"/>
                <p>Update photo</p>
            </div>
            <div className="profile">
                <div className="profile-section-one">
                    <p>Hi, I'm User</p>
                    <p>Joined in 2022</p>
                    <p>Edit profile</p>
                </div>
                <p>0 Reviews</p>
                <p>Reviews by you</p>
            </div>

        </div>
    )
}

export default Account;
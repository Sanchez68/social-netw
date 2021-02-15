import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = ({profile,...props}) => {
    return (
        <div>
            <ProfileInfo profile={profile} status={props.status} updateStatus={props.updateStatus}/>
            <MyPostsContainer/>
        </div>

    )
}
export default Profile
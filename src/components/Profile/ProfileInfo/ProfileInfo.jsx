import React from 'react';
import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user.png";

const ProfileInfo = ({isOwner, savePhoto, ...props}) => {

    if (!props.profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }
    return (

        <div>
            <div className={s.description}>
                <img src={props.profile.photos.large || userPhoto} className={s.mainPhoto}/>
                {isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}
                <div>
                    <div>
                        lookingForAJob: {props.profile.lookingForAJob ? "yes" : "No"}
                    </div>
                    {props.profile.lookingForAJob &&
                    <div>
                        My prof skills : {props.profile.lookingForAJobDescription}
                    </div>
                    }
                    <div>
                        fullName: {props.profile.fullName}
                    </div>
                    <div>
                       {/* Contacts: {props.profile.}*/}
                    </div>
                </div>

                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>

    )
}

export default ProfileInfo
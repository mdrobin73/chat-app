import React, { useState } from 'react';
import "./ProfileUpdate.css"
import assets from '../../assets/assets';

const ProfileUpdate = () => {

    const [image, setImage] = useState(false);

    return (
        <div className='profile'>
            <div className="profile-container">
                <form>
                    <h3>Profile Details</h3>
                    <label htmlFor="avatar">
                        <input onChange={(e) => setImage(e.target.files[0])} type="file" name="" id="avatar" accept='.png, .jpg, .jpeg' hidden />
                        <img src={image? URL.createObjectURL(image) : assets.avatar_icon} alt="" />
                        <p>Upload profile image</p>
                    </label>

                    <input type="text" name="" id="" placeholder='Your name' required />
                    <textarea name="" id="" placeholder='Bio' required></textarea>
                    <button type="submit">Save</button>
                </form>

                <img className='profile-photo' src={image? URL.createObjectURL(image) : assets.logo_icon} alt="" />
            </div>
        </div>
    );
};

export default ProfileUpdate;
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar.component";
import "./profile.css";
import { DEFAULT_DATA } from "../../DefaultData";
const Profile = () => {
  const { firstName, lastName, email, phone } = DEFAULT_DATA;
  return (
    <div className="wrapper">
      <div className="container">
        <Navbar />
        <div className="profile">
          <h1 className="profile-name">Profile</h1>
          <div className="profile-info">
            <span>First Name: {firstName} </span>
            <span>Last Name: {lastName}</span>
            <span>Email: {email}</span>
            <span>Phone: {phone}</span>
          </div>
          <div className="profile-btns">
            <button className="edit">Edit</button>
            <button className="logout">logout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

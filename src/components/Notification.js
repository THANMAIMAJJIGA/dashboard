import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faBell, faCaretDown, } from '@fortawesome/free-solid-svg-icons';
import avatarImage from "../assets/avatar.jpg";

const navStyle = {
    display: "flex",
    justifyContent: "space-between",
};


const notificationStyle = {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    padding: "0 1rem",
};

const fontIconStyle = {
    fontSize: "1.5rem",
    color: "black",
};

const imageStyle = {
    display: "flex",
    gap: "1rem",
};

const imgStyle = {
    height: "2.5rem",
    width: "2.5rem",
    borderRadius: "50%",
};
const Notification = () => {
    return (
        <nav>
            <div className="notificationStyle" style={navStyle}>
                <FontAwesomeIcon icon={faCalendar} style={fontIconStyle} />
                <FontAwesomeIcon icon={faBell} style={fontIconStyle} />
                <div style={imageStyle}>
                    <img src={avatarImage} alt="Avatar" style={imgStyle} />
                </div>
                <FontAwesomeIcon icon={faCaretDown} style={fontIconStyle} />
            </div>
        </nav>
    );
};


export default Notification;

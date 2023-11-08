import React from "react";
import Notification from "./Notification";
import Events from "./Events";
const sectionStyle = {
    position: "fixed",
    right: 0,
    top: 0,
    backgroundColor: "orange",
    height: "100vh",
    width: "20%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "1rem 0.5rem",
    gap: "2rem",
    margin: "3px",
};

const gridStyle = {
    zIndex: 2,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
};

const RightSidebar = () => {
    return (
        <section style={sectionStyle}>
            <div className="grid" style={gridStyle}>
                <Notification />
                <Events />
            </div>
        </section>
    );
};

export default RightSidebar;

import React from "react";
import "./Header.css";
import HeaderOption from "./HeaderOption";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import NotificationsIcon from "@mui/icons-material/Notifications";

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <img
                    src="https://www.freeiconspng.com/uploads/linkedin-logo-3.png"
                    alt="logo"
                />
                <div className="header__search">
                    {/* Search Icon */}
                    <SearchIcon></SearchIcon>
                    <input type="text" />
                </div>
            </div>
            <div className="header__right">
                <HeaderOption Icon={HomeIcon} title="Home" />
                <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
                <HeaderOption Icon={BusinessCenterIcon} title="Messaging" />
                <HeaderOption Icon={NotificationsIcon} title="Notifications" />
                <HeaderOption
                    avatar="https://storage.googleapis.com/ares-profile-pictures/default/razal_bin_kabeer-e9899dacebf13e1946e30709ff4f324f.jpg"
                    title={"me"}
                />
            </div>
        </div>
    );
}

export default Header;

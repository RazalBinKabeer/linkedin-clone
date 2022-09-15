import React from "react";
import "./Feed.css";
import InputOption from "./InputOption";
import CreateIcon from "@mui/icons-material/Create";
import ImageIcon from "@mui/icons-material/Image";
import YouTubeIcon from "@mui/icons-material/YouTube";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import Post from "./Post";
// import { db } from "./firebase";

function Feed() {
    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon></CreateIcon>
                    <form>
                        <input type="text" />
                        <button type="submit">Send</button>
                    </form>
                </div>
                <div className="feed__inputOptions">
                    {/* Input Options */}
                    <InputOption
                        Icon={ImageIcon}
                        title="Photo"
                        color="#70B5f9"
                    ></InputOption>

                    <InputOption
                        Icon={YouTubeIcon}
                        title="Video"
                        color="#E7A33E"
                    ></InputOption>

                    <InputOption
                        Icon={EventNoteIcon}
                        title="Event"
                        color="#C0CBCD"
                    ></InputOption>

                    <InputOption
                        Icon={CalendarTodayIcon}
                        title="Write article"
                        color="#7FC15E"
                    ></InputOption>
                </div>
            </div>
            {/* Posts */}
            <Post
                name="Razal kabeer"
                description="This is a test"
                message="Wow this worked"
            ></Post>
            <Post
                name="Rizin kabeer"
                description="Hey there"
                message="This is absolutely great!"
            ></Post>
            <Post
                name="Ryan Mujeeb"
                description="R Y A N CHANU"
                message="Great Platform!"
            ></Post>
            <Post
                name="Peechu Mujeeb"
                description="I'm Chupee"
                message="Chupee Man into the Chupee-verse"
            ></Post>
            <Post
                name="Reem kabeer"
                description="Your little pony"
                message="Toilet is sparkling!"
            ></Post>
        </div>
    );
}

export default Feed;

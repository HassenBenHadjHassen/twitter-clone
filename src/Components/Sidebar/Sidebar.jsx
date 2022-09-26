import React from 'react';
/* CSS */
import "./Sidebar.css";
/* Icons */
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';
import TagIcon from '@mui/icons-material/Tag';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
/* Components */
import SidebarOption from './SidebarOption';
import { Button } from '@mui/material';

function Sidebar() {
  return (
    <div className='sidebar'>
        {/* Twitter icon*/}
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a href="#"><TwitterIcon className='sidebar__twitterIcon' /></a>
        {/* Sidebar Options*/}
        <SidebarOption active Icon={HomeIcon} text="Home" />
        <SidebarOption Icon={TagIcon} text="Explore" />
        <SidebarOption Icon={NotificationsNoneIcon} text="Notifications" />
        <SidebarOption Icon={MailOutlineIcon} text="Messages" />
        <SidebarOption Icon={BookmarkBorderIcon} text="Bookmarks" />
        <SidebarOption Icon={ListAltIcon} text="Lists" />
        <SidebarOption Icon={PersonOutlineIcon} text="Profile" />
        <SidebarOption Icon={MoreHorizIcon} text="More" />
        {/* Button tweet */}
        <Button variant="outlined" className='sidebar__tweet' fullWidth>Tweet</Button>
    </div>
  );
}

export default Sidebar;
import React from 'react';
import './sidebar.css';

function Sidebar() {
return (
<aside className="sidebar">
<ul>
<li><a href="#dashboard">Dashboard</a></li>
<li><a href="#profile">Profile</a></li>
<li><a href="#settings">Settings</a></li>
</ul>
</aside>
);
}

export default Sidebar;

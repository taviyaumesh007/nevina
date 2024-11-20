import React, { useState } from "react";
import { FaHome, FaUser, FaMusic, FaCalendarAlt, FaTrophy } from "react-icons/fa";
import { MdLibraryMusic, MdExpandMore, MdExpandLess } from "react-icons/md";

const Sidebar = () => {
  const [activeLabel, setActiveLabel] = useState("Home");
  const [showSubmenus, setShowSubmenus] = useState({});
  const menuItems = [
    {
        label: "Home",
        icon: <FaHome />,
        link: "#",
    },
    {
        label: "Profile",
        icon: <FaUser />,
        link: "#",
    },
    {
        label: "Collection",
        icon: <MdLibraryMusic />,
        submenu: [
            { label: "Playlists", link: "#" },
            { label: "Tracks", link: "#" },
            { label: "Artists", link: "#" },
            { label: "Albums", link: "#" },
            { label: "Genres", link: "#" },
            { label: "Decades", link: "#" },
            { label: "Geos", link: "#" },
        ],
    },
    {
        label: "Community",
        icon: <FaMusic />,
        link: "#",
    },
    {
        label: "Stations",
        icon: <FaCalendarAlt />,
        submenu: [
            { label: "Scheduled Listening", link: "#" },
            { label: "Music Discovery", link: "#" },
            { label: "Positive Music", link: "#" },
            { label: "Mood Regulation", link: "#" },
        ],
    },
    {
        label: "Performance",
        icon: <FaTrophy />,
        submenu: [
            { label: "Calendar", link: "#" },
            { label: "Groups", link: "#" },
            { label: "Music Analysis", link: "#" },
        ],
    },
  ];
  
  const toggleSubmenu = (label) => {
    setShowSubmenus((prev) => ({
        ...prev,
        [label]: !prev[label],
    }));
  };
  const handleMenuClick = (label) => {
    setActiveLabel(label); // Set the active label
    if (menuItems.find(item => item.label === label)?.submenu) {
        toggleSubmenu(label); // Only toggle submenu if it exists
    }
};

  return (
      <aside className="sidebar">
             <div className="menu">
            {menuItems.map((item, index) => (
                <div key={index} className="menu-section">
                    <a
                        href={item.link || "#"}
                        className={`menu-item ${activeLabel === item.label ? "active" : ""}`}
                        onClick={() => handleMenuClick(item.label)}
                    >
                        {item.icon} {item.label}
                        {item.submenu &&
                            (showSubmenus[item.label] ? <MdExpandLess /> : <MdExpandMore />)}
                    </a>
                    {item.submenu && showSubmenus[item.label] && (
                        <div className="submenu">
                            {item.submenu.map((subitem, subIndex) => (
                                <a key={subIndex} href={subitem.link} className="submenu-item">
                                    {subitem.label}
                                </a>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
      </aside>
  );
};
export default Sidebar

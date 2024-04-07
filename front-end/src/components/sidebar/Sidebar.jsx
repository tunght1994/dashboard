import { Link } from "react-router-dom";
import { Icons } from "../../assets/icons";
import { SidebarWrap } from "./Sidebar.styles";
import { MdOutlineClose } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { setSidebarClose } from "../../redux/slices/sidebarSlice";
import { useState } from "react";
import { menuItem } from "../../data/menuItem";

const Sidebar = () => {
  const [dropdownStates, setDropdownStates] = useState(Array(menuItem.length).fill(false));
  const [activeMenu, setActiveMenu] = useState(0);

  const isSidebarOpen = useSelector((state) => state.sidebar.isSidebarOpen);
  const dispatch = useDispatch();

  const handleMenuClick = (index) => {
    setActiveMenu(index);
    const newDropdownStates = [...dropdownStates];
    newDropdownStates[index] = !newDropdownStates[index];
    setDropdownStates(newDropdownStates);
  };

  return (
    <SidebarWrap className={`${isSidebarOpen ? "sidebar-open" : ""}`}>
      <div className="sidebar-top">
        <div className="sidebar-brand">
          <span className="brand-logo">
            <img src={Icons.LogoWhite} alt="site brand logo" />
          </span>
          <span className="brand-text">Para Company</span>
        </div>
        <button
          className="sidebar-close-btn"
          onClick={() => dispatch(setSidebarClose())}
        >
          <MdOutlineClose size={24} />
        </button>
      </div>
      <div className="sidebar-body">
        <div className="sidebar-menu">
          {menuItem.map((item, index) => (
            <ul key={index} className="menu-list">
              <Link
                to={item.path}
                className={`menu-link ${activeMenu === index ? "active" : ""}`}
                onClick={() => handleMenuClick(index)}
              >
                <span className="menu-link-icon">
                  <img src={item.icon} alt="" />
                </span>
                <span className="menu-link-text">{item.value}</span>
              </Link>
              {item.fromDropdown && dropdownStates[index] && (
                <div className="dropdown-content">
                  {item.fromDropdown.map((dropdownItem, dropdownIndex) => (
                    <Link key={dropdownIndex} to={dropdownItem.path} className="dropdown-item">
                      {dropdownItem.value}
                    </Link>
                  ))}
                </div>
              )}
            </ul>
          ))}
        </div>
      </div>
    </SidebarWrap>
  );
};

export default Sidebar;

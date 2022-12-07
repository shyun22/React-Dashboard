import React, { useRef } from "react";
import { useDetectOutsideClick } from "./useDetectOutsideClick";

const Dropdown = () => {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const onClick = () => setIsActive(!isActive);

  return (
    <div className="container">
      <div className="menu-container">
        <button onClick={onClick} className="menu-trigger">
          <span>User</span>
        </button>
        <nav
          ref={dropdownRef}
          className={`menu ${isActive ? "active" : "inactive"}`}
        >
          <ul>
            <li>Messages</li>
            <li>Trips</li>
            <li>Saved</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Dropdown;

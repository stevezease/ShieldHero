import React, { useState, useRef, useContext } from "react";
import MenuButton from "./menu-button/menu-button";
import "./menu.css";
import Skill from "../../images/skill.png";
import Scroll from "../../images/scroll-unfurled.png";
import SwapBag from "../../images/swap-bag.png";
import Party from "../../images/party.png";
import WhiteBook from "../../images/white-book.png";
import HamburgerMenu from "../../images/hamburger-menu.png";
import Contract from "../../images/contract-icon.png";
import Status from "../../images/status.png";
import Help from "../../images/help.png";
import { ActiveContentContext } from "../../pages/index";

const menuButtons = [
  { label: "status", id: "STATUS", src: Status },
  { label: "item", src: SwapBag, id: "ITEM" },
  { label: "magic", src: WhiteBook, id: "MAGIC" },
  { label: "skill", src: Skill, id: "SKILL" },
  { label: "recipe", src: Scroll, id: "RECIPE" },
  { label: "party", src: Party, id: "PARTY" },
  { label: "contract", src: Contract, id: "CONTRACT" },
  { label: "help", src: Help, id: "HELP" },
];

const Menu = ({ setActiveContent }) => {
  const [isHovered, setHovered] = useState(true);
  const [showingMenu, setShowingMenu] = useState(false);

  const activeContent = useContext(ActiveContentContext);

  const hoverRef = useRef(isHovered);
  hoverRef.current = isHovered;

  const currentTimeout = useRef(null);
  const clearCurrentTimeout = () => {
    if (currentTimeout.current) {
      clearTimeout(currentTimeout.current);
      currentTimeout.current = null;
    }
  };
  const handleMouseLeave = () => {
    setHovered(false);
    clearCurrentTimeout();
    currentTimeout.current = setTimeout(() => {
      if (!hoverRef.current) {
        setShowingMenu(false);
      }
    }, 3000);
  };

  return (
    <div
      className="menu"
      onMouseOver={() => {
        setHovered(true);
        clearCurrentTimeout();
        setShowingMenu(true);
      }}
      onMouseLeave={handleMouseLeave}
    >
      {showingMenu ? (
        menuButtons.map(({ label, src, id }, index) => (
          <MenuButton
            index={index}
            label={label}
            id={id}
            imageSRC={src}
            isActive={id === activeContent}
            setActiveContent={setActiveContent}
            key={`menu-button-${src}`}
          />
        ))
      ) : (
        <MenuButton index={0} label="menu" imageSRC={HamburgerMenu} />
      )}
    </div>
  );
};

export default Menu;

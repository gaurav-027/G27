import React from "react";
import FlowingMenu from "../components/FlowingMenu";
import { XIcon } from "../components/ui/x-icon";
import { useContext } from "react";
import { MenuContext } from "../Context/MenuContext";
import Parse from "../animation/Parse";

export default function Menu() {
  const { showMenu, setShowMenu } = useContext(MenuContext);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const demoItems = [
    {
      link: "#about",
      text: "About",
      image: "https://picsum.photos/600/400?random=2",
    },
    {
      link: "#",
      text: "Skills",
      image: "https://picsum.photos/600/400?random=3",
    },
    {
      link: "#",
      text: "Project",
      image: "https://picsum.photos/600/400?random=4",
    },
    {
      link: "#",
      text: "Contact",
      image: "https://picsum.photos/600/400?random=4",
    },
  ];

  return (
    <>

        <Parse/>
      <div className="w-full h-screen bg-black">
        <div className="w-full h-1/8 flex justify-between items-center p-2">
          <h1 className="text-white text-6xl">Menu</h1>
          <div onClick={toggleMenu}>
            <XIcon color="white" size={60} />
          </div>
        </div>
        <div className="w-full h-7/8">
          <FlowingMenu
            items={demoItems}
            speed={15}
            textColor="#ffffff"
            bgColor="#120F17"
            marqueeBgColor="#ffffff"
            marqueeTextColor="#120F17"
            borderColor="#ffffff"
          />
        </div>
      </div>
    </>
  );
}

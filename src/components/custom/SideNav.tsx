import { Image, PencilRuler, Shield } from "lucide-react";
import { JSX } from "react";

const SideNav = ({
  activeIndex,
  setActiveIndex,
}: {
  activeIndex: number;
  setActiveIndex: (index: number) => void;
}): JSX.Element => {
  const menuList = [
    {
      id: 1,
      name: "Icon",
      icon: PencilRuler,
    },
    {
      id: 2,
      name: "Background",
      icon: Image,
    },
    {
      id: 3,
      name: "Upgrade",
      icon: Shield,
    },
  ];

  return (
    <div className=" border shadow-sm h-screen">
      <div>
        {menuList.map((menu, index) => (
          <div
            onClick={() => setActiveIndex(index)}
            key={menu.id}
            className={`p-4 text-lg hover:bg-blue-100 cursor-pointer flex items-center hover:text-blue-500 ${
              activeIndex === index ? "bg-blue-100 text-blue-500" : ""
            }`}
          >
            <menu.icon size={24} className="mr-2" />
            {menu.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideNav;

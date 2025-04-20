import { BsPlus, BsFillLightningFill, BsGearFill } from "react-icons/bs";
import { FaFire, FaPoo } from "react-icons/fa";

const SideBar = () => {
  return (
    <div className="fixed top-0 left-0 flex h-screen w-16 flex-col bg-white shadow-lg dark:bg-gray-900">
      <SideBarIcon icon={<FaFire size="28" />} text={"Home 🏠"} />
      <Divider />
      <SideBarIcon icon={<BsPlus size="32" />} text={"Add ➕"} />
      <SideBarIcon
        icon={<BsFillLightningFill size="20" />}
        text={"Trending ⚡"}
      />
      <SideBarIcon icon={<FaPoo size="20" />} text={"Playground 😉"} />
      <Divider />
      <SideBarIcon icon={<BsGearFill size="22" />} text={"Settings ⚙️"} />
    </div>
  );
};

const SideBarIcon = ({ icon, text }) => (
  <div className="sidebar-icon group">
    {icon}
    <span className="sidebar-tooltip group-hover:scale-150">{text}</span>
  </div>
);

const Divider = () => <hr className="sidebar-hr" />;

export default SideBar;

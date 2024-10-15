"use client";
import { useState } from "react";
import { IoPersonOutline } from "react-icons/io5";
import { FaBed } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { MdReviews } from "react-icons/md";
import { BiHomeHeart, BiLogOut } from "react-icons/bi";
import { PiStackSimpleDuotone } from "react-icons/pi";
import { TbHomeSearch } from "react-icons/tb";
import {
  HiOutlineChatBubbleLeftEllipsis,
  HiOutlineHome,
  HiOutlinePlusCircle,
} from "react-icons/hi2";
import { HiMenuAlt4 } from "react-icons/hi";
import { GoChevronRight } from "react-icons/go";
import { IoIosClose } from "react-icons/io";

const DashboardLayout = ({ children }) => {
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(false);

  const Menus = [
    {
      title: "Dashboard",
      slug: "",
      icon: <FaBed className="text-white text-xl" />,
    },
    {
      title: "My Profile",
      slug: "/profile",
      icon: <IoPersonOutline className="text-white text-xl" />,
    },
    {
      title: "Reviews",
      slug: "/reviews",
      icon: <MdReviews className="text-white text-xl" />,
    },
    {
      title: "Message",
      slug: "/message",
      icon: <HiOutlineChatBubbleLeftEllipsis className="text-white text-xl" />,
    },
    {
      title: "Add New Properties",
      slug: "/properties",
      icon: <HiOutlinePlusCircle className="text-white text-xl" />,
    },
    {
      title: "My Properties",
      slug: "/my-properties",
      icon: <HiOutlineHome className="text-white text-xl" />,
    },
    {
      title: "My Favorites",
      slug: "/favorites",
      icon: <BiHomeHeart className="text-white text-xl" />,
    },
    {
      title: "Saved Search",
      slug: "/saved-search",
      icon: <TbHomeSearch className="text-white text-xl" />,
    },
    {
      title: "My Package",
      slug: "/package",
      icon: <PiStackSimpleDuotone className="text-white text-xl" />,
    },
    {
      title: "Logout",
      slug: "",
      icon: <BiLogOut className="text-white text-xl" />,
    },
  ];
  return (
    <div className="md:pt-[120px] pt-[80px] flex h-[100dvh] gap-10 px-5 bg-slate-100 relative">
      <div
        onClick={() => setIsSidePanelOpen((prev) => !prev)}
        className="py-3 md:hidden cursor-pointer bg-[#1f4b43] absolute top-20 left-0 "
      >
        {isSidePanelOpen ? (
          <IoIosClose
            className={` h-full w-7 text-white `}
          />
        ) : (
          < GoChevronRight
            className={` h-full w-7 text-white `}
          />
        )}
      </div>
      <div
        className={`w-[20rem] md:w-[27rem] z-10 h-[90dvh] md:h-full flex py-5 absolute md:relative md:left-0 md:top-0 ${
          isSidePanelOpen ? "left-0 top-[120px]" : "-left-[20rem]"
        } `}
      >
        <SidePanel setIsSidePanelOpen={setIsSidePanelOpen} Menus={Menus} />
      </div>
      <div className="w-full h-full overflow-y-auto no-scrollbar ">
        <main>{children}</main>
        <p className="text-center mt-10 mb-4">Copyright © 2024. JustHome</p>
      </div>
    </div>
  );
};

export default DashboardLayout;

const SidePanel = (props) => {
  const router = useRouter();
  const pathName = usePathname();

  const { Menus, setIsSidePanelOpen } = props;
  return (
    <div className="w-full h-full  bg-[#1f4b43] overflow-y-auto no-scrollbar rounded-r-3xl md:rounded-3xl p-10 flex flex-col gap-3">
      {Menus.map((menu, index) => (
        <div
          key={index}
          onClick={() => {
            setIsSidePanelOpen(false);
            if (menu.title !== "Logout") {
              router.push(`/dashboard${menu.slug}`);
            }
          }}
          className={`px-5 items-center min-h-[60px] cursor-pointer rounded-lg hover:bg-white/5 flex gap-3 ${
            pathName === `/dashboard${menu.slug}` ? "bg-white/5" : ""
          }`}
        >
          {menu.icon}
          <p className="text-white text-center text-nowrap">{menu.title}</p>
        </div>
      ))}
    </div>
  );
};

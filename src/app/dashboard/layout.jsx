"use client";
import { useEffect } from "react";
import { IoPersonOutline } from "react-icons/io5";
import { FaBed } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { MdReviews } from "react-icons/md";
import { BiHomeHeart,BiLogOut } from "react-icons/bi";
import { PiStackSimpleDuotone } from "react-icons/pi";
import { TbHomeSearch } from "react-icons/tb";
import { HiOutlineChatBubbleLeftEllipsis, HiOutlineHome, HiOutlinePlusCircle } from "react-icons/hi2";
const DashboardLayout = ({ children }) => {
  const router = useRouter();
  const pathName = usePathname();

  useEffect(() => {
    console.log(pathName);
  }, [pathName]);

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
      slug: "/properties",
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
    <div className="pt-32 flex h-[100dvh] gap-10 px-5 bg-slate-100 ">
      <div className="w-[27rem] h-full flex py-5">
        <div className="w-full h-full bg-[#1f4b43] overflow-y-auto no-scrollbar rounded-3xl p-10 flex flex-col gap-3">
          {Menus.map((menu, index) => (
            <div
              key={index}
              onClick={() => router.push(`/dashboard${menu.slug}`)}
              className={`px-5 items-center min-h-[60px] rounded-lg hover:bg-white/5 flex gap-3 ${
                pathName === `/dashboard${menu.slug}` ? "bg-white/5" : ""
              }`}
            >
              {menu.icon}
              <p className="text-white text-center">{menu.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full h-full overflow-y-auto no-scrollbar">
        <main>{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;

{
  /* <aside style={{ width: '250px', background: 'white', padding: '400px' }}>
        <nav>
          <ul>
            <li>
              <Link href="/dashboard/home">
                Home
              </Link>
            </li>
            <li>
              <Link href="/dashboard/profile">
                Profile
              </Link>
            </li>
            <li>
              <Link href="/dashboard/settings">
                Settings
              </Link>
            </li>
          </ul>
        </nav>
      </aside> */
}

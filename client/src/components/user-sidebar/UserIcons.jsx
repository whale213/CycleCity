import { RxDashboard } from "react-icons/rx";
import { HiOutlineMap, HiOutlineUserGroup } from "react-icons/hi";
import { FaRegCompass } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";

export const userIcons = [
  {
    id: 1,
    icon: <RxDashboard />,
    text: "Dashboard",
    href: "/user",
  },
  {
    id: 2,
    icon: <HiOutlineMap />,
    text: "Map",
    href: "/user/itinerary",
  },
  {
    id: 3,
    icon: <HiOutlineUserGroup />,
    text: "Pelotons",
    href: "/user/peloton",
  },
  {
    id: 4,
    icon: <FaRegCompass />,
    text: "Feed",
    href: "/user/userpost",
  },
  {
    id: 5,
    icon: <AiOutlineUser />,
    text: "Profile",
    href: "/user/profile",
  },
];

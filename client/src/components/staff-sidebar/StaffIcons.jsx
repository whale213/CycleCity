import { RxDashboard } from "react-icons/rx";
import { HiOutlineMap, HiOutlineUserGroup } from "react-icons/hi";
import { FiUsers } from "react-icons/fi";
import { TbMedal } from "react-icons/tb";

export const adminIcons = [
  {
    id: 1,
    icon: <RxDashboard />,
    text: "Dashboard",
    href: "/staff",
  },
  {
    id: 2,
    icon: <HiOutlineMap />,
    text: "Itinerary",
    href: "/staff/itinerary/locations",
  },
  {
    id: 3,
    icon: <HiOutlineUserGroup />,
    text: "Pelotons",
    href: "/staff/peloton",
  },
  {
    id: 4,
    icon: <FiUsers />,
    text: "Users",
    href: "/staff/profiles/users",
  },
  {
    id: 5,
    icon: <TbMedal />,
    text: "Achievements",
    href: "/staff/achievements/quests",
  },
];

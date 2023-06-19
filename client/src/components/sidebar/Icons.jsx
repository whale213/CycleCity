import { RxDashboard } from "react-icons/rx";
import { HiOutlineMap } from "react-icons/hi";
import { BsCalendarWeek } from "react-icons/bs";
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
    href: "/itinerary/locations",
  },
  {
    id: 3,
    icon: <BsCalendarWeek />,
    text: "Events",
    href: "/staff",
  },
  {
    id: 4,
    icon: <FiUsers />,
    text: "Users",
    href: "/staff",
  },
  {
    id: 5,
    icon: <TbMedal />,
    text: "Achievements",
    href: "/staff",
  },
];

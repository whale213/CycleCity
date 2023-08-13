import { FaUsers } from "react-icons/fa";
import { ImUser } from "react-icons/im";

export const TabsData = [
  {
    id: 1,
    icon: <FaUsers size={24} />,
    label: "Users",
    href: "/staff/profiles/users",
  },
  {
    id: 2,
    icon: <ImUser size={24} />,
    label: "Staff",
    href: "/staff/profiles/staff",
  },
];

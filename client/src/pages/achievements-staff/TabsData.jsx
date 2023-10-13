import { GiTiedScroll } from "react-icons/gi";
import { TbTargetArrow } from "react-icons/tb";
import { FiEdit } from "react-icons/fi";
import { GiPodium } from "react-icons/gi";

export const TabsData = [
  {
    id: 1,
    icon: <GiTiedScroll size={24} />,
    label: "Quests",
    href: "/staff/achievements/quests",
  },
  {
    id: 2,
    icon: <TbTargetArrow size={24} />,
    label: "Missions",
    href: "/staff/achievements/missions",
  },
  {
    id: 3,
    icon: <FiEdit size={24} />,
    label: "Criterias",
    href: "/staff/achievements/criterias",
  },
  {
    id: 4,
    icon: <GiPodium size={24} />,
    label: "Leagues",
    href: "/staff/achievements/leagues",
  },
  {
    id: 5,
    icon: <GiTiedScroll size={24} />,
    label: "UserQuest",
    href: "/staff/achievements/userQuest",
  },
];

import { TbMap2 } from "react-icons/tb";
import { MdOutlineAttractions } from "react-icons/md";

export const TabsData = [
  {
    id: 1,
    icon: <TbMap2 size={24} />,
    label: "Locations",
    href: "/staff/itinerary/locations",
  },
  {
    id: 2,
    icon: <MdOutlineAttractions size={24} />,
    label: "Attractions",
    href: "/staff/itinerary/attractions",
  },
];

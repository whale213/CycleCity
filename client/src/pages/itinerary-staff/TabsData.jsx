// icons
import { TbMap2 } from "react-icons/tb";
import { MdOutlineAttractions } from "react-icons/md";

// components
import Locations from "./Locations";
import Attractions from "./Attractions";

export const TabsData = [
  {
    icon: <TbMap2 size={24} />,
    label: "Locations",
    content: <Locations />,
  },
  {
    icon: <MdOutlineAttractions size={24} />,
    label: "Attractions",
    content: <Attractions />,
  },
  {
    icon: <TbMap2 size={24} />,
    label: "Routes",
    content: "To add!",
  },
];

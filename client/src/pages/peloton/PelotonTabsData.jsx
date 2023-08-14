import AddPeloton from "./AddPeloton";
import PelotonJoin from "./PelotonJoin";
import PelotonsList from "./PelotonsList";

export const TabsData = [
  {
    id: 1,
    label: "Chat",
    content:
      "Ut irure mollit nulla eiusmod excepteur laboris elit sit anim magna tempor excepteur labore nulla.",
    href: "/user/peloton/chat",
  },
  {
    id: 2,
    label: "My Pelotons",
    content: <AddPeloton />,
    href: "/user/peloton/add",
  },
  {
    id: 3,
    label: "Pelotons",
    content: <PelotonsList />,
    href: "/user/peloton/list",
  },
  {
    id: 4,
    label: "Invites",
    content: <PelotonJoin />,
    href: "/user/peloton/join",
  },
];

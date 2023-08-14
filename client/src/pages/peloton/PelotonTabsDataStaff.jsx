import AddPelotonStaff from "./AddPelotonStaff";
import PelotonsListStaff from "./PelotonsListStaff";

export const TabsData = [
  {
    id: 1,
    label: "Create Pelotons",
    content: <AddPelotonStaff />,
    href: "/staff/peloton/add",
  },
  {
    id: 2,
    label: "Pelotons",
    content: <PelotonsListStaff />,
    href: "/staff/peloton/list",
  },
];

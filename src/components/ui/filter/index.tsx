import { Flex } from "@chakra-ui/react";
import { FilterPillItemCheckbox } from "./FilterPillItemCheckbox";

import { FilterPill } from "./FilterPill";

const filterOptions = [
  {
    key: 0,
    title: "Sort By",
    options: ["Date Created", "Date Uploaded"],
  },
  {
    key: 1,
    title: "Software Type",
    options: ["All", "RFP", "RFI", "RFQ"],
  },
  {
    key: 2,
    title: "Department",
    options: ["All", "Marketing", "Sales", "Engineering"],
  },
  {
    key: 3,
    title: "Status",
    options: ["Completed", "In Progress"],
  },
];

export function Filter() {
  return (
    <Flex gap="3">
      {filterOptions.map((filter) => (
        <FilterPill
          key={filter.key}
          title={filter.title}
          options={filter.options}
        />
      ))}
      <FilterPillItemCheckbox title="Collaborators" />
    </Flex>
  );
}

import { useState } from "react";
import { Flex, IconButton } from "@chakra-ui/react";

import { TiList, TiLayoutGrid } from "../../../../public/icons";

export function View() {
  const [selectedView, setSelectedView] = useState("grid" as "list" | "grid");
  return (
    <Flex ml="auto" gap="14px">
      <IconButton
        variant="secondary"
        aria-label="List View"
        icon={<TiList fontSize="24px" />}
        border="none"
        onClick={() => setSelectedView("list")}
        bg={selectedView === "list" ? "brand.25" : "transparent"}
      />
      <IconButton
        variant="secondary"
        aria-label="Grid View"
        icon={<TiLayoutGrid fontSize="24px" />}
        border="none"
        onClick={() => setSelectedView("grid")}
        bg={selectedView === "grid" ? "brand.25" : "transparent"}
      />
    </Flex>
  );
}

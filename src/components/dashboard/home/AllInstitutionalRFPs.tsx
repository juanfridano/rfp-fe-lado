import { useRef } from "react";
import {
  Flex,
  Heading,
  Button,
  Tooltip,
  useDimensions,
} from "@chakra-ui/react";

import { TiInfoCircle } from "../../../../public/icons";
import { Project } from "@/components/ui";

export function AllInstitutionalRFPs() {
  const containerRef = useRef(null);
  const dimensions = useDimensions(containerRef, true); // useSize is not available for public use yet

  return (
    <Flex
      ref={containerRef}
      flex={{
        desktop: "auto",
        xl: "1",
      }}
      flexShrink="0"
      flexDir="column"
    >
      <Flex alignItems="center" mb="4">
        <Heading
          as="h2"
          size="xxs"
          fontWeight="600"
          display="flex"
          alignItems="center"
        >
          All institutional RFPs
          <Tooltip label="Hover me" aria-label="Info" placement="right-start">
            <TiInfoCircle ml="2" w="24px" h="24px" />
          </Tooltip>
        </Heading>
        <Button ml="auto" variant="link">
          View All
        </Button>
      </Flex>

      <Flex
        gap="2"
        overflowX="scroll"
        pb="8"
        w={{
          desktop: "700px",
          xl: "400px",
          "2xl":
            dimensions && dimensions?.borderBox?.width
              ? dimensions?.borderBox.width + "px"
              : "600px",
        }}
      >
        <Project />
        <Project />
        <Project />
      </Flex>
    </Flex>
  );
}

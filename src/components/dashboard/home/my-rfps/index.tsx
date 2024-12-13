import { useRef } from "react";
import NextLink from "next/link";

import {
  Flex,
  Heading,
  Button,
  Tooltip,
  useDimensions,
} from "@chakra-ui/react";

// import NoRFPs from "./NoRFPs";
import { RFP } from "@/components/ui";
import { TiInfoCircle } from "../../../../../public/icons";

export function MyRFPS() {
  const containerRef = useRef(null);
  const dimensions = useDimensions(containerRef, true); // useSize is not available for public use yet

  return (
    <Flex
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
          My RFPS
          <Tooltip label="Hover me" aria-label="Info" placement="right-start">
            <TiInfoCircle ml="2" w="24px" h="24px" />
          </Tooltip>
        </Heading>
        <Button as={NextLink} href="my-rfps" ml="auto" variant="link">
          View All
        </Button>
      </Flex>

      {/* <NoRFPs /> */}
      <Flex
        ref={containerRef}
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
        <RFP />
        <RFP />
      </Flex>
    </Flex>
  );
}

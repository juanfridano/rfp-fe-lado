import { Box, Heading, Text, Tooltip } from "@chakra-ui/react";

import { TiInfoCircle } from "../../../../../public/icons";
import Project from "./Project";

const dummyProjects = [
  {
    title: "Security",
    numberOfFiles: 2,
  },
  {
    title: "Photos",
    numberOfFiles: 0,
  },
  {
    title: "Equity",
    numberOfFiles: 2,
  },
  {
    title: "Other",
    numberOfFiles: 1,
  },
];

export function InstitutionLibrary() {
  return (
    <Box>
      <Heading
        as="h2"
        size="xxs"
        fontWeight="600"
        mb="1"
        display="flex"
        alignItems="center"
      >
        Institution Library
        <Tooltip label="Hover me" aria-label="Info" placement="right-start">
          <TiInfoCircle ml="2" w="24px" h="24px" />
        </Tooltip>
      </Heading>
      <Text size="sm" color="gray.neutral.500">
        Elevate AI accuracy by uploading documents to your institutional
        profile. The AI extracts accurate information, sparing you from the need
        to rewrite it.
      </Text>

      <Box mt="8" display="flex" flexWrap="wrap" gap="4">
        {dummyProjects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            numberOfFiles={project.numberOfFiles}
          />
        ))}
      </Box>
    </Box>
  );
}

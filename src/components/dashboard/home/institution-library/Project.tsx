import { Text, Flex } from "@chakra-ui/react";

import { TiFolder } from "../../../../../public/icons";

interface ProjectProps {
  title: string;
  numberOfFiles: number;
}

function Project({ title, numberOfFiles }: ProjectProps) {
  return (
    <Flex
      w="189px"
      h="114px"
      p="4"
      borderRadius="base"
      border="2px solid"
      borderColor="#F0F0F0"
      flexDir="column"
      justifyContent="space-between"
      alignItems="flex-start"
    >
      <Flex alignItems="center">
        <TiFolder w="16px" h="14.667px" color="gray.neutral.400" />
        <Text size="md" ml="2" color="gray.neutral.800" fontWeight="600">
          {title}
        </Text>
      </Flex>
      <Text size="xs" color="gray.neutral.500">
        {numberOfFiles}
        {numberOfFiles === 0 ? " file" : " files"}
      </Text>
    </Flex>
  );
}

export default Project;

"use client";

import { Box, Flex, Divider, Center } from "@chakra-ui/react";

import {
  SchoolHeader,
  InstitutionLibrary,
  MyRFPS,
  AllInstitutionalRFPs,
} from "@/components/dashboard/home";

function Home() {
  return (
    <>
      <SchoolHeader />
      <Box p="40px 80px">
        <InstitutionLibrary />
        <Divider opacity="1" my="8" color="gray.neutral.200" />
        <Flex flexWrap="wrap" gap="8">
          <MyRFPS />
          <Center
            height="246px"
            display={{
              desktop: "none",
              xl: "flex",
            }}
          >
            <Divider
              opacity="1"
              my="8"
              orientation="vertical"
              color="gray.neutral.200"
            />
          </Center>
          <AllInstitutionalRFPs />
        </Flex>
      </Box>
    </>
  );
}

export default Home;

import NextLink from "next/link";
import Image from "next/image";
import { Box, Flex, Heading, Link, Text, Tag } from "@chakra-ui/react";

import schoolLogo from "../../../../../public/images/Logo.png";
import {
  Users,
  World,
  MapPin,
  ArrowUpRight,
} from "../../../../../public/icons";

import Members from "./members";

export function SchoolHeader() {
  return (
    <Flex
      bg="gray.neutral.25"
      borderBottom="1px solid"
      borderColor="gray.neutral.200"
      padding="40px 80px"
      gap="8"
      alignItems="flex-start"
    >
      <Image src={schoolLogo} alt="School Logo" />
      <Box>
        <Flex gap="22px" mb="17px">
          <Heading as="h1" size="xs">
            University of Toronto
          </Heading>
          <Flex alignItems="center" gap="7px">
            <Tag bg="error.25" py="2px" color="error.700">
              4-YR
            </Tag>
            <Tag
              bg="warning.25"
              py="2px"
              color="orange.700"
              border="1px solid"
              borderColor="warning.25"
            >
              Public
            </Tag>
          </Flex>
        </Flex>
        <Flex flexDir="column" gap="2">
          <Flex alignItems="center">
            <World w="16px" h="16px" mr="2.5" color="gray.neutral.400" />
            <Link
              as={NextLink}
              href="#"
              target="_blank"
              size="sm"
              color="gray.neutral.500"
            >
              www.utoronto.ca
              <ArrowUpRight color="#333643" />
            </Link>
          </Flex>
          <Flex alignItems="center">
            <MapPin w="16px" h="16px" mr="2.5" color="gray.neutral.400" />
            <Text size="sm" color="gray.neutral.500">
              27 King&apos;s College Circle Toronto, Ontario M5S 1A1 Canada
            </Text>
          </Flex>
          <Flex alignItems="center">
            <Users w="16px" h="16px" mr="2.5" color="gray.neutral.400" />
            <Text size="sm" color="gray.neutral.500">
              1000+ students
            </Text>
          </Flex>
        </Flex>
      </Box>

      <Members />
    </Flex>
  );
}

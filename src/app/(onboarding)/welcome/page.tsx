"use client";

import { Box, Heading, Text, Button, Flex, Skeleton } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import Image from "next/image";

import { AuthWrapper } from "../../../hocs/AuthWrapper";
import defaultInstitutionFavicon from "../../../../public/images/default-institution-favicon.svg";
import { useAuth } from "../../../hooks";

function Welcome() {
  const router = useRouter();

  const { data } = useAuth();

  return (
    <AuthWrapper>
      <Box
        bg="gray.neutral.100"
        display="flex"
        minH="100vh"
        flexDirection="column"
        textAlign="center"
        pb="47px"
      >
        <Flex justifyContent="center" my="47px">
          <Box pos="relative" w="36px" h="36px">
            <Image src={defaultInstitutionFavicon} alt="Logo" />
          </Box>
        </Flex>

        <Flex justifyContent="center">
          <video
            width="928px"
            height="464px"
            style={{
              borderRadius: "20px",
            }}
            poster="/images/welcome-poster.jpg"
            controls
          >
            <source
              src="https://www.w3schools.com/html/movie.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </Flex>

        <Box w="717px" maxW="100%" m="0 auto" pt="48px">
          <Heading
            display="flex"
            justifyContent="center"
            alignItems="center"
            as="h1"
            size="md"
            fontWeight="500"
            mb="16px"
          >
            Welcome,{" "}
            {data ? (
              `${data?.data?.firstName}!`
            ) : (
              <Skeleton ml="2" w="100px" height="5px" />
            )}
          </Heading>
          <Text maxW="100%">
            We&apos;re thrilled to have you on board! To kick off your journey,
            we&apos;ve prepared a special welcome video just for you.
          </Text>
          <Button mt="54.433px" onClick={() => router.push("/")}>
            Continue
          </Button>
        </Box>
      </Box>
    </AuthWrapper>
  );
}

export default Welcome;

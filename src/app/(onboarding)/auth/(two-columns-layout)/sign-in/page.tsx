"use client";

import Image from "next/image";
import { Box, Heading, Text } from "@chakra-ui/react";

import SignInForm from "@/components/onboarding/SignInForm";
import defaultInstitutionFavicon from "../../../../../../public/images/default-institution-favicon.svg";

function SignInPage() {
  return (
    <>
      <Box pos="relative" w="36px" h="36px">
        <Image src={defaultInstitutionFavicon} alt="Logo" />
      </Box>
      <Heading as="h1" size="md" fontWeight="500" mt="27px">
        Welcome back
      </Heading>
      <Text mt="4" mb="10">
        Login to your account
      </Text>

      <SignInForm />
    </>
  );
}

export default SignInPage;

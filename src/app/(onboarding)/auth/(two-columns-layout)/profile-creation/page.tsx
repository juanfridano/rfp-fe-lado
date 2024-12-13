"use client";

import { Suspense } from "react";
import { Box, Text, Heading, Spinner } from "@chakra-ui/react";
import Image from "next/image";

import ProfileCreationForm from "../../../../../components/onboarding/ProfileCreation";
import defaultInstitutionFavicon from "../../../../../../public/images/default-institution-favicon.svg";

function ProfileCreationPage() {
  return (
    <>
      <Box pos="relative" w="36px" h="36px">
        <Image fill src={defaultInstitutionFavicon} alt="Logo" />
      </Box>
      <Heading as="h1" size="md" fontWeight="500" mt="27px">
        Profile creation
      </Heading>
      <Text mt="4" mb="10">
        Account verified please add your details and create a password.
      </Text>

      <Suspense fallback={<Spinner />}>
        <ProfileCreationForm />
      </Suspense>
    </>
  );
}

export default ProfileCreationPage;

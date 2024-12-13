import Image from "next/image";
import { Box, Text, Heading } from "@chakra-ui/react";

import { ScreenSizeNotSupportedIcon } from "../../../public/icons/screen-size-not-supported";
import defaultInstitutionFavicon from "../../../public/images/default-institution-favicon.svg";

function ScreenSizeWarning({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Box
        w="488px"
        maxW="100%"
        m="0 auto"
        px="2"
        textAlign="center"
        display={{ base: "block", desktop: "none" }}
      >
        <Image
          src={defaultInstitutionFavicon}
          alt="Logo"
          style={{ margin: "0 auto", marginTop: "27px" }}
        />
        <ScreenSizeNotSupportedIcon w="116px" h="92.8px" mt="116px" />
        <Heading
          as="h1"
          fontSize="20px"
          fontWeight="600"
          lineHeight="30px"
          mb="4"
          mt="56.2px"
          letterSpacing="normal"
        >
          Screen size not support yet
        </Heading>
        <Text color="gray.neutral.800">
          We are sorry but this screen size is not supported. Please switch to a
          screen larger than <strong>1024px</strong> wide
        </Text>
      </Box>
      <Box display={{ base: "none", desktop: "block" }}>{children}</Box>
    </>
  );
}

export default ScreenSizeWarning;

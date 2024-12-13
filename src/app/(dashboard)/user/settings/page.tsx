import { Box, Heading, Text } from "@chakra-ui/react";

function Settings() {
  return (
    <>
      <Box p="80px">
        <Heading
          as="h1"
          color="rgba(3, 10, 35, 0.80);"
          fontWeight="600"
          fontSize="30px"
          lineHeight="38px"
          letterSpacing="initial"
          pb="40px"
        >
          Settings
        </Heading>
        <Text color="gray.neutral.800" fontWeight="600" pb="6">
          Your accounts are managed by ASN, please reach out for any support
        </Text>
        <Text color="gray.neutral.800" fontWeight="600" pb="2">
          What we can help with:
        </Text>
        <Text color="gray.700">Technical issues</Text>
        <Text color="gray.700">Deleting coworking</Text>
        <Text color="gray.700">Building your RFP</Text>
        <Text color="gray.500" pt="6">
          Contact: Support@asn.com
        </Text>
      </Box>
    </>
  );
}

export default Settings;

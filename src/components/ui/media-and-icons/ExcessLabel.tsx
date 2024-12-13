import { Box } from "@chakra-ui/react";

interface ExcessLabelProps {
  fontSize?: string;
  label: string;
  bgColor?: string;
  color?: string;
}

export function ExcessLabel({
  color,
  bgColor,
  fontSize,
  label,
}: ExcessLabelProps) {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      border="1px solid"
      borderColor="gray.neutral.300"
      fontSize={fontSize ?? "13px"}
      w="32px"
      h="32px"
      color={color ?? "gray.neutral.500"}
      fontWeight="600"
      borderRadius="full"
      bg={bgColor ?? "white"}
      zIndex="1"
    >
      {label}
    </Box>
  );
}

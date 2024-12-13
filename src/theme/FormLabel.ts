import { defineStyle, defineStyleConfig } from "@chakra-ui/styled-system";

const baseStyle = defineStyle({
  color: "gray.neutral.800",
  fontSize: "sm",
  fontWeight: "semibold",
  lineHeight: "20px",
  textTransform: "capitalize",
  mr: 0,
  mb: "1",
});

export const formLabelTheme = defineStyleConfig({
  baseStyle,
});

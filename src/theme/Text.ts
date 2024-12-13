import { defineStyle, defineStyleConfig } from "@chakra-ui/styled-system";

const baseStyle = defineStyle({
  color: "gray.neutral.600",
});

const sizes = {
  xs: defineStyle({
    fontSize: "xs",
  }),
  sm: defineStyle({
    fontSize: "sm",
  }),
  md: defineStyle({
    fontSize: "md",
    lineHeight: "24px",
  }),
  lg: defineStyle({
    fontSize: "lg",
    lineHeight: "28px",
  }),
  xl: defineStyle({
    fontSize: "xl",
    lineHeight: "30px",
  }),
};

export const textTheme = defineStyleConfig({
  baseStyle,
  sizes,
  defaultProps: {
    size: "md",
  },
});

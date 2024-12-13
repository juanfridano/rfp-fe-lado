import { defineStyle, defineStyleConfig } from "@chakra-ui/styled-system";

const baseStyle = defineStyle({
  color: "gray.neutral.800",
});

const sizes = {
  xxs: defineStyle({
    fontSize: "xl",
    lineHeight: "30px",
  }),
  xs: defineStyle({
    fontSize: "2xl",
    lineHeight: "32px",
  }),
  sm: defineStyle({
    fontSize: "3xl",
    lineHeight: "38px",
  }),
  md: defineStyle({
    fontSize: "4xl",
    lineHeight: "44px",
    letterSpacing: "-0.72px",
  }),
  lg: defineStyle({
    fontSize: "5xl",
    lineHeight: "60px",
    letterSpacing: "-0.96px",
  }),
  xl: defineStyle({
    fontSize: "6xl",
    lineHeight: "72px",
    letterSpacing: "-1.2px",
  }),
  "2xl": defineStyle({
    fontSize: "7xl",
    lineHeight: "90px",
    letterSpacing: "-1.44px",
  }),
};

export const headingTheme = defineStyleConfig({
  baseStyle,
  sizes,
});

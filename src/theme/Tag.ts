import { tagAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers, defineStyle } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(tagAnatomy.keys);

const baseStyleContainer = definePartsStyle({
  container: {
    bg: "success.25",
    color: "success.700",
    letterSpacing: "0.2px",
  },
});

const sm = defineStyle({
  px: "10px",
  fontSize: "10px",
  fontWeight: "600",
  textTransform: "uppercase",
  borderRadius: "base",
  lineHeight: "20px",
});

const sizes = {
  sm: definePartsStyle({ container: sm, label: sm }),
};

const baseStyle = definePartsStyle({
  container: baseStyleContainer,
});

export const tagTheme = defineMultiStyleConfig({
  sizes,
  baseStyle,
  defaultProps: {
    size: "sm",
  },
  variants: {},
});

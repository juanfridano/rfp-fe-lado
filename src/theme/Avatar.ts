import { avatarAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers, defineStyle } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(avatarAnatomy.keys);

const baseStyle = definePartsStyle({
  group: {
    justifyContent: "flex-start",
    flexDir: "row",
  },
  container: {
    fontWeight: "600",
    order: 0,
    border: 0,
  },
  excessLabel: {
    bg: "white",
    border: "1px solid",
    borderColor: "gray.neutral.300",
    fontSize: "13px",
    fontWeight: "600",
    marginInlineStart: "0",
    zIndex: 1,
    order: 1,
    color: "gray.neutral.500",
  },
});

const sm = defineStyle({
  fontSize: "13px",
});

const md = defineStyle({
  fontSize: "sm",
});

const sizes = {
  small: definePartsStyle({ container: sm }),
  medium: definePartsStyle({ container: md }),
};

export const avatarTheme = defineMultiStyleConfig({
  baseStyle,
  sizes,
  defaultProps: { size: "medium" },
});

import { modalAnatomy as parts } from "@chakra-ui/anatomy";
import {
  createMultiStyleConfigHelpers,
  defineStyle,
} from "@chakra-ui/styled-system";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys);

const baseStyle = definePartsStyle({
  header: {
    padding: "0",
    fontSize: "xl",
    color: "gray.neutral.800",
    mb: "20px",
  },
  body: {
    padding: "0",
  },
  footer: {
    padding: "0",
    mt: "20px",
  },
  overlay: {
    bg: "rgb(12, 17, 29, 0.4)",
  },
  dialog: {
    borderRadius: "lg",
    padding: "6",
    boxShadow: "0px 12px 28px 0px rgba(0, 0, 0, 0.10)",
  },
  closeButton: {
    color: "gray.neutral.600",
    top: "6",
    right: "6",
  },
});

const md = defineStyle({
  width: "437px",
});

const sizes = {
  md: definePartsStyle({ dialog: md }),
};

export const modalTheme = defineMultiStyleConfig({
  baseStyle,
  sizes,
});

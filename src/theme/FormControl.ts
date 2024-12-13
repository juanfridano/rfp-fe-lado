import { formAnatomy as parts } from "@chakra-ui/anatomy";
import {
  createMultiStyleConfigHelpers,
  defineStyle,
} from "@chakra-ui/styled-system";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys);

const baseStyleHelperText = defineStyle({
  color: "gray.neutral.500",
  fontSize: "14px",
  lineHeight: "18px",
  padding: "0 14px",
  mt: "1",
});

const baseStyle = definePartsStyle({
  container: {
    mb: "24px",
  },
  helperText: baseStyleHelperText,
});

export const formTheme = defineMultiStyleConfig({
  baseStyle,
});

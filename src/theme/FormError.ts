import { formErrorAnatomy as parts } from "@chakra-ui/anatomy";
import {
  createMultiStyleConfigHelpers,
  defineStyle,
} from "@chakra-ui/styled-system";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys);

const baseStyleText = defineStyle({
  color: "error.800",
  fontSize: "13px",
  mt: "1",
  padding: "0 14px",
});

const baseStyle = definePartsStyle({
  text: baseStyleText,
});

export const formErrorTheme = defineMultiStyleConfig({
  baseStyle,
});

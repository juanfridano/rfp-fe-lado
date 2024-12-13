import { inputAnatomy as parts } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys);

const baseStyle = definePartsStyle({
  field: {},
});

const variantOutline = definePartsStyle(() => {
  return {
    addon: {
      minHeight: "48px",
    },
    field: {
      borderRadius: "base",
      backgroundColor: "white",
      px: "4",
      py: "3",
      minHeight: "48px",
      border: "1px solid",
      borderColor: "gray.neutral.300",
      color: "gray.neutral.800",
      _placeholder: {
        color: "gray.neutral.500",
        lineHeight: "24px",
      },
      _focus: {
        borderColor: "brand.700",
        boxShadow: "0 0 0 1px var(--chakra-colors-brand-700)",
        backgroundColor: "white",
      },
      _disabled: {
        backgroundColor: "gray.neutral.100",
        color: "gray.neutral.500",
        cursor: "not-allowed",
        opacity: 1,
      },
      _invalid: {
        backgroundColor: "gray.neutral.100",
        color: "gray.neutral.500",
        borderColor: "error.800",
        boxShadow: "none",
      },
    },
    element: {
      minHeight: "48px",
    },
  };
});

export const inputTheme = defineMultiStyleConfig({
  baseStyle,
  variants: {
    outline: variantOutline,
  },
  defaultProps: {
    variant: "outline",
  },
});

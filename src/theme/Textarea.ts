import { defineStyle, defineStyleConfig } from "@chakra-ui/styled-system";

const baseStyle = defineStyle({
  borderRadius: "base",
});

const variants = {
  outline: defineStyle({
    border: "1px solid",
    borderColor: "gray.neutral.300",
    padding: "12px 16px",
    _placeholder: {
      color: "gray.neutral.500",
      lineHeight: "24px",
    },
    _focus: {
      borderColor: "brand.700",
      boxShadow: "0 0 0 1px var(--chakra-colors-brand-700)",
      backgroundColor: "white",
    },
  }),
};

export const textareaTheme = defineStyleConfig({
  baseStyle,
  variants,
  defaultProps: {
    variant: "outline",
  },
});

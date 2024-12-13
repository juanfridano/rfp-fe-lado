import { defineStyle, defineStyleConfig } from "@chakra-ui/styled-system";

const baseStyle = defineStyle({
  fontFamily: "body",
  fontStyle: "normal",
  fontWeight: "600",
  borderRadius: "base",
  lineHeight: "6",
});

const sizes = {
  sm: defineStyle({
    fontSize: "sm",
    py: 1,
    height: "auto",
    letterSpacing: "0.42px",
  }),
  md: defineStyle({
    fontSize: "sm",
    px: 8,
    py: 2,
    height: "auto",
    letterSpacing: "0.42px",
  }),
  lg: defineStyle({
    fontSize: "md",
    px: 8,
    py: 3,
    height: "auto",
    letterSpacing: "0.48px",
  }),
};

const primary = defineStyle(() => {
  return {
    background: "brand.700",
    color: "white",
    _hover: {
      background: "brand.800",
      _disabled: {
        background: "brand.400",
      },
    },
    _disabled: {
      background: "brand.400",
      opacity: 1,
    },
  };
});

const secondary = defineStyle(() => {
  return {
    background: "white",
    color: "gray.neutral.800",
    border: "1px solid",
    borderColor: "gray.neutral.200",
    _hover: {
      backgroundColor: "brand.25",
      borderColor: "gray.neutral.400",
      _disabled: {
        borderColor: "gray.neutral.400",
      },
    },
    _disabled: {
      borderColor: "gray.neutral.400",
      opacity: 1,
      color: "gray.neutral.500",
    },
  };
});

const destruction = defineStyle(() => {
  return {
    background: "error.800",
    color: "white",
    _hover: {
      background: "error.900",
      _disabled: {
        background: "error.500",
      },
    },
    _disabled: {
      background: "error.500",
      opacity: 1,
    },
  };
});

const link = defineStyle(() => {
  return {
    px: 0,
    py: 0,
    background: "transparent",
    color: "brand.700",
    _hover: {
      color: "brand.800",
      textDecoration: "none",
      _disabled: {
        color: "gray.neutral.500",
      },
    },
    _disabled: {
      color: "gray.neutral.500",
      cursor: "not-allowed",
    },
  };
});

const iconPrimary = defineStyle(() => {
  return {
    fontSize: "2xl",
    color: "transparent",
    background: "brand.700",
    _hover: {
      background: "brand.800",
      _disabled: {
        background: "brand.400",
      },
    },
    _disabled: {
      background: "brand.400",
      opacity: 1,
    },
  };
});

const iconSecondary = defineStyle(() => {
  return {
    fontSize: "2xl",
    background: "white",
    color: "gray.neutral.800",
    border: "1px solid",
    borderColor: "gray.neutral.200",
    _hover: {
      backgroundColor: "brand.25",
      borderColor: "gray.neutral.400",
      _disabled: {
        borderColor: "gray.neutral.400",
      },
    },
    _disabled: {
      borderColor: "gray.neutral.400",
      opacity: 1,
      color: "gray.neutral.500",
    },
  };
});

const iconDestruction = defineStyle(() => {
  return {
    fontSize: "2xl",
    background: "error.800",
    color: "white",
    _hover: {
      background: "error.900",
      _disabled: {
        background: "error.500",
      },
    },
    _disabled: {
      background: "error.500",
      opacity: 1,
    },
  };
});

const iconSecondaryNav = defineStyle(() => {
  return {
    fontSize: "2xl",
    color: "gray.neutral.500",
    _hover: {
      backgroundColor: "brand.25",
      borderColor: "gray.neutral.400",
      _disabled: {
        borderColor: "gray.neutral.400",
      },
    },
    _disabled: {
      borderColor: "gray.neutral.200",
      opacity: 1,
      color: "gray.neutral.500",
    },
  };
});

export const buttonTheme = defineStyleConfig({
  baseStyle,
  sizes,
  variants: {
    primary,
    secondary,
    destruction,
    link,
    iconPrimary,
    iconSecondary,
    iconDestruction,
    iconSecondaryNav,
  },
  defaultProps: {
    size: "md",
    variant: "primary",
  },
});

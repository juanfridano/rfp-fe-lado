import { extendTheme } from "@chakra-ui/react";

import { buttonTheme } from "./Button";
import { headingTheme } from "./Heading";
import { textTheme } from "./Text";
import { formTheme } from "./FormControl";
import { formLabelTheme } from "./FormLabel";
import { formErrorTheme } from "./FormError";
import { textareaTheme } from "./Textarea";
import { avatarTheme } from "./Avatar";
import { inputTheme } from "./Input";
import { tagTheme } from "./Tag";
import { modalTheme } from "./Modal";

export const theme = extendTheme({
  fonts: {
    body: "var(--font-inter)",
    heading: "var(--font-inter)",
  },
  colors: {
    brand: {
      25: "#EAECF2",
      50: "#D5DAE5",
      400: "#6D7CA4",
      500: "#586997",
      700: "#2E447D",
      800: "#273A6C",
    },
    gray: {
      700: "#344054",
      800: "#182230",
      950: "#0C111D",
      neutral: {
        25: "#FCFCFD",
        50: "#F9FAFB",
        100: "#F3F4F6",
        200: "#E5E7EB",
        300: "#D2D6DB",
        400: "#9DA4AE",
        500: "#6C737F",
        600: "#4D5761",
        800: "#1F2A37",
      },
    },
    yellow: {
      700: "#A57C37",
    },
    orange: {
      700: "#AC552A",
    },
    success: {
      25: "#E8F1F2",
      700: "#1D777D",
    },
    warning: {
      25: "#FFFCF5",
    },
    error: {
      25: "#F5E9EC",
      500: "#B9667A",
      700: "#9B2541",
      800: "#811D34",
      900: "#67182B",
    },
  },
  breakpoints: {
    base: "0px",
    sm: "320px",
    md: "768px",
    lg: "960px",
    desktop: "1024px",
    xl: "1200px",
    "2xl": "1536px",
  },
  components: {
    Button: buttonTheme,
    Heading: headingTheme,
    Text: textTheme,
    Input: inputTheme,
    Form: formTheme,
    FormLabel: formLabelTheme,
    FormError: formErrorTheme,
    Textarea: textareaTheme,
    Avatar: avatarTheme,
    Tag: tagTheme,
    Modal: modalTheme,
  },
});

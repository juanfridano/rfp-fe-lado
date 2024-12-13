import localFont from "next/font/local";

const Inter = localFont({
  src: [
    {
      path: "./Inter-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Inter-Italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "./Inter-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./Inter-MediumItalic.woff2",
      weight: "500",
      style: "italic",
    },
    {
      path: "./Inter-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./Inter-SemiBoldItalic.woff2",
      weight: "600",
      style: "italic",
    },
    {
      path: "./Inter-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./Inter-BoldItalic.woff2",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-inter",
});

export const fonts = {
  Inter,
};

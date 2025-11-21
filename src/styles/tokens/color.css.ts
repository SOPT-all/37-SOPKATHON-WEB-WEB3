import { createGlobalTheme } from "@vanilla-extract/css";

export const colors = createGlobalTheme(":root", {
  white: "#ffffff",
  black: "#000000",

  gray900: "#131313",
  gray800: "#1a1a1a",
  gray700: "#232428",
  gray600: "#3d3d3d",
  gray500: "#676767",
  gray400: "#999999",
  gray300: "#cccccc",
  gray200: "#e0e0e0",
  gray100: "#f5f5f5",
  gray0: "#ffffff",
});

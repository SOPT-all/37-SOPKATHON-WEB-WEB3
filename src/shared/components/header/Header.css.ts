import { themeVars } from "@/styles/theme.css";
import { style, styleVariants } from "@vanilla-extract/css";

export const headerStyle = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0.75rem",
  backgroundColor: "white",
  minHeight: "3rem",
});

export const backButtonStyle = style({
  backgroundColor: "transparent",
  border: "none",
  cursor: "pointer",
  padding: "0.5rem",
  fontSize: "1.2rem",
  color: "black",
  fontFamily: "inherit",
});

export const checkButtonStyle = style({
  ...themeVars.fontStyles.body_sb_16,
  color: themeVars.color.green500,
  backgroundColor: "transparent",
  cursor: "pointer",
  marginLeft: "auto",
});
import { style } from "@vanilla-extract/css";

export const headerStyle = style({
  display: "flex",
  alignItems: "center",
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


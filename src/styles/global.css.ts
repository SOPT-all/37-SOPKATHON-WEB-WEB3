import { globalStyle } from "@vanilla-extract/css";

globalStyle("html", {
  fontSize: "62.5%", 
});

globalStyle("html, body, #root", {
  height: "100%",
  margin: 0,
  padding: 0,
  overflow: "hidden",
});

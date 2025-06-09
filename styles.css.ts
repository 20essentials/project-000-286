import { style, globalStyle } from "@vanilla-extract/css";

// Global reset
globalStyle("*", {
  boxSizing: "border-box",
  margin: 0,
  padding: 0,
  WebkitTapHighlightColor: "transparent",
});
globalStyle("*::before", {
  boxSizing: "inherit",
});
globalStyle("*::after", {
  boxSizing: "inherit",
});

export const body = style({
  height: "100vh",
  width: "100%",
  overflow: "hidden",
  display: "flex",
  flexWrap: "wrap",
  placeContent: "center",
  backgroundColor: "#000",
});

export const canvas = style({
  position: "fixed",
  inset: 0,
  backgroundColor: "#000",
});

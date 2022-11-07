import { Button, ListItem, styled } from "@mui/material";

export const GeneralButton = styled(Button)({
  border: "2px solid grey",
  ":hover": { border: "2px solid #1B70BB" },
});

export const MenuListItem = styled(ListItem)({
  padding: "2rem",
  ":hover": { backgroundColor: "white" },
});

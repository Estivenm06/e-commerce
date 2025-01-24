import React from "react";
import {
  List,
  ListItem,
  Divider,
  ListItemText,
  ListItemAvatar,
  Typography,
  Avatar,
} from "@mui/material";

const truncateText = (title) => {
  const keywords = title.split(/\s+/).slice(0, 3).join(" ");
  return keywords;
};

export const ListFilter = ({ item }) => {
  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "white" }}>
        <ListItem alignItems="flex-start">
        <ListItemAvatar sx={{ objectFit: "contain" }}>
          <Avatar alt={item.image} src={item.image} variant="rounded" />
        </ListItemAvatar>
        <ListItemText
          primary={truncateText(item.title)}
          secondary={
            <React.Fragment>
              <Typography
                component={"span"}
                variant="body2"
                sx={{ color: "grey", display: "inline" }}
              >
                {truncateText(item.description)}
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider />
    </List>
  );
};

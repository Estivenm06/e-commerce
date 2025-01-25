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


export const ListFilter = ({ item }) => {
  const truncateText = (text) => {
    if (text.length > 50){
      return text.substring(0, 50) + '...'
    }
    return text
  };
  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "white" }}>
        <ListItem alignItems="flex-start">
        <ListItemAvatar sx={{minWidth: '50px', marginRight: 1}}>
          <Avatar alt={item.image} sx={{ width: 40, height: 40, objectFit: 'cover'}} src={item.image}/>
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

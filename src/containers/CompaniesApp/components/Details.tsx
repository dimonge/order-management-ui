import React from "react"
import BaseCard from "@/components/FrontOfficeComponents/BaseCard"
import BaseDivider from "@/components/BaseDivider"
import { List, ListItem, ListItemText, Typography } from "@mui/material";

const Details = () => {
  return (
    <BaseCard>
      <Typography gutterBottom variant="h5" component="div">
        Basic Details
      </Typography>
      <List sx={{ width: '100%', bgColor: 'background.paper' }}>
        <ListItem>
          <ListItemText primary="Name"></ListItemText>
          <ListItemText primary="Shodeinde Peter"></ListItemText>
        </ListItem>
        <BaseDivider />
        <ListItem>
          <ListItemText primary="Type"></ListItemText>
          <ListItemText primary="Fleet manager"></ListItemText>
        </ListItem>
        <BaseDivider />
        <ListItem>
          <ListItemText primary="Phone"></ListItemText>
          <ListItemText primary="+55 748 327 439"></ListItemText>
        </ListItem>
        <BaseDivider />
        <ListItem>
          <ListItemText primary="Business domain"></ListItemText>
          <ListItemText primary="Grocery"></ListItemText>
        </ListItem>
        <BaseDivider />
        <ListItem>
          <ListItemText primary="Address"></ListItemText>
          <ListItemText primary="Rantakiventie 20 A 5"></ListItemText>
        </ListItem>
        <BaseDivider />
        <ListItem>
          <ListItemText primary="Postal code"></ListItemText>
          <ListItemText primary="00960"></ListItemText>
        </ListItem>
        <BaseDivider />
        <ListItem>
          <ListItemText primary="City"></ListItemText>
          <ListItemText primary="Helsinki"></ListItemText>
        </ListItem>
      </List>
    </BaseCard>
  )
}

export default Details;
import React from "react";
import { useTheme } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import QrCodeIcon from "@mui/icons-material/QrCode";
import CheckIcon from "@mui/icons-material/Check";

const ProfileInfo = ({ name, mail, pase, pcr }) => {
  const theme = useTheme();

  return (
    <Paper
      sx={{
        width: "100%",
      }}
    >
      <List>
        <ListItem>
          <ListItemAvatar>
            <Avatar sx={{ backgroundColor: theme.palette.primary.dark }}>
              <PersonIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary="Nombre"
            secondary={name}
            secondaryTypographyProps={{
              color: theme.palette.primary.dark,
              paddingLeft: 2,
            }}
          />
        </ListItem>

        <ListItem>
          <ListItemAvatar>
            <Avatar sx={{ backgroundColor: theme.palette.primary.dark }}>
              <EmailIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary="Mail"
            secondary={mail}
            secondaryTypographyProps={{
              color: theme.palette.primary.dark,
              paddingLeft: 2,
            }}
          />
        </ListItem>

        <ListItem>
          <ListItemAvatar>
            <Avatar sx={{ backgroundColor: theme.palette.primary.dark }}>
              <QrCodeIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary="Pase de movilidad"
            secondary={pase}
            secondaryTypographyProps={{
              color: theme.palette.primary.dark,
              paddingLeft: 2,
            }}
          />
        </ListItem>

        <ListItem>
          <ListItemAvatar>
            <Avatar sx={{ backgroundColor: theme.palette.primary.dark }}>
              <CheckIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary="Ultimo PCR"
            secondary={pcr}
            secondaryTypographyProps={{
              color: theme.palette.primary.dark,
              paddingLeft: 2,
            }}
          />
        </ListItem>
      </List>
    </Paper>
  );
};
export default ProfileInfo;

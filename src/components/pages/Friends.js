import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import GroupIcon from "@mui/icons-material/Group";
import SearchIcon from "@mui/icons-material/Search";
import InputIcon from "../InputIcon";
import FriendsListMobile from "../FriendsListMobile";
import FriendsList from "../FriendsList";
import Title from "../Title";
import AddIcon from "@mui/icons-material/Add";

const FriendsListData = [
  {
    name: "Juan",
    username: "@Juan1",
  },
  {
    name: "Pedro",
    username: "@Pedro1",
  },
  {
    name: "Marcelo",
    username: "@Marcelo1",
  },
  {
    name: "Juan",
    username: "@Juan2",
  },
  {
    name: "Pedro",
    username: "@Pedro2",
  },
  {
    name: "Marcelo",
    username: "@Marcelo2",
  },
  {
    name: "Juan",
    username: "@Juan3",
  },
  {
    name: "Pedro",
    username: "@Pedro3",
  },
  {
    name: "Marcelo",
    username: "@Marcelo3",
  },
  {
    name: "Juan",
    username: "@Juan4",
  },
];

const Friends = () => {
  // eslint-disable-next-line
  const [friends, setFriends] = useState(FriendsListData);
  const [filter, setFilter] = useState("");
  const [filteredFriends, setFilteredFriends] = useState([]);

  useEffect(() => {
    setFilteredFriends([]);
    if (filter) {
      var resultFriends = [];
      friends.forEach((friend) => {
        if (
          friend.name?.toLowerCase().includes(filter) ||
          friend.username?.toLowerCase().includes(filter)
        ) {
          resultFriends = resultFriends.concat([friend]);
        }
      });
      setFilteredFriends(resultFriends);
    } else {
      setFilteredFriends(friends);
    }
    // eslint-disable-next-line
  }, [filter]);

  return (
    <Box>
      <Title
        Title="Lista de amigos"
        titleIcon={GroupIcon}
        actionIcon={AddIcon}
      />

      <Box sx={{ pt: 1, px: { xs: 1, sm: 3, md: 5, lg: 10 } }}>
        <Grid container>
          <Grid
            item
            xs={0}
            sm={5}
            sx={{ display: { xs: "none", sm: "inline" } }}
          >
            <Typography variant="h5" component="h2" sx={{ ml: 1, mt: 2 }}>
              {filteredFriends.length} Amigos
            </Typography>
          </Grid>
          <Grid
            item
            sx={{
              display: "flex",
              justifyContent: { xs: "center", sm: "flex-end" },
              p: 1,
            }}
            xs={12}
            sm={7}
          >
            <InputIcon
              label="Buscar amigo"
              leftIcon={SearchIcon}
              width={{ xs: 800, sm: 200, md: 300 }}
              handler={setFilter}
              delay={500}
            />
          </Grid>
          <Grid item xs={12} sm={0}>
            <Typography
              variant="h5"
              component="h2"
              sx={{ ml: 1, mt: 2, display: { sm: "none" } }}
            >
              {filteredFriends.length} Amigos
            </Typography>
          </Grid>
        </Grid>
        <Box sx={{ display: { xs: "block", sm: "none" } }}>
          <FriendsListMobile data={filteredFriends} />
        </Box>
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          <FriendsList data={filteredFriends} />
        </Box>
      </Box>
    </Box>
  );
};
export default Friends;

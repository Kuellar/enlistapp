import React from "react";
import List from "@mui/material/List";
import FriendMobile from "./FriendMobile";

const FriendsListMobile = ({ data }) => {
  return (
    // <List sx={{ height: "70vh", overflow: "scroll" }}>
    <List>
      {data?.map((friend, i) => (
        <FriendMobile
          name={friend.name}
          username={friend.username}
          key={friend.username + "-movile"}
        />
      ))}
    </List>
  );
};
export default FriendsListMobile;

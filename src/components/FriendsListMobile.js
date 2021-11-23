import React from "react";
import List from "@mui/material/List";
import FriendMobile from "./FriendMobile";

const FriendsListMobile = ({ data }) => {
  return (
    <List sx={{ height: "70vh", overflow: "scroll" }}>
      {data?.map((friend) => (
        <FriendMobile name={friend.name} username={friend.username} />
      ))}
    </List>
  );
};
export default FriendsListMobile;

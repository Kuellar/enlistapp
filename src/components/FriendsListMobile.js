import React from "react";
import List from "@mui/material/List";
import FriendMobile from "./FriendMobile";

const FriendsListMobile = ({ data, event }) => {
  return event ? (
    <List sx={{ height: "30vh", overflow: "scroll" }}>
      {data?.map((friend, i) => (
        <FriendMobile
          name={friend.name}
          username={friend.username}
          key={friend.username + "-movile"}
          event={event}
        />
      ))}
    </List>
  ) : (
    <List>
      {data?.map((friend, i) => (
        <FriendMobile
          name={friend.name}
          username={friend.username}
          key={friend.username + "-movile"}
          event={event}
        />
      ))}
    </List>
  );
};
export default FriendsListMobile;

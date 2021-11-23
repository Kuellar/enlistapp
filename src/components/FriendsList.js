import React from "react";
import Grid from "@mui/material/Grid";
import Friend from "./Friend";

const FriendsList = ({ data }) => {
  return (
    <Grid
      container
      sx={{ height: "75vh", overflow: "scroll", px: { md: 2, lg: 5, xl: 10 } }}
    >
      <Grid item sm={4}>
        {data?.map(
          (friend, i) =>
            i % 3 === 0 && (
              <Friend name={friend.name} username={friend.username} />
            )
        )}
      </Grid>
      <Grid item sm={4}>
        {data?.map(
          (friend, i) =>
            i % 3 === 1 && (
              <Friend name={friend.name} username={friend.username} />
            )
        )}
      </Grid>
      <Grid item sm={4}>
        {data?.map(
          (friend, i) =>
            i % 3 === 2 && (
              <Friend name={friend.name} username={friend.username} />
            )
        )}
      </Grid>
    </Grid>
  );
};
export default FriendsList;

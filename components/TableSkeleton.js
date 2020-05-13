import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Skeleton from "@material-ui/lab/Skeleton";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "80%",
    margin: "0 auto 20% auto",
  },
  skeletonTable: {
    padding: "5% 0 5% 0",
    margin: "0 auto",
  },
  skeletonRow: {
    margin: "0 auto",
  },
}));

export default function TableSkeleton() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper className={classes.skeletonTable} elevation={3}>
        <Skeleton
          className={classes.skeletonRow}
          variant="rect"
          width={"80%"}
          height={80}
        />
        <Skeleton
          className={classes.skeletonRow}
          variant="text"
          width={"80%"}
          height={40}
        />
        <Skeleton
          className={classes.skeletonRow}
          variant="text"
          width={"80%"}
          height={40}
        />
        <Skeleton
          className={classes.skeletonRow}
          variant="text"
          width={"80%"}
          height={40}
        />
        <Skeleton
          className={classes.skeletonRow}
          variant="text"
          width={"80%"}
          height={40}
        />
        <Skeleton
          className={classes.skeletonRow}
          variant="text"
          width={"80%"}
          height={40}
        />
        <Skeleton
          className={classes.skeletonRow}
          variant="text"
          width={"80%"}
          height={40}
        />
      </Paper>
    </div>
  );
}

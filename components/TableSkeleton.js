import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Skeleton from "@material-ui/lab/Skeleton";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    margin: "0 auto 10% auto",
  },
  skeletonTable: {
    padding: "2% 0 2% 0",
    margin: "5% auto 5% auto",
  },
  skeletonRow: {
    margin: "0 auto",
  },
}));

const rowStyles = {
  width: "95%",
  height: 40,
  firstRowHeight: {
    height: 80,
  },
};

export default function TableSkeleton() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper className={classes.skeletonTable} elevation={3}>
        <Skeleton
          className={classes.skeletonRow}
          variant="rect"
          width={rowStyles.width}
          height={rowStyles.firstRowHeight.height}
        />
        <Skeleton
          className={classes.skeletonRow}
          variant="text"
          width={rowStyles.width}
          height={rowStyles.height}
        />
        <Skeleton
          className={classes.skeletonRow}
          variant="text"
          width={rowStyles.width}
          height={rowStyles.height}
        />
        <Skeleton
          className={classes.skeletonRow}
          variant="text"
          width={rowStyles.width}
          height={rowStyles.height}
        />
        <Skeleton
          className={classes.skeletonRow}
          variant="text"
          width={rowStyles.width}
          height={rowStyles.height}
        />
        <Skeleton
          className={classes.skeletonRow}
          variant="text"
          width={rowStyles.width}
          height={rowStyles.height}
        />
        <Skeleton
          className={classes.skeletonRow}
          variant="text"
          width={rowStyles.width}
          height={rowStyles.height}
        />
      </Paper>
    </div>
  );
}

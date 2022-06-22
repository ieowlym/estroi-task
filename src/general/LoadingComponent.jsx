import * as React from "react";
import Stack from "@mui/material/Stack";
import LinearProgress from "@mui/material/LinearProgress";

export const LoadingComponent = () => {
  return (
    <div style={{ width: "939px" }}>
      <Stack sx={{ width: "100%", color: "grey.500" }} spacing={2}>
        <LinearProgress color="inherit" />
      </Stack>
    </div>
  );
};

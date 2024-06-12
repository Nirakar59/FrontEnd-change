import React from "react";
import { Box, Grid, IconButton, Typography, Link, Stack } from "@mui/material";

function AppFooter() {
  return (
    <Box>
      <Grid container>
        <Grid
          item
          md="4"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography>LOGO</Typography>
        </Grid>
        <Grid
          item
          md="4"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Typography variant="body1">Links</Typography>
          <Stack>
            <Link href="#">Link</Link>
            <Link href="#">Link</Link>
            <Link href="#">Link</Link>
          </Stack>
        </Grid>

        <Grid
          item
          md="4"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Typography variant="body1">Links</Typography>
          <Stack>
            <Link href="#">Link</Link>
            <Link href="#">Link</Link>
            <Link href="#">Link</Link>
          </Stack>
        </Grid>

        <Grid item md="12">
          <Typography
            variant="body2"
            sx={{
              bgcolor: "black",
              color: "white",
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
              padding: "10px 0px",
            }}
          >
            &copy; {new Date().getFullYear()} Copyright
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default AppFooter;

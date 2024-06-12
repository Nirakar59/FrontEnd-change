import React from "react";
import { Box, Grid, IconButton, Typography, Link, Stack } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
function AppFooter() {
  return (
    <Box>
      <Grid container sx={{ padding: "10px 0px" }}>
        <Grid
          item
          md="3"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Typography>LOGO</Typography>
          <Grid item>
            <IconButton>
              <FacebookIcon sx={{ fontSize: "22px" }} />
            </IconButton>
            <IconButton>
              <XIcon sx={{ fontSize: "22px" }} />
            </IconButton>
            <IconButton>
              <WhatsAppIcon sx={{ fontSize: "22px" }} />
            </IconButton>
          </Grid>
        </Grid>
        <Grid
          item
          md="3"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Stack spacing={2}>
            <Typography variant="body1">About</Typography>
            <Link href="#" sx={{ textDecoration: "none" }}>
              Doctor
            </Link>
            <Link href="#" sx={{ textDecoration: "none" }}>
              Link
            </Link>
            <Link href="#" sx={{ textDecoration: "none" }}>
              Link
            </Link>
            <Link href="#" sx={{ textDecoration: "none" }}>
              Link
            </Link>
            <Link href="#" sx={{ textDecoration: "none" }}>
              Link
            </Link>
          </Stack>
        </Grid>

        <Grid
          item
          md="3"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Stack spacing={2}>
            <Typography variant="body1">About</Typography>
            <Link href="#" sx={{ textDecoration: "none" }}>
              Doctor
            </Link>
            <Link href="#" sx={{ textDecoration: "none" }}>
              Link
            </Link>
            <Link href="#" sx={{ textDecoration: "none" }}>
              Link
            </Link>
            <Link href="#" sx={{ textDecoration: "none" }}>
              Link
            </Link>
            <Link href="#" sx={{ textDecoration: "none" }}>
              Link
            </Link>
          </Stack>
        </Grid>
        <Grid
          item
          md="3"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Stack spacing={2}>
            <Typography variant="body1">About</Typography>
            <Link href="#" sx={{ textDecoration: "none" }}>
              Doctor
            </Link>
            <Link href="#" sx={{ textDecoration: "none" }}>
              Link
            </Link>
            <Link href="#" sx={{ textDecoration: "none" }}>
              Link
            </Link>
            <Link href="#" sx={{ textDecoration: "none" }}>
              Link
            </Link>
            <Link href="#" sx={{ textDecoration: "none" }}>
              Link
            </Link>
          </Stack>
        </Grid>
      </Grid>
      <Grid container>
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

import React from "react";
import { Box, Typography, Link, Grid, Container } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";

function AppFooter() {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "primary.main",
        color: "white",
        py: 3,
        mt: "auto",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="body1" align="center">
              UCSF Department of Psychiatry and Behavioral Sciences
            </Typography>
            <Typography variant="body2" align="center">
              675 18th St.
              <br />
              San Francisco, CA 94143
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2" align="center" component="div">
              <Link href="#" color="inherit" underline="none" sx={{ mx: 1 }}>
                Contact Us
              </Link>
              <Link href="#" color="inherit" underline="none" sx={{ mx: 1 }}>
                Help Paying Your Bill
              </Link>
              <Link href="#" color="inherit" underline="none" sx={{ mx: 1 }}>
                Accessibility
              </Link>
              <Link href="#" color="inherit" underline="none" sx={{ mx: 1 }}>
                Privacy Policy
              </Link>
              <Link href="#" color="inherit" underline="none" sx={{ mx: 1 }}>
                Terms of Use
              </Link>
              <Link href="#" color="inherit" underline="none" sx={{ mx: 1 }}>
                A-Z Website List
              </Link>
              <Link href="#" color="inherit" underline="none" sx={{ mx: 1 }}>
                UCSF Main Site
              </Link>
              <Link href="#" color="inherit" underline="none" sx={{ mx: 1 }}>
                DPBS Intranet
              </Link>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2" align="center">
              © 2023 The Regents of the University of California
            </Typography>
          </Grid>
          <Grid item xs={12} sx={{ textAlign: "center", mt: 1 }}>
            <Link href="#" color="inherit" sx={{ mx: 1 }}>
              <TwitterIcon />
            </Link>
            <Link href="#" color="inherit" sx={{ mx: 1 }}>
              <FacebookIcon />
            </Link>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default AppFooter;
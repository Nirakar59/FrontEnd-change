import {
  Avatar,
  Button,
  Card,
  CardContent,
  CardHeader,
  Tab,
  Tabs,
  Typography,
  Box,
  Grid,
  IconButton,
  Stack,
  Paper,
} from "@mui/material";
import MessageIcon from "@mui/icons-material/Message";

import StarIcon from "@mui/icons-material/Star";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DoctorProfileUpdate from "./updateDoctor";




function DoctorProfile() {
  return (
    <Stack m={"10px"} borderRadius={"10px"}>
      <Paper elevation={"3"}>
        <Grid container>
          <Grid
            item
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <IconButton>
              <ArrowBackIcon />
            </IconButton>
            <Typography variant="h6">Doctor Profile</Typography>
          </Grid>
        </Grid>
        <Card>
          <Grid container>
            <Grid item md="6">
              <CardHeader
                avatar={
                  <Avatar
                    alt="Doc Profile"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHDRlp-KGr_M94k_oor4Odjn2UzbAS7n1YoA&s"
                    sx={{ width: 100, height: 100 }}
                  />
                }
                title="Aakash Shrestha"
                titleTypographyProps={{ variant: "h5" }}
                subheader="Cardiology Specialist"
              />
            </Grid>
            <Grid
              item
              md="6"
              sx={{ display: "flex", justifyContent: "flex-end" }}
            >
              <Box mt={2} mr={2} height="50px" sx={{ display: "flex", gap: 2 }}>
                <Button variant="contained" startIcon={<MessageIcon />}>
                  Send message
                </Button>
                <Button variant="contained" color="primary" ml={2}>
                  Make appointment
                </Button>
              </Box>
            </Grid>
          </Grid>

          <CardContent>
            <Box display="flex" alignItems="center" mb={2}>
              <StarIcon color="primary" />
              <Typography
                vundefinednt="body2"
                color="textSecondary"
                component="span"
                ml={1}
              >
                5.0
              </Typography>
            </Box>
      
            <Grid container padding={"0px 5px"}>
              <Grid item>
                <Typography variant="h5" mt={2} fontWeight={"bold"}>
                  About specialist
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Orthopedist. He treats injuries and chronic musculoskeletal
                  ailments. Especially in athletes, but not only. He gained his
                  professional experience working for several years at the
                  Carolina Medical Center in... Orthopedist. He treats injuries
                  and chronic musculoskeletal ailments. Especially in athletes,
                  but not only. He gained his professional experience working
                  for several years at the Carolina Medical Center in
                  Orthopedist. He treats injuries and chronic musculoskeletal
                  ailments. Especially in athletes, but not only. He gained his
                  professional experience working for several years at the
                  Carolina Medical Center in
                </Typography>
              </Grid>
            </Grid>

            <Button size="small" color="primary">
              Read more
            </Button>
          </CardContent>

          <DoctorProfileUpdate/>
        </Card>
      </Paper>
    </Stack>
  );
}

export default DoctorProfile;

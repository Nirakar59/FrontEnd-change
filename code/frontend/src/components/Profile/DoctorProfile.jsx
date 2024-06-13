import Appointment from "../Appointment/Appointment";
import DoctorProfileUpdate from "./updateDoctor";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  IconButton,
  Drawer,
  List,
  Grid,
  Card,
  CardContent,
  CardActionArea,
  CardMedia,
  ListItem,
  ListItemText,
  TextField,
  Menu,
  MenuItem,
  useMediaQuery,
  createTheme, // Import createTheme
} from "@mui/material";
export default function DoctorProfile(){
  return(
    <>

    <Grid container>
      <Grid item md={5}>
      <DoctorProfileUpdate/>



      </Grid>

      <Grid  item md={5}>
      <Appointment/>
      </Grid>



    </Grid>

    </>
  )
}
import React, { useState } from "react";
import {
  Container,
  Typography,
  Box,
  TextField,
  Button,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { v4 as uuidv4 } from "uuid";

const Appointment = () => {
  const [availableSlots, setAvailableSlots] = useState([]);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [patientAppointments, setPatientAppointments] = useState([
    {
      id: 1,
      name: "John Doe",
      dob: "1990-01-15",
      address: "123 Main St",
      contact: "+1234567890",
      datetime: "2024-06-14 10:00",
    },
    {
      id: 2,
      name: "Jane Smith",
      dob: "1985-08-20",
      address: "456 Elm St",
      contact: "+1987654321",
      datetime: "2024-06-14 11:00",
    },
  ]);

  const handleAddSlot = () => {
    if (date && time) {
      setAvailableSlots([...availableSlots, { id: uuidv4(), date, time }]);
      setDate("");
      setTime("");
    }
  };

  const handleDeleteSlot = (id) => {
    setAvailableSlots(availableSlots.filter((slot) => slot.id !== id));
  };

  return (
    <Box sx={{ m: 4 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Manage Appointments
      </Typography>

      <Box sx={{ my: 4 }}>
        <Typography variant="h5" component="h3" gutterBottom>
          Add Available Slots
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={5}>
            <TextField
              label="Date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item xs={5}>
            <TextField
              label="Time"
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item xs={2}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleAddSlot}
              fullWidth
            >
              Add
            </Button>
          </Grid>
        </Grid>
        <List>
          {availableSlots.map((slot) => (
            <ListItem key={slot.id}>
              <ListItemText primary={`${slot.date} ${slot.time}`} />
              <ListItemSecondaryAction>
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => handleDeleteSlot(slot.id)}
                >
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </Box>

      <Box sx={{ my: 4 }}>
        <Typography variant="h5" component="h3" gutterBottom>
          Patient Appointments
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Date of Birth</TableCell>
                <TableCell>Address</TableCell>
                <TableCell>Contact</TableCell>
                <TableCell>Date & Time</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {patientAppointments.map((appointment) => (
                <TableRow key={appointment.id}>
                  <TableCell>{appointment.name}</TableCell>
                  <TableCell>{appointment.dob}</TableCell>
                  <TableCell>{appointment.address}</TableCell>
                  <TableCell>{appointment.contact}</TableCell>
                  <TableCell>{appointment.datetime}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default Appointment;

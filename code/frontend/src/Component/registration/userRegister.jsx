// import React, { useState, useEffect, useRef } from "react";
// import {
//   TextField,
//   Button,
//   Grid,
//   Typography,
//   Container,
//   Box,
//   MenuItem, // Import MenuItem for the dropdown
// } from "@mui/material";

// function RegistrationForm() {
//   const [formData, setFormData] = useState({
//     userType: "", // Add userType field to formData
//     username: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//     doctorField: "", // Add specific fields for Doctor
//     anonymousUserField: "", // Add specific fields for Anonymous User
//     meditatorField: "", // Add specific fields for Meditator
//   });

//   const [errors, setErrors] = useState({});
//   const formRef = useRef(null);

//   useEffect(() => {
//     // Fetch initial data if necessary
//     fetch("http://127.0.0.1:8000/sushtiti/account/auth/usersList/", {
//       method: "GET",
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data);
//         // Set initial data if needed
//       })
//       .catch((error) => {
//         console.error("There was an error fetching the user data!", error);
//       });
//   }, []);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const validate = () => {
//     let tempErrors = {};
//     tempErrors.userType = formData.userType ? "" : "Please select user type."; // Validate userType
//     tempErrors.username = formData.username ? "" : "This field is required.";
//     tempErrors.email = /$^|.+@.+..+/.test(formData.email)
//       ? ""
//       : "Email is not valid.";
//     tempErrors.password = formData.password ? "" : "This field is required.";
//     tempErrors.confirmPassword =
//       formData.confirmPassword === formData.password
//         ? ""
//         : "Passwords do not match.";

//     // Add specific field validations based on user type
//     if (formData.userType === "Doctor") {
//       tempErrors.doctorField = formData.doctorField
//         ? ""
//         : "Doctor field is required.";
//     } else if (formData.userType === "AnonymousUser") {
//       tempErrors.anonymousUserField = formData.anonymousUserField
//         ? ""
//         : "Anonymous User field is required.";
//     } else if (formData.userType === "Meditator") {
//       tempErrors.meditatorField = formData.meditatorField
//         ? ""
//         : "Meditator field is required.";
//     }

//     setErrors(tempErrors);
//     return Object.values(tempErrors).every((x) => x === "");
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validate()) {
//       // Post data to the API
//       fetch("http://127.0.0.1:8000/sushtiti/account/auth/register/", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       })
//         .then((response) => response.json())
//         .then((data) => {
//           console.log(data);
//           // Handle success (e.g., show a success message or redirect)
//         })
//         .catch((error) => {
//           console.error("There was an error submitting the form!", error);
//           // Handle error (e.g., show an error message)
//         });
//     }
//   };

//   return (
//     <Container component="main" maxWidth="xs">
//       <Box
//         sx={{
//           marginTop: 8,
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//         }}
//       >
//         <Typography component="h1" variant="h5">
//           Register
//         </Typography>
//         <form ref={formRef} onSubmit={handleSubmit} noValidate>
//           <Grid container spacing={2}>
//             <Grid item xs={12}>
//               {/* Dropdown for selecting user type */}
//               <TextField
//                 select
//                 variant="outlined"
//                 required
//                 fullWidth
//                 id="userType"
//                 label="User Type"
//                 name="userType"
//                 value={formData.userType}
//                 onChange={handleChange}
//                 error={!!errors.userType}
//                 helperText={errors.userType}
//               >
//                 <MenuItem value="Doctor">Doctor</MenuItem>
//                 <MenuItem value="AnonymousUser">Anonymous User</MenuItem>
//                 <MenuItem value="Meditator">Meditator</MenuItem>
//               </TextField>
//             </Grid>
//             {/* Specific fields for each user type */}
//             {formData.userType === "Doctor" && (
//               <Grid item xs={12}>
//                 <TextField
//                   variant="outlined"
//                   required
//                   fullWidth
//                   id="doctorField"
//                   label="Doctor Field"
//                   name="doctorField"
//                   value={formData.doctorField}
//                   onChange={handleChange}
//                   error={!!errors.doctorField}
//                   helperText={errors.doctorField}
//                 />
//               </Grid>
//             )}
//             {formData.userType === "AnonymousUser" && (
//               <Grid item xs={12}>
//                 <TextField
//                   variant="outlined"
//                   required
//                   fullWidth
//                   id="anonymousUserField"
//                   label="Anonymous User Field"
//                   name="anonymousUserField"
//                   value={formData.anonymousUserField}
//                   onChange={handleChange}
//                   error={!!errors.anonymousUserField}
//                   helperText={errors.anonymousUserField}
//                 />
//               </Grid>
//             )}
//             {formData.userType === "Meditator" && (
//               <Grid item xs={12}>
//                 <TextField
//                   variant="outlined"
//                   required
//                   fullWidth
//                   id="meditatorField"
//                   label="Meditator Field"
//                   name="meditatorField"
//                   value={formData.meditatorField}
//                   onChange={handleChange}
//                   error={!!errors.meditatorField}
//                   helperText={errors.meditatorField}
//                 />
//               </Grid>
//             )}
//             {/* Common fields */}
//             <Grid item xs={12}>
//               {/* Username */}
//               {/* Email */}
//               {/* Password */}
//               {/* Confirm Password */}
//             </Grid>
//           </Grid>
//           <Button
//             type="submit"
//             fullWidth
//             variant="contained"
//             sx={{ mt: 3, mb: 2 }}
//           >
//             Register
//           </Button>
//         </form>
//       </Box>
//     </Container>
//   );
// }

// export default RegistrationForm;

function RegistrationForm(){
  return(
    <>
    </>
  )
}

import { Typography, Box, useTheme } from "@mui/material"; // Importing Material UI components and the useTheme hook
import { tokens } from "../theme"; // Importing a custom theme

// Defining a functional component called Header that receives two props
const Header = ({ title, subtitle }) => { 
  const theme = useTheme(); // Getting the current theme with the useTheme hook
  const colors = tokens(theme.palette.mode); // Getting the custom theme colors for the current mode (light or dark)
  return (
    <Box mb="30px"> 
    {/* // Creating a box element with a margin bottom of 30px */}
      <Typography
        variant="h2"
        color={colors.grey[100]} // Setting the color to the custom theme color for grey[100]
        fontWeight="bold"
        sx={{ m: "0 0 5px 0" }} // Adding some extra styling with the sx prop (margin)
      >
        {title}
      </Typography>
      <Typography variant="h5" color={colors.greenAccent[400]} // Creating another Typography component with a different variant and color from the custom theme 
      >
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Header; // Exporting the Header component for use in other parts of the application

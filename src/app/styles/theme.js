import { createTheme } from "@mui/material";

const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,   // Mobile phones
        sm: 600, // Tablets
        md: 960, // Small laptops
        lg: 1280,// Desktops
        xl: 1920,// Large screens
        custom: 1440, // Custom breakpoint (optional)
      },
    },
  });
  
  export default theme;
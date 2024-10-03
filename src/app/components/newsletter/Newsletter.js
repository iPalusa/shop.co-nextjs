import { Box, Button, TextField, Typography } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import React from "react";

const Newsletter = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        width:'100%',
      }}
    >
      {/* Black Container */}
      <Box
        sx={{
          position: "absolute",
          top: {
            xs:'-120px',
            md:'-80px',
            lg:'-100px',
          },
          backgroundColor: "black",
          width: {
            xs: "80%",
            md: "80%",
          },
          display: "flex",
          flexDirection: {
            xs: "column",
            md: "row",
          },
          justifyContent: "space-between",
          alignItems: {
            xs: "center",
            md: "center",
          },
          borderRadius: "20px",
          padding: {
            xs: "12px 21.4px 12px 21.4px",
            md: "18px 32px 18px 32px",
            lg: "36px 64px 36px 64px",
          },
          gap: {
            xs: "15px",
            md: "0",
          },
        }}
      >
        {/* Title */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: {
              xs: "100%",
              sm: "50%",
              md: "40%",
            },
          }}
        >
          <Typography
            sx={{
              width:'100%',
              padding:'0',
              color: "white",
              fontSize: {
                xs: "32px",
                md: "40px",
              },
              fontWeight: "bold",
              lineHeight: "45px",
              textAlign: {
                xs: "center",
                md: "left",
              },
            }}
          >
            STAY UPTO DATE ABOUT OUR LATEST OFFERS
          </Typography>
        </Box>
        {/* Form */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent:{
              xs:'center',
              md:'center',
            },
            gap: "14px",
            width:{
              xs: "90%",
              sm:'70%',
              md:'40%',
              lg:'30%',
            }
          }}
        >
          {/* Email */}
          <Box
            sx={{
              backgroundColor: "white",
              display: "flex",
              alignItems: "center",
              gap: "12px",
              borderRadius: "62px",
              padding: "12px 16px 12px 16px",
            }}
          >
            <EmailIcon sx={{ color: "black" }} />
            {/* <TextField
              type="email"
              placeholder="Enter your email address"
              variant="outlined" // or "filled" / "standard" for different styles
              fullWidth // optional: makes the input take up the full width of its container
              sx={{
                fontSize:'16px',
                fontWeight:"500",
                padding:'0',
                height:'auto',
                border:'none',
              }}
            /> */}
            <TextField
              type="email"
              placeholder="Enter your email address"
              variant="outlined" // Can be "filled" or "standard" if you want no outline effect
              fullWidth
              sx={{
                fontSize: {
                  xs:'14px',
                  md:'16px',
                },
                fontWeight: "500",
                height: "auto", // Keeps height dynamic based on content
                "& .MuiOutlinedInput-root": {
                  height: "30px", // Adjusts the height
                  "& fieldset": {
                    border: "none", // This will remove the border
                  },
                },
              }}
            />
          </Box>
          {/* Subscribe Button */}
          <Button
            sx={{
              backgroundColor: "white",
              color: "black",
              borderRadius: "62px",
              fontSize: {
                xs:'14px',
                md:'16px',
              },
              padding: "12px 16px 12px 16px",
              textTransform: "none",
            }}
          >
            Subscribe to Newsletter
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Newsletter;

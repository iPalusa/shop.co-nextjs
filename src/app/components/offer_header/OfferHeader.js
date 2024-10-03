"use client"
import React from "react";
import Box from "@mui/material/Box";
import {Typography} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

const OfferHeader = () => {
  return (
    <Box
      sx={{
        height: "48px",
        backgroundColor: "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position:'relative',
      }}
    >
      <Box sx={{
        display: 'flex',
        justifyContent:'between',
        gap:'231px',
      }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            gap: "5px",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Poppins, Arial, sans-serif",
              fontSize: "14px",
              color: "white",
            }}
          >
            Sign up and get 20% off to your first order. 
          </Typography>
          <Typography
            sx={{
              fontFamily: "Poppins, Arial, sans-serif",
              fontSize: "14px",
              fontWeight: "bold",
              color: "white",
              textDecoration: "underline",
            }}
          >
            Sign Up Now
          </Typography>
        </Box>
        <Box sx={{
            display: 'flex',
            gap: '5px',
            cursor:'pointer',
            position:'absolute',
            right: '120px',
        }}>
            <CloseIcon sx={{
              color: 'white',
            }}/>
        </Box>
      </Box>
    </Box>
  );
};

export default OfferHeader;

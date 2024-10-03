"use client";
import { Box, Button, Typography } from "@mui/material";
import React from "react";
import Divider, { dividerClasses } from "@mui/material/Divider";
import useMediaQuery from "@mui/material/useMediaQuery";

const HeroBanner = () => {
  const matches = useMediaQuery("(max-width:959px)");
  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: {
          xs: "column",
          md: "row",
        },
        height: {
          md: "663px",
          xs: "853px",
        },
        justifyContent: "space-evenly",
        alignItems: "center",
        backgroundImage: !matches
          ? `url("/assets/images/Rectangle-2.png")`
          : "",
        backgroundColor: matches ? "#F2F0F1" : "",
        backgroundSize: {
          md: "cover",
          xs: "contain",
        },
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        padding: {
          xs: "45px 0 0 0",
          md: "0",
        },
      }}
    >
      {/* Content */}
      <Box
        sx={{
          width: {
            xs: "90%",
            md: "40%",
          },
          display: "flex",
          flexDirection: "column",
          gap: "35px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "25px",
          }}
        >
          <Typography
            sx={{
              fontSize: {
                xs: "36px",
                md: "64px",
              },
              fontWeight: "bold",
              lineHeight: {
                xs: "34px",
                md: "64px",
              },
            }}
          >
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </Typography>

          <Typography
            sx={{
              fontSize: {
                xs: "14px",
                md: "16px",
              },
              opacity: "60%",
              lineHeight: "22px",
            }}
          >
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </Typography>
          <Button
            sx={{
              backgroundColor: "black",
              borderRadius: "35px",
              color: "white",
              fontSize: "16px",
              padding: "16px 54px 16px 54px",
              textTransform: "none",
              maxWidth: "fit-content",
              alignSelf: {
                md: "flex-start",
                xs: "center",
              },
            }}
          >
            Shop Now
          </Button>
        </Box>
        {/* Counters */}
        <Box
          sx={{
            display: "flex",
            justifyContent: {
              md: "flex-start",
              xs: "center",
            },
            gap: "32px",
          }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: {
                  md: "40px",
                  xs: "24px",
                },
                fontWeight: "bold",
              }}
            >
              200+
            </Typography>

            <Typography
              sx={{
                fontSize: {
                  md: "16px",
                  xs: "12px",
                },
                opacity: "60%",
              }}
            >
              International Brands
            </Typography>
          </Box>
          <Divider orientation="vertical" variant="middle" flexItem />
          <Box>
            <Typography
              sx={{
                fontSize: {
                  md: "40px",
                  xs: "24px",
                },
                fontWeight: "bold",
              }}
            >
              2,000+
            </Typography>

            <Typography
              sx={{
                fontSize: {
                  md: "16px",
                  xs: "12px",
                },
                opacity: "60%",
              }}
            >
              High-Quality Products
            </Typography>
          </Box>
          <Divider orientation="vertical" variant="middle" flexItem />
          <Box>
            <Typography
              sx={{
                fontSize: {
                  md: "40px",
                  xs: "24px",
                },
                fontWeight: "bold",
              }}
            >
              30,000+
            </Typography>

            <Typography
              sx={{
                fontSize: {
                  md: "16px",
                  xs: "12px",
                },
                opacity: "60%",
              }}
            >
              Happy Customers
            </Typography>
          </Box>
        </Box>
      </Box>
      {/* Empty Container */}
      <Box
        sx={{
          width: {
            md: "45%",
            xs: "100%",
          },
          backgroundImage: matches
            ? `url("/assets/images/Rectangle-2-mobile.png")`
            : "",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "to",
          height: "100vh",
        }}
      ></Box>
    </Box>
  );
};

export default HeroBanner;

import { Box, Button, Rating, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const TopSelling = () => {
  const productsData = [
    {
      image: "/assets/images/image-11.png",
      title: "T-shirt with Tape Details",
      rating: 4.5,
      price: 120,
    },
    {
      image: "/assets/images/image-12.png",
      title: "Skinny Fit Jeans",
      rating: 3.5,
      price: 240,
      originalPrice: 260,
    },
    {
      image: "/assets/images/image-13.png",
      title: "Checkered Shirt",
      rating: 4.5,
      price: 180,
    },
    {
      image: "/assets/images/image-14.png",
      title: "Sleeve Striped T-shirt",
      rating: 4.5,
      price: 130,
      originalPrice: 160,
    },
  ];

  return (
    <Box
      sx={{
        paddingTop: "60px",
        display: "flex",
        flexDirection: "column",
        gap: "35px",
      }}
    >
      {/* Title */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Typography
          sx={{
            fontSize: {
              xs: "32px",
              md: "48px",
            },
            fontWeight: "bolder",
          }}
        >
          TOP SELLING
        </Typography>
      </Box>

      {/* Horizontal Scrollable Container */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          overflowX: "scroll", // Enable horizontal scrolling
          gap: "14px", // Space between cards
          scrollSnapType: "x mandatory", // Enable snap scrolling
          scrollPadding: "20px",
          paddingLeft: "20px",
        }}
      >
        {productsData.map((item, index) => (
          <Box
            key={index}
            sx={{
              flex: "0 0 auto", // Prevent flex items from shrinking
              scrollSnapAlign: "start", // Align each card at the start
              width: {
                xs: "198px", // For smaller screens
                md: "295px", // For medium and larger screens
              },
              height: "auto",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            {/* Image Container */}
            <Box
              sx={{
                width: "100%", // Ensure full width
                height: {
                  xs: "200px", // Set height for small screens
                  md: "298px", // Set height for larger screens
                },
                borderRadius: "20px",
                overflow: "hidden",
              }}
            >
              <Image
                src={item.image}
                alt={item.title}
                layout="responsive"
                objectFit="cover"
                width={295}
                height={150}
              />
            </Box>

            {/* Product Details */}
            <Box>
              <Typography
                sx={{
                  fontSize: {
                    xs: "16px",
                    md: "20px",
                  },
                  fontWeight: "bold",
                }}
              >
                {item.title}
              </Typography>
              <Box>
                <Rating name="read-only" value={item.rating} readOnly />
                <Typography sx={{ fontSize: "14px" }}>{item.rating}</Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <Typography
                  sx={{
                    fontSize: {
                      xs: "20px",
                      md: "24px",
                    },
                    fontWeight: "bold",
                  }}
                >
                  ${item.price}
                </Typography>
                {item.originalPrice && (
                  <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <Typography
                      sx={{
                        textDecoration: "line-through",
                        fontSize: {
                          xs: "20px",
                          md: "24px",
                        },
                        fontWeight: "bold",
                        opacity: "40%",
                      }}
                    >
                      ${item.originalPrice}
                    </Typography>
                  </Box>
                )}
              </Box>
            </Box>
          </Box>
        ))}
      </Box>

      {/* View All Button */}
      <Box
        sx={{
          border: "1px solid rgba(0, 0, 0, 0.1)",
          borderRadius: "62px",
          padding: "16px 54px",
          maxWidth: "fit-content",
          alignSelf: "center",
        }}
      >
        <Button
          sx={{
            padding: "0",
            fontSize: "16px",
            fontWeight: "400",
            width: "100%",
            color: "black",
            textTransform: "none",
          }}
        >
          View All
        </Button>
      </Box>
    </Box>
  );
};

export default TopSelling;

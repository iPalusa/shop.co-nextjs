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
        display: "flex",
        flexDirection: "column",
        gap: "35px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Typography
          sx={{
            fontSize: "48px",
            fontWeight: "bolder",
          }}
        >
          TOP SELLING
        </Typography>
      </Box>
      {/* Cards Main Containers*/}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "25px",
        }}
      >
        {/* Cards */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            gap: "14px",
          }}
        >
          {productsData.map((item, index) => (
            <Box key={index}>
              {/* Image Container */}
              <Box
                sx={{
                  maxWidth: "295px",
                  maxHeight: "298px",
                  borderRadius: "20px",
                  overflow: "hidden",
                }}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  layout="responsive"
                  objectFit="cover"
                  width={150}
                  height={150}
                />
              </Box>
              {/* Product Details */}

              <Box>
                <Box>
                  <Typography
                    sx={{
                      fontSize: "20px",
                      fontWeight: "bold",
                    }}
                  >
                    {item.title}
                  </Typography>
                </Box>
                {/* Star Rating */}
                <Box>
                  <Rating name="read-only" value={item.rating} readOnly />
                  <Typography
                    sx={{
                      fontSize: "14px",
                    }}
                  >
                    {item.rating}
                  </Typography>
                </Box>
                {/* Price */}
                <Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "24px",
                        fontWeight: "bold",
                      }}
                    >
                      ${item.price}
                    </Typography>
                  </Box>
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
            padding: "16px 54px 16px 54px",
            maxWidth: "fit-content",
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
    </Box>
  );
};

export default TopSelling;

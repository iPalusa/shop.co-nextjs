import { Button, Typography, Rating } from "@mui/material";
import React from "react";
import { Box } from "@mui/material";
import Image from "next/image";

const NewArrivals = () => {
  const productsData = [
    {
      image: "/assets/images/image-7.png",
      title: "T-shirt with Tape Details",
      rating: 4.5,
      price: 120,
    },
    {
      image: "/assets/images/image-8.png",
      title: "Skinny Fit Jeans",
      rating: 3.5,
      price: 240,
      originalPrice: 260,
    },
    {
      image: "/assets/images/image-9.png",
      title: "Checkered Shirt",
      rating: 4.5,
      price: 180,
    },
    {
      image: "/assets/images/image-10.png",
      title: "Sleeve Striped T-shirt",
      rating: 4.5,
      price: 130,
      originalPrice: 160,
    },
  ];

  const discountCalculator = (originalPrice, currentPrice) => {
    const discountPercentage = (
      ((originalPrice - currentPrice) / originalPrice) *
      100
    ).toFixed(2);

    return `-${discountPercentage}%`;
  };

  return (
    <Box
      sx={{
        paddingTop: "60px",
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
          NEW ARRIVALS
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
            gap: "14px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {productsData.map((item, index) => (
            <Box key={index} sx={{}}>
              {/* Image Container */}
              <Box
                sx={{
                  maxWidth: "295px",
                  maxHeight: "298px",
                  borderRadius: "20px",
                  overflow: "hidden", // Apply borderRadius to the Box container
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
                    {item.originalPrice && (
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                        }}
                      >
                        <Typography
                          sx={{
                            textDecoration: "line-through",
                            fontSize: "24px",
                            fontWeight: "bold",
                            opacity: "40%",
                          }}
                        >
                          ${item.originalPrice}
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "12px",
                            fontWeight: "500",
                            backgroundColor: "rgba(255, 0, 0, 0.2)",
                            color: "red",
                            padding: "6px 14px 6px 14px",
                            borderRadius: "62px",
                          }}
                        >
                          {discountCalculator(item.originalPrice, item.price)}
                        </Typography>
                      </Box>
                    )}
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

export default NewArrivals;

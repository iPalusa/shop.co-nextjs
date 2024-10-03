import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const BrowseCategories = () => {
  const categoriesTypes = [
    { name: "Casual", image: "/assets/images/image-15.png" },
    { name: "Formal", image: "/assets/images/image-16.png" },
    { name: "Party", image: "/assets/images/image-17.png" },
    { name: "Gym", image: "/assets/images/image-18.png" },
  ];
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Grey Container */}
      <Box
        sx={{
          backgroundColor: "#F0F0F0",
          width: "90%",
          borderRadius: "40px",
          display:'flex',
          flexDirection: "column",
          gap: '20px',
          padding:'45px 0 55px 0',
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: "48px",
              fontWeight: "bolder",
            }}
          >
            BROWSE BY DRESS STYLE
          </Typography>
        </Box>
        {/* Cards */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap:'15px',
          }}
        >
          {categoriesTypes.slice(0, 2).map((item, index) => (
            <Box
              key={index}
              sx={{
                backgroundImage: `url(${item.image})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                width: index === 0 ? "407px" : "814px",
                height: "289px",
                borderRadius: "20px",
                padding: "30px 0 0 30px",
              }}
            >
              <Typography
                sx={{
                  fontSize: "36px",
                  fontWeight: "bold",
                }}
              >
                {item.name}
              </Typography>
            </Box>
          ))}
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "15px",
          }}
        >
          {categoriesTypes.slice(2).map((item, index) => (
            <Box
              key={index}
              sx={{
                backgroundImage: `url(${item.image})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                width: index === 0 ? "814px" : "407px",
                height: "289px",
                borderRadius: "20px",
                padding: "30px 0 0 30px",
              }}
            >
              <Typography
                sx={{
                  fontSize: "36px",
                  fontWeight: "bold",
                }}
              >
                {item.name}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default BrowseCategories;

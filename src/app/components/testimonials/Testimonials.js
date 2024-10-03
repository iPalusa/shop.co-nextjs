"use client";
import { Box, Button, Rating, Typography } from "@mui/material";
import { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

// Feedback data
const feedbackData = [
  {
    name: "Sarah M.",
    rating: 5,
    message: "I'm blown away by the quality and style of the clothes I received from Shop.co.",
  },
  {
    name: "Alex K.",
    rating: 5,
    message: "Finding clothes that align with my personal style used to be a challenge.",
  },
  {
    name: "James L.",
    rating: 5,
    message: "I'm thrilled to have stumbled upon Shop.co.",
  },
  {
    name: "Emily R.",
    rating: 5,
    message: "The customer service at Shop.co is exceptional!",
  },
  {
    name: "Michael B.",
    rating: 5,
    message: "I appreciate the sustainable practices of Shop.co.",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % feedbackData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + feedbackData.length) % feedbackData.length);
  };

  return (
    <Box sx={{ position: "relative", overflow: "hidden", width: "100%", margin: "auto", backgroundColor:'white', padding:'10px 0 160px 0'}}>
      {/* Heading and Buttons */}
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
        <Button onClick={handlePrev}>
          <ArrowBackIcon sx={{ color:"black"}} />
        </Button>
        <Typography variant="h5">OUR HAPPY CUSTOMERS</Typography>
        <Button onClick={handleNext}>
          <ArrowForwardIcon sx={{ color: "black" }} />
        </Button>
      </Box>

      {/* Carousel Container */}
      <Box sx={{ display: "flex", justifyContent: "center", overflow: "hidden", width: "100%" }}>
        <Box
          sx={{
            display: "flex",
            transition: "transform 0.5s ease-in-out",
            transform: `translateX(-${(currentIndex * 100) / 5}%)`, // Shift to the left
            width: `${feedbackData.length * 20}%`, // Total width to accommodate all slides
          }}
        >
          {feedbackData.map((data, index) => {
            // Determine if the slide should be blurred or not
            const isBlurred = index < currentIndex || index > currentIndex + 2;
            const isVisible = index >= currentIndex && index < currentIndex + 3;

            return (
              <Box
                key={index}
                sx={{
                  flex: "0 0 20%", // Each slide occupies 20% of the container
                  padding: "20px",
                  margin: "0 5px",
                  borderRadius: "8px",
                  boxShadow: 3,
                  backgroundColor: "white",
                  filter: isBlurred ? "blur(5px)" : "none",
                  opacity: isBlurred ? 0.5 : 1,
                  transition: "all 0.5s ease-in-out",
                }}
              >
                <Box>
                  <Rating name="half-rating-read" defaultValue={data.rating} precision={0.5} readOnly />
                </Box>
                <Box>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Typography sx={{ fontWeight: "bold" }}>{data.name}</Typography>
                    <CheckCircleIcon sx={{ color: "black", ml: 1 }} />
                  </Box>
                  <Box>
                    <Typography variant="body2">{data.message}</Typography>
                  </Box>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default Testimonials;

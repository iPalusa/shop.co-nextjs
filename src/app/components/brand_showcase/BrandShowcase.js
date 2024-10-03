import { Box } from "@mui/material";
import Image from "next/image";

const logos = [
  { logo: "/assets/logo/Vector (2).png", alt: "logo" },
  { logo: "/assets/logo/zara-logo-1 1.png", alt: "logo" },
  { logo: "/assets/logo/Vector (4).png", alt: "logo" },
  { logo: "/assets/logo/Vector (5).png", alt: "logo" },
  { logo: "/assets/logo/Vector (6).png", alt: "logo" },
];

const BrandShowcase = () => {
  return (
    <Box
      sx={{
        backgroundColor: "black",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        alignItems: "center",
        // padding: "25px 0px 25px 0px",
      }}
    >
      {logos.map((logo, index) => (
        <Box
          key={index}
          sx={{
            position:'relative',
            width:'150px',
            height:'100px',
            gap:{
              xs:"20px",
              md:"0",
            }
          }}
        >
          <Image
            src={logo.logo}
            alt={logo.alt}
            layout="fill" // Use 'fill' for better control
            objectFit="contain" // Ensures the logo fits within the box
            // width={150}
            // height={150}
          />
        </Box>
      ))}
    </Box>
  );
};

export default BrandShowcase;

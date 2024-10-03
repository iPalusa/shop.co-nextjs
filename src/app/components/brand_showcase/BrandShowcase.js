import { Box } from "@mui/material";
import Image from "next/image";
import BrandShowcase1 from "../../../../public/assets/logo/Vector (2).png";
import BrandShowcase2 from "../../../../public/assets/logo/Vector (3).png";
import BrandShowcase3 from "../../../../public/assets/logo/Vector (4).png";
import BrandShowcase4 from "../../../../public/assets/logo/Vector (5).png";
import BrandShowcase5 from "../../../../public/assets/logo/Vector (6).png";

const logos = [
  {logo: "/assets/logo/Vector (2).png", alt:"logo"},
  {logo: "/assets/logo/Vector (3).png", alt:"logo"},
  {logo: "/assets/logo/Vector (4).png", alt:"logo"},
  {logo: "/assets/logo/Vector (5).png", alt:"logo"},
  {logo: "/assets/logo/Vector (6).png", alt:"logo"},
];

const BrandShowcase = () => {
  return (
    <Box
      sx={{
        backgroundColor: "black",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        padding: "25px 0px 25px 0px",
      }}
    >
      {
        logos.map((logo, index) => (
          <Box key={index}>
            <Image src={logo.logo} alt={logo.alt} layout="responsive" objectFit="contain" objectPosition="center" width={150} height={150}/>
          </Box>
        ))
      }
    </Box>
  );
};

export default BrandShowcase;

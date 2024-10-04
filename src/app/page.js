import { Box } from "@mui/material";
import Divider from "@mui/material/Divider";
import HeroBanner from "./components/hero_banner/HeroBanner";
import BrandShowcase from "./components/brand_showcase/BrandShowcase";
import NewArrivals from "./components/new_arrivals/NewArrivals";
import TopSelling from "./components/top_selling/TopSelling";
import BrowseCategories from "./components/browse_categories/BrowseCategories";
import Testimonials from "./components/testimonials/Testimonials";
import Newsletter from "./components/newsletter/Newsletter";
import Footer from "./components/footer/Footer";

const Home = () => {
  return (
    <Box>
      <HeroBanner />
      <BrandShowcase />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "40px",
        }}
      >
        <NewArrivals/>
        <Divider sx={{ width: "85%", margin: "0 auto" }} />
        <TopSelling />
      </Box>
      <BrowseCategories />
      <Testimonials />
      {/* <Newsletter /> */}
      <Footer />
    </Box>
  );
};

export default Home;

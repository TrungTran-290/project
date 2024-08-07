import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./landingpage.css";
import {
  Box,
  Container,
  Typography,
} from "@mui/material";
import img1 from "../assets/keyboard.png";
import img2 from "../assets/product2.png"
import img3 from "../assets/product3.png"
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { useDispatch, useSelector } from "react-redux";
import BestSeller from "../bestsellers/BestSeller";
import { Row } from "reactstrap";
import { getList } from "../../redux/productsSlice";
import Features from "../feature/Features";
import CarouselMain from "../carousel/CarouselMain";
import Sale from "../sale/Sale";
// import Contact from "../contact/Contact";
import ContactUs from "../contact/ContactUs";
import Review from "../Review/Review";
import Relatedbrand from "../relatedbrand/Relatedbrand";
import Aos from "aos";
import "aos/dist/aos.css";

export default function LandingPage() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  const images = [
    {
      src: img1,
      label: "Image 1",
      description: "Khám phá các sản phẩm mới",
    },
    {
      src: img2,
      label: "Image 2",
      description: "Khám phá danh sách mới nhất của chúng tôi",
    },
    {
      src: img3,
      label: "Image 3",
      description: "Tìm món đồ phù hợp nhất với bạn",
    },
  ];
  const [activeStep, setActiveStep] = useState(0);
  const theme = useTheme();
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  useEffect(() => {
    dispatch(getList());
    Aos.init({ duration: 1000 });
  }, [dispatch]);
  return (
    <div className="lander">
      <Container maxWidth={false} className="holder">
        <div className="first">
        <Box className="backgroundLanding"
      sx={{
        width: "100%",
        height: "50%",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        textAlign: "center",
        padding: 2,
      }}
    >
      <Container className="image_container" style={{overflow:"hidden"}}  data-aos="fade-up">
      <img
        src={images[activeStep].src}
        alt={images[activeStep].label}
        style={{ width: "100%", height: "100%", objectFit: "contain" }}
      />
      </Container>
      <MobileStepper
        variant="dots"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        sx={{
          maxWidth: 400,
          flexGrow: 1,
          color: "white",
          backgroundColor: "transparent",
        }}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button
            size="small"
            onClick={handleBack}
            disabled={activeStep === 0}
          >
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
          </Button>
        }
      />
      <Typography variant="h1" sx={{ color: "#ffffff", mb: 2 }}  data-aos="fade-left">
        {images[activeStep].label}
      </Typography>
      <Typography variant="body1" sx={{ color: "#ffffff", mb: 2 }}  data-aos="fade-right">
        {images[activeStep].description}
      </Typography>

        <Link className="appbar"
          to="/products"
           data-aos="zoom-in"
          style={{ color: "inherit", textDecoration: "none" }}
        >
          Mua
        </Link>
    </Box>
        </div>

        <Container>
          <Row className="py-5" style={{overflow:"hidden"}}>
            <BestSeller products={products} />
          </Row>
        </Container>
        <Features />
        <Box sx={{ py: 8 }}>
          <Container>
            <div className="d-flex">
            <p className="Title"  data-aos="fade-right">
              All  
            </p>
            <div style={{ width: '20px' }}></div>
            <p className="Title"  data-aos="fade-left">
              <span className="innerTitle" > Items</span>
            </p>
            </div>
            <CarouselMain products={products} />
          </Container>
        </Box>
        <Relatedbrand/>
        <Sale />
      <ContactUs/>
      <Review/>
      </Container>
    </div>
  );
}

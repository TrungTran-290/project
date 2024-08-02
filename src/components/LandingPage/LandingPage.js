import React from "react";
import { Link } from "react-router-dom";
import "./landingpage.css";
import {
  Box,
  CardActions,
  CardMedia,
  Container,
  Grid,
  Icon,
  Typography,
  Card,
  CardContent,
} from "@mui/material";
import img1 from "./keyboard.png";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";

import AOS from "aos";
import "aos/dist/aos.css";
export default function LandingPage() {
  AOS.init();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div className="lander">
      <Container maxWidth={false} className="holder">
        <div className="first">
          <Box
            sx={{
              width: "100%",
              height: "50%",
              position: "relative",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#1a2038",
              color: "white",
              textAlign: "center",
              padding: 2,
            }}
          >
            <img
              src={img1}
              alt="Carousel"
              style={{ width: "50%", height: "30%", objectFit: "cover" }}
            />
            <MobileStepper
              variant="dots"
              steps={3}
              position="static"
              activeStep={activeStep}
              sx={{
                maxWidth: 400,
                flexGrow: 1,
                backgroundColor: "#1a2038",
                color: "white",
              }}
              nextButton={
                <Button
                  size="small"
                  onClick={handleNext}
                  disabled={activeStep === 2}
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

            {/* Text Content */}
            <Typography variant="h1" sx={{ color: "#ffffff", mb: 2 }}>
              Hello Test
            </Typography>
            <Typography variant="body1" sx={{ color: "#ffffff", mb: 2 }}>
              Khám phá những sản phẩm
            </Typography>
            <Button
              variant="contained"
              sx={{ backgroundColor: "#ff5722", color: "#ffffff" }}
            >
              <Link
                to="/products"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                Mua
              </Link>
            </Button>
          </Box>
        </div>
        <Typography variant="h4" component="h2">
          <Icon> </Icon>
        </Typography>
        <Grid container justifyContent="center" alignItems="center" spacing={2}>
          <Card
            sx={{ maxWidth: 345, margin: "0px 10px" }}
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
            lg={3}
            md={4}
            sm={6}
            xs={6}
          >
            <CardMedia
              sx={{ height: 140 }}
              image="/static/images/cards/contemplative-reptile.jpg"
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
          <Card
            sx={{
              maxWidth: 345,
              margin: "0px 10px",
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: 6, 
                color:"orange"
              },
            }}
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
            lg={3}
            md={4}
            sm={6}
            xs={6}
          >
            <CardMedia
              sx={{ height: 140 }}
              image="/static/images/cards/contemplative-reptile.jpg"
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
          <Card
            sx={{ maxWidth: 345, margin: "0px 10px" }}
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="400"
            lg={3}
            md={4}
            sm={6}
            xs={6}
          >
            <CardMedia
              sx={{ height: 140 }}
              image="/static/images/cards/contemplative-reptile.jpg"
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
          <Card
            sx={{ maxWidth: 345, margin: "0px 10px" }}
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="500"
            lg={3}
            md={4}
            sm={6}
            xs={6}
          >
            <CardMedia
              sx={{ height: 140 }}
              image="/static/images/cards/contemplative-reptile.jpg"
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>

        <div>
          <h3> 2</h3>
          <p>Đây là 2.</p>
        </div>
        <div>
          <h3> 3</h3>
          <p>Đây là 3</p>
        </div>

        <div>
          <h2>Đăng Ký </h2>
          <p> </p>
          <a href="#signup">Đăng Ký</a>
        </div>
      </Container>
    </div>
  );
}

import React, { useEffect } from "react";
import emailjs from 'emailjs-com';
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import "./contact.css";

export default function Contact() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
    window.scrollTo(0, 0);
    emailjs.init('P1jlrFA2eFxgkYfq_');
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    
    emailjs.sendForm('service_4sarhv9', 'template_ynu7qba', event.target)
      .then((result) => {
        console.log('Success:', result.text);
        alert('Message sent successfully!');
        event.target.reset(); 
      }, (error) => {
        console.error('Error:', error.text);
        alert('Failed to send message.');
      });
  };

  return (
    <div className="contact-container">
      <Box sx={{ py: 8 }}>
        <Container>
          <Typography
            variant="h4"
            sx={{ textAlign: "center", mb: 4 }}
            data-aos="fade-up"
          >
            <p className="Title">
              Contact <span className="innerTitle">Us</span>
            </p>
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6} data-aos="fade-right">
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  maxWidth: 600,
                  margin: "0 auto",
                  padding: 2,
                  backgroundColor: "#ffffff",
                  borderRadius: 1,
                  boxShadow: 2,
                }}
              >
                <Typography variant="h6" sx={{ mb: 2 }}>
                  Hãy cho chúng tôi ý kiến của bạn
                </Typography>
                <Typography variant="body1" sx={{ mb: 4 }}>
                  Hãy điền thông tin vào form bên dưới và chúng tôi sẽ liên hệ
                  với bạn sớm nhất có thể.
                </Typography>
                <form noValidate autoComplete="off" onSubmit={handleSubmit} style={{ width: "100%" }}>
                  <TextField
                    fullWidth
                    label="Name"
                    variant="outlined"
                    margin="normal"
                    required
                    name="name" 
                  />
                  <TextField
                    fullWidth
                    label="Email"
                    variant="outlined"
                    margin="normal"
                    required
                    name="email" 
                  />
                  <TextField
                    fullWidth
                    label="Message"
                    variant="outlined"
                    margin="normal"
                    multiline
                    rows={4}
                    required
                    name="message" 
                  />
                  <Button
                    className="submit_buy"
                    variant="contained"
                    sx={{ mt: 2, backgroundColor: "#dd3431" }}
                    type="submit"
                  >
                    Gửi Tin Nhắn
                  </Button>
                </form>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} data-aos="fade-left">
              <Typography variant="h6" className="contact-info-title">
                Số liên hệ{" "}
              </Typography>
              <Typography variant="body1" className="contact-info">
                <strong>Email:</strong> test@company.com
              </Typography>
              <Typography variant="body1" className="contact-info">
                <strong>Phone:</strong> +123 456 7890
              </Typography>
              <Typography variant="body1" className="contact-info">
                <strong>Address:</strong> 123 Street, City, Country
              </Typography>
              <Typography variant="body2" className="contact-note">
                Chúng tôi sẵn sàng trả lời các câu hỏi của bạn. Hãy liên hệ
                chúng tôi và chúng tôi sẽ trả lời sớm nhất có thể.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
}

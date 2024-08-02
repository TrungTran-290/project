import React from 'react';
import { Container, Grid, Typography, Link, Box } from '@mui/material';
import logo from './l.png';

export default function Footer() {
  return (
    <Box sx={{ bgcolor: '#F3F4F6', color: 'black', py: 4 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom>{/* Giới Thiệu */}<img src={logo} alt="Logo" width="250" height="50" /></Typography>
            <Typography variant="body2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom>
              Liên Kết Hữu Ích
            </Typography>
            <Typography variant="body2">
              <Link href="/" color="inherit" underline="none">Trang Chủ</Link>
            </Typography>
            <Typography variant="body2">
              <Link href="/products" color="inherit" underline="none">Sản Phẩm</Link>
            </Typography>
            <Typography variant="body2">
              <Link href="/contact" color="inherit" underline="none">Liên Hệ</Link>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom>
              Contact
            </Typography>
            <Typography variant="body2">Điện thoại: 000 000 0000</Typography>
            <Typography variant="body2">Email: info@ctsvn.vn</Typography>
          </Grid>
        </Grid>
        <Box sx={{ mt: 4, textAlign: 'center' }}>
          <Typography variant="body2">
            © Trung
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

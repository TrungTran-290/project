import React, { useEffect } from "react";
import Product from "../product/Product";
import { Container, Row } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  getList,
} from "../../redux/productsSlice";
import { addToCart } from "../../redux/cartSlice";
import { Divider } from "@mui/material";
import img1 from "../assets/home1-banner-1.png"
import "./products.css"
export default function Products() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getList());
  }, [dispatch]);

  const handle_add_cart = (item) => {
    dispatch(addToCart(item));
  };

  return (
    <Container>
      <Row className="m-4">
      <p className="Title">
        Products<span className="innerTitle"></span>
      </p>
          <div className="product-card">
            <img className="product-card-img" src={img1} alt="test"></img>
          </div>
        <Divider sx={{ my: 2 }} />
        {products.map((item, index) => (
          <Product key={index} products={item} onAddToCart={handle_add_cart} />
        ))}
      </Row>
    </Container>
  );
}

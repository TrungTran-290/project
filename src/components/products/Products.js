import React, { useEffect, useState } from "react";
import Product from "../product/Product";
import { Container, Row, Col } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { getList } from "../../redux/productsSlice";
import { addToCart } from "../../redux/cartSlice";
import { Divider } from "@mui/material";
import img1 from "../assets/home1-banner-1.png";
import Filter from "./Filter";
import "./products.css";
import Aos from "aos";

export default function Products() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    dispatch(getList());
    Aos.init();
  }, [dispatch]);

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  const handleFilter = ({ name }) => {
    const filtered = products.filter((product) => {
      return name
        ? product.name.toLowerCase().includes(name.toLowerCase())
        : true;
    });
    setFilteredProducts(filtered);
  };

  return (
    <Container style={{ overflow: "hidden" }}>
      <Row className="">
        <p className="Title" data-aos="zoom-out-down">
          Products<span className="innerTitle"></span>
        </p>
        <div
          className="product-card"
          data-aos="fade-left"
          data-aos-anchor="#example-anchor"
          data-aos-offset="500"
          data-aos-duration="1500"
        >
          <img className="product-card-img" src={img1} alt="test" />
        </div>
        <Divider sx={{ my: 2 }} />
        <Row style={{margin:"0 auto", padding:0}}>
          <Col lg={10} md={10} sm={10} xs={12}>
            <Row>
              {filteredProducts.map((item, index) => (
                <Product
                  key={index}
                  products={item}
                  onAddToCart={handleAddToCart}
                />
              ))}
            </Row>
          </Col>
          <Col lg={2} md={2} sm={2} className="filter-col">
            <Filter onFilter={handleFilter} />
          </Col>
        </Row>
      </Row>
    </Container>
  );
}

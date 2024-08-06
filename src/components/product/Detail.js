import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Button, Card, Row } from "reactstrap";
import "./detail.css";
import { useDispatch, useSelector } from "react-redux";
import { CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { getList } from "../../redux/productsSlice";
export default function Detail() {
  const { id } = useParams();
  const {products} = useSelector((state) => state.products);
  const pro = products.find((item) => item.id === id);
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getList())
  },[])
  return (
    <div>
      <Row>
        {pro ? (
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image={pro.picture}
            />
            <CardContent>
              <Typography variant="h5" component="div">
                {pro.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {pro.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        ) : (
          <p>Null</p>
        )}

        <Link to={"/"}>Home</Link>
      </Row>
    </div>
  );
}

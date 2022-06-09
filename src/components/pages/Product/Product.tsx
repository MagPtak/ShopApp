import { Card, CardContent, Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";

interface Params {
  props: Array<string | number>;
}

const Product = ({ props }: Params) => {
  const { name } = useParams();
  return (
    <>
      <div>Product {name ? name : null}</div>
      <Card>
        <CardContent>
          <div className="photo" />
          <div className="product-description">
            <Typography>{props.title}</Typography>
            <div className="description-bottom">
              <p className="price"></p>
              <div className="rating"></div>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default Product;

import { Card, CardContent, Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";

interface SingleProduct {
  amount: number;
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  title: string;
}

interface Params {
  props: Array<SingleProduct>;
}

const Product = ({ props }: Params) => {
  const { name } = useParams();

  return (
    <>
      <div>Product {name ? name : null}</div>
      {/* <ul>
        {props.map((product) => {
          // console.log(product.title)
          <li>
            <Card>
              <CardContent>
                <Typography>{product.price}</Typography>
              </CardContent>;
            </Card>
            
            <p>Dupa</p>;
          </li>
        })}
      </ul> */}
    </>
  );
};

export default Product;

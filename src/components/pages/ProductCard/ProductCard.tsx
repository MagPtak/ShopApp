import { Badge, Button, Card, CardContent, IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Favorite } from "@mui/icons-material";
import React from "react";
import { useParams } from "react-router-dom";
import "./ProductCard.css";
import { useStyles } from "./ProductCard.styles";

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
  data: Array<SingleProduct>;
}

const ProductCard = (props: any) => {
  const { name } = useParams();
  const { data } = props;
  const classes = useStyles();

  return (
    <div className="productList">
      <div className="productCardContainer">
        <Card className={classes.card}>
          <CardContent
            sx={{
              padding: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div className="productImageContainer">
              <img className="productCardImage" src={data.image} />
              <IconButton className="likeButton">
                <Favorite />
              </IconButton>
            </div>
            <div className="productCardDescriptionContainer">
              <Button
                className="shoppingCartButton"
                sx={{
                  backgroundColor: "rgb(255, 85, 0)",
                  color: "rgb(250,250,250)",
                  height: "60px",
                  width: "30px",
                  borderRadius: "50%",
                  "&:hover": {
                    backgroundColor: "rgb(255, 168, 124)",
                    color: "rgb(0, 0, 0)",
                  },
                }}
              >
                <ShoppingCartIcon />
              </Button>
              <div className="productCardDescription">
                <p>{data.title}</p>
                <p className="productPrice">${data.price}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProductCard;

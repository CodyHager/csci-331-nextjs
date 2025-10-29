import { Card, CardActionArea, CardMedia, Typography } from "@mui/material";
import { Product } from "../types";

interface ItemCardProps {
  product: Product;
}

const ItemCard: React.FC<ItemCardProps> = ({ product }) => {
  return (
    <Card
      variant="outlined"
      sx={{ maxWidth: 360, width: "100%", height: "100%" }}
    >
      <CardActionArea
        sx={{ height: "100%", display: "flex", flexDirection: "column" }}
      >
        <Typography variant="h6" textAlign="center">
          {product.title}
        </Typography>
        <CardMedia
          component="img"
          alt={product.title}
          src={product.image}
          sx={{ width: "90%", height: 220, objectFit: "contain" }}
        />
        <Typography
          variant="body1"
          sx={{ alignSelf: "flex-start", pl: 2, mt: "auto" }}
        >
          ${product.price}
        </Typography>
      </CardActionArea>
    </Card>
  );
};

export default ItemCard;

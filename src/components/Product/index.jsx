import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  CardActionArea,
  Button,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { Link } from "react-router-dom";
import "./style.css";
 
const Product = ({ product, addProduct}) => {
  return (
    <Card  className="custom-card"    >
    <Link to={`product-view/${product.id}`}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="image"
          height="260"
          className="card-image"
          image = {product.media.source}
          title="MANGA"
        />
        <CardContent className="content">
          <Typography
            className="title"
            gutterBottom
            variant="h5"
            component="h2"
          >
            {product.name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <Typography variant="h3">View</Typography>
      </Link>
      <CardActions className="actions-content">
        <>
        <Typography className="price" gutterBottom variant="h5" component="h2">
            {product.price.formatted_with_symbol}
        </Typography>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="large"
           className="custom-button"
            onClick={ () =>{
                addProduct(product.id, 1)
            }
            }
            >
            <ShoppingCart /> Add to basket
          </Button>
        </>
      </CardActions>
    </Card>
  );
};

export default Product;

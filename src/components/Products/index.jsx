import { Grid, Container } from "@material-ui/core";
import Product from "../Product";
import Banner from "../Banner";
import "./style.css"

const Products = ({ products , addProduct }) => {
  return (
    <div>
      <Banner />
      <Container id="products">
        <Grid container spacing={5}>
          {products.map((product) => {
            return (
              <Grid key={product.id} item xs={12} sm={6} md={4}>
                <Product product={product} addProduct= {addProduct} />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </div>
  );
};

export default Products;

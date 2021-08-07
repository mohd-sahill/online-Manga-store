import {Grid, Button, Container, Typography} from "@material-ui/core"
import { ShoppingCart } from "@material-ui/icons";
import { commerce } from "../../lib/commerce"
import { useState, useEffect } from "react";
import "./style.css"

const createMarkup = (text) => {
    return { __html: text}
}

const ProductView = ( {addProduct} ) => {

    const [product,setProducts] = useState({})
    const [quantity,setQuantity] = useState(1)

    const fetchProduct = async (id) => {
        const response = await commerce.products.retrieve(id);
        const {name,price,media,quantity,description} = response;
        setProducts({
            id,
            name,
            quantity,
            description,
            src: media.source,
            price: price.formatted_with_symbol,
        });
    };

    useEffect(() => {
        const id = window.location.pathname.split("/")
        fetchProduct(id[2]);
    }, [])

    const handleQuantity = (param) => {
        if(param === "decrease" && quantity > 1){
            setQuantity(quantity - 1)
        }
        if(param === "increase" && quantity < 10){
            setQuantity(quantity + 1)
        }
    } 

    return ( 
     <Container className="product-view">
        <Grid container spacing={4} xs={12}>
            <Grid item xs={12} md={8} className="image-wrapper">
                <img onLoad={() => {
                    // setLoading(false);
                }}
                src={product.src}
                alt={product.name}
                 />
            </Grid>
            <Grid item xs={12} md={4} className="text">
                <Typography variant="h3">{product.name}</Typography>
                 <Typography
                 variant="p"
                 dangerouslySetInnerHTML={createMarkup(product.description)}
                  />
                  <Typography variant="h3">Price: {product.price}</Typography>
                  <Grid container spacing={4}>
                    <Grid item xs={12}>
                        <Button
                        size="small"
                        variant="container"
                        className="increase-product-quantity"
                        onClick={() => {
                            handleQuantity("increase")
                        }}
                        >
                         +
                        </Button>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography className="quantity" variant="h3">
                        Quantity: {quantity}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                          size="small"
                          color="secondary"
                        variant="container"
                        onClick={() => {
                            handleQuantity("decrease")
                        }}
                        >
                            -
                        </Button>
                    </Grid>
                    <Grid item xs={12}>
                        <Button 
                        size="large"
                        className="custom-button"
                        onClick={() => {
                            addProduct(product.id,quantity);
                        }}
                        >
                        <ShoppingCart /> Add to basket 
                        </Button>
                    </Grid>
                  </Grid>
            </Grid>
        </Grid>
     </Container>
     );
}
 
export default ProductView;
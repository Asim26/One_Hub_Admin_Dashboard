import React, { useEffect } from "react";
import Header from "../Header/Header";
import { NETWORK_ERROR } from "../../Utilities/constants";
import { listProductRequest } from "../../Services/dataService";
import { connect } from "react-redux";

import { listOfProducts } from "../../Redux/actions/action";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import CreateProduct from "./CreateProduct";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

const Products = (props) => {
  const classes = useStyles();

  useEffect(async () => {
    const token =
      "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InN0YXR1cyI6IkFjdGl2ZSIsIl9pZCI6IjVmMmVmOTZkNWEwOWM1MzUyY2E1NmNkMSIsImVtYWlsIjoiYWRtaW5AeWFob28uY29tIiwicGFzc3dvcmQiOiIkMmIkMTAkY1BaSkxoc3dLSndiaHF5aWJ6TGIwZTh6S05mVFFpcHdieE55L1Uyd25rS3ZIOHhnallsZUMiLCJyb2xlIjoiU3VwZXJBZG1pbiIsImFkZGVkX2RhdGUiOiIyMDIwLTA4LTA4VDE5OjEzOjQ5LjMyNVoiLCJfX3YiOjB9LCJpYXQiOjE2MTE3NTM3NTcsImF1ZCI6ImFkbWluIiwiaXNzIjoibm9kZV9iYWNrZW5kIiwic3ViIjoiYWRtaW5AeWFob28uY29tIn0.Al0uRnNcrAK8GZumRVbMgS1O8buvmZL2mGmnSueyIWSyi4MX0HaRe9oFH9jLLSzDdSR1cAz-NZxdydAHKRYTLg";
    const productResponse = await listProductRequest(token);
    if (productResponse === NETWORK_ERROR) {
    } else {
      props.listOfProductsHandler(productResponse.data.payload.data);
    }
  }, []);

  return (
    <div>
      <Header>
        <h2>Products</h2>
        <Link to="/CreateProduct">
        <Button variant="contained" color="primary" style={{'margin-bottom':'5%'}}>
          Add Product
        </Button>
        </Link>
        <Grid container spacing={3}>
          {props.ListProducts.map((list) => (
            <Grid item md={4}>
              <Card className={classes.root} key={Math.random()}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="shoes"
                    height="140"
                    image="https://ashtex-test-bucket.s3.amazonaws.com/shoes.jfif"
                    title="shoes"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {list.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Product id:{list.product_id}
                      <br />
                      {list.description}
                      <br />
                      Brand: {list.brand}
                      <br />
                      Price: {list.price}
                      <br />
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Edit
                  </Button>
                  <Button size="small" color="primary">
                    Remove
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Header>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    ListProducts: state.myReducerOne.listOfProducts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    listOfProductsHandler: (ProductsList) =>
      dispatch(listOfProducts(ProductsList)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
// export default Products

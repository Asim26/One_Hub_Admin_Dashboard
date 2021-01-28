import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import './Brands.css';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));


const BrandInformation=(props)=> {
    const classes = useStyles();
    const {brand} = props;
    console.log("Brand Information :21 | Brand => ",props.brand);
  return (
    <div className={classes.root}>
        <div className= "BrandInformation-container">
        <Typography variant="h5" gutterBottom component="div">
                Brand Details
        </Typography>
        <div className="Information-Grid">
      <Grid className="Information-Grid" container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <div><span  className ='Brands-tableHead'>Name :</span> {brand.name}</div>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
        <div><span  className ='Brands-tableHead'>On Sale :</span> {brand.on_sale ? <span>yes</span> :<span>No</span>}</div>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
        <div><span  className ='Brands-tableHead'>Address :</span> {brand.location}</div>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
        <div><span  className ='Brands-tableHead'>Contract Type :</span> {brand.contract_type}</div>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
        <div><span  className ='Brands-tableHead'>Sale Percentage :</span> {brand.sale_percentage}</div>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
        <div><span  className ='Brands-tableHead'>Created Date :</span> {brand.date_created.substring(0,10)}</div>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
        <div><span  className ='Brands-tableHead'>Updated Date :</span> {brand.date_updated? brand.date_updated.substring(0,10):<span>Not Updated Yet</span>}</div>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
        <div><span  className ='Brands-tableHead'>Contact No :</span> {brand.contact_no}</div>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
        <div><span  className ='Brands-tableHead'>Fulfilled By :</span> {brand.fulfilled_by}</div>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
        <div><span  className ='Brands-tableHead'>Sale Start Time :</span> {brand.sale_start_time?brand.sale_start_time.substring(0,10):<span>Sale Not Available</span> }</div>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
        <div><span  className ='Brands-tableHead'>Sale End Time :</span> {brand.sale_end_time? brand.sale_end_time.substring(0,10): <span>Sale Not Available</span>}</div>
        </Grid>

       

      
      </Grid>
      </div>
    
        <Grid container item xs={12} >
        <Typography variant="h5" x component="div">
                Introduction
        </Typography>
            <p>{brand.brand_introduction}</p>
        </Grid>
      </div>
      
    </div>);
}

export default BrandInformation;

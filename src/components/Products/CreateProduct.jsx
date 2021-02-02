import { colors } from "@material-ui/core";
import React from "react";
import Header from "../Header/Header";

import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";

import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import { Category } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 200,
    },
    //upload btn
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  //upload btn
  input: {
    display: "none",
  },
}));

const CreateProduct = () => {
  const classes = useStyles();

  //state variables
  const [brand, setBrand] = React.useState("");
  const [section, setSection] = React.useState("");
  const [categories, setCategories] = React.useState("");
  const [On_Sale, setOn_Sale] = React.useState("");
  const [variation, setVariation] = React.useState([]);

  //onChange Event Handlers
  const handleChangeBrand = (event) => {
    setBrand(event.target.value);
  };

  const handleChangeSection = (event) => {
    setSection(event.target.value);
  };

  const handleChangeCatagories = (event) => {
    setCategories(event.target.value);
  };

  const handleChangeOnSale = (event) => {
    setOn_Sale(event.target.value);
  };

  const addVariation = () =>{
    let idSizeStock =""
    idSizeStock = idSizeStock + Math.random();      
    let size = [{_id: idSizeStock}]
    let idVariation =""
    idVariation = idVariation + Math.random()
    let arr = variation.concat({_id: idVariation, color: "", price: 0, size});
    setVariation(arr)
  }

  const variation_color = (e) =>{
    e.preventDefault();
    const color_value = e.target.value;
    const color_value_small = color_value.toLowerCase()
    const id= e.target.id;
    const size = variation.map((value)=>{
      return(
        value._id===id ? {...value, color: color_value_small}: value
      );
    })
    setVariation(size)
  }

  return (
    <div>
      <Header>
        <h2>Create Product</h2>
        <form>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                name="title"
                variant="outlined"
                required
                fullWidth
                label="Title"
                autoFocus
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="Description"
                name="description"
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="Price"
                type="text"
                name="price"
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="Old Price"
                type="text"
                name="old_price"
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControl className={classes.formControl} fullWidth>
                <InputLabel id="demo-simple-select-label">Brand</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={brand}
                  onChange={handleChangeBrand}
                >
                  <MenuItem value={"puma"}>Puma</MenuItem>
                  <MenuItem value={"nike"}>Nike</MenuItem>
                  <MenuItem value={"bottles"}>Bottles</MenuItem>
                  <MenuItem value={"adidas"}>Adidas</MenuItem>
                  <MenuItem value={"H & M"}>H & M</MenuItem>
                  <MenuItem value={"shein"}>Shein</MenuItem>
                  <MenuItem value={"stylo"}>Stylo</MenuItem>
                  <MenuItem value={"breakout"}>BreakOut</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="SKU"
                type="text"
                name="sku"
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="Sale Percentage"
                type="text"
                name="sale_percentage"
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="Shipping Info"
                type="text"
                name="shipping_info"
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControl className={classes.formControl} fullWidth>
                <InputLabel id="demo-simple-select-label">Section</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={section}
                  onChange={handleChangeSection}
                >
                  <MenuItem value={"men"}>Men</MenuItem>
                  <MenuItem value={"women"}>Women</MenuItem>
                  <MenuItem value={"both"}>Both</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControl className={classes.formControl} fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Categories
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={categories}
                  onChange={handleChangeCatagories}
                >
                  <MenuItem value={"eastern"}>Eastern</MenuItem>
                  <MenuItem value={"western"}>Western</MenuItem>
                  <MenuItem value={"footwear"}>Footwear</MenuItem>
                  <MenuItem value={"activewear"}>Activewear</MenuItem>
                  <MenuItem value={"face+body"}>Face + Body</MenuItem>
                  <MenuItem value={"accessories"}>Accessories</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControl className={classes.formControl} fullWidth>
                <InputLabel id="demo-simple-select-label">On Sale</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={On_Sale}
                  onChange={handleChangeOnSale}
                >
                  <MenuItem value={"yes"}>Yes</MenuItem>
                  <MenuItem value={"no"}>No</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6}>
              <div className={classes.root}>
                <input
                  accept="image/*"
                  className={classes.input}
                  id="contained-button-file"
                  multiple
                  type="file"
                />
                <label htmlFor="contained-button-file">
                  <Button variant="contained" color="primary" component="span">
                    Upload
                  </Button>
                </label>
                <input
                  accept="image/*"
                  className={classes.input}
                  id="icon-button-file"
                  type="file"
                />
                <label htmlFor="icon-button-file">
                  <IconButton
                    color="primary"
                    aria-label="upload picture"
                    component="span"
                  >
                    <PhotoCamera />
                  </IconButton>
                </label>
              </div>
            </Grid>

            <Grid item xs={12} sm={12}>
              <Button variant="contained" color="primary" onClick={addVariation}>
                Add Variation
              </Button>
            </Grid>


{variation.map((count)=>{
  return(
            <Grid item xs={12} sm={12}>
                <TextField
                    variant="outlined"
                    required
                    fullWidth
                    label="Color"
                    type="text"
                    name="color"
                />
                <br />
                <br />
                <TextField
                    variant="outlined"
                    required
                    fullWidth
                    label="Price"
                    type="text"
                    name="price"
                />
                <br />
                <br />
            
                <TextField
                    variant="outlined"
                    required
                    fullWidth
                    label="Stock"
                    type="text"
                    name="stock"
                />
                <br />
                <br />
                <TextField
                    variant="outlined"
                    required
                    fullWidth
                    label="Size"
                    type="text"
                    name="size"
                />
            </Grid>);
            })}



            <Grid item xs={12} sm={6}>
              <Button variant="contained" color="primary">
                Save
              </Button>
              <Button variant="contained" color="secondary">
                cancel
              </Button>
            </Grid>

          </Grid>
        </form>
      </Header>
    </div>
  );
};
export default CreateProduct;

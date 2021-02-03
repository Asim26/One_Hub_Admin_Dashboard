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

  //input date
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  //input date
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

const CreateProduct = () => {
  const classes = useStyles();

  //state variables
  const [inputValueState, setInputValueState] = React.useState({
    inputValues: {
      title: "",
      description: "",
      price: "",
      old_price: "",
      shipping_info: "",
      on_sale: "",
      sale_percentage: "",
      type: "",
      sku: "",
      sale_start_time: "",
      sale_end_time: "",
    },
  });

  const [brand, setBrand] = React.useState("");
  // CategoryFlag
  const [categoryFlag, setCategoryFlag] = React.useState(false);
  const [subCategoryFlag, setSubCategoryFlag] = React.useState(false);

  const [section, setSection] = React.useState("");

  const [categories, setCategories] = React.useState("");
  const [subCategories, setSubCategories] = React.useState("");

  const [On_Sale, setOn_Sale] = React.useState("");
  const [variation, setVariation] = React.useState([]);

  const [saleStartDate, setSaleStartDate] = React.useState();
  //onChange Event Handlers

  const onChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    const { inputValues } = inputValueState;
    setInputValueState({
      inputValues: {
        ...inputValues,
        [name]: value,
      },
    });
  };
  const handleChangeBrand = (event) => {
    setBrand(event.target.value);
  };

  const handleChangeSection = (event) => {
    setSection(event.target.value);
  };

  const handleChangeCatagories = (event) => {
    setCategoryFlag(true);
    setCategories(event);
  };

  const handleChangeSubCatagories = (event) => {
    setSubCategoryFlag(true);
    setSubCategories(event);
  };

  const handleChangeOnSale = (event) => {
    setOn_Sale(event.target.value);
  };

  
  const startDateHandler = (event) => { 

    let saleStartDateV=event.target.value;    
    setSaleStartDate(saleStartDateV);    
    
  };

  // const isCategoryOption =(value) =>{
  //   categoryOptions.map((category) =>{
  //     if(category.label === value){
  //       setCategoryValue(value);
  //       setSubCategoryFlag(true)
  //     }
  //   })
  // }

  const addVariation = () => {
    let idSizeStock = "";
    idSizeStock = idSizeStock + Math.random();
    let size = [{ _id: idSizeStock }];
    let idVariation = "";
    idVariation = idVariation + Math.random();
    let arr = variation.concat({ _id: idVariation, color: "", price: 0, size });
    setVariation(arr);
  };

  const delete_variation = (id) => {
    const updateState = variation.filter((result) => result._id !== id);
    setVariation(updateState);
  };

  const variation_color = (e) => {
    e.preventDefault();
    const color_value = e.target.value;
    const color_value_small = color_value.toLowerCase();
    const id = e.target.id;
    const size = variation.map((value) => {
      return value._id === id ? { ...value, color: color_value_small } : value;
    });
    setVariation(size);
  };

  const variation_price = (e) => {
    e.preventDefault();
    const price_value = e.target.value;
    const id = e.target.id;
    const size = variation.map((value) => {
      return value._id === id ? { ...value, price: price_value } : value;
    });
    setVariation(size);
  };

  const addSizeStock = (id) => {
    const updateVariation = variation.find((result) => result._id === id);
    let id_value = "";
    id_value = id_value + Math.random();
    let updateSizeStock = updateVariation.size.concat({ _id: id_value });
    const size = variation.map((value) => {
      return value._id === id ? { ...value, size: updateSizeStock } : value;
    });
    setVariation(size);
  };

  const variation_size = (e) => {
    e.preventDefault();
    const id = e.target.name;
    const value = e.target.value;
    const idArr = id.split(",");
    const updateVariation = variation.find((result) => result._id === idArr[0]);
    const sizeStock = updateVariation.size.find(
      (result) => result._id === idArr[1]
    );
    sizeStock.size = value;
    const size = variation.map((value) => {
      return value._id === id ? { ...value, size: sizeStock } : value;
    });
    setVariation(size);
  };

  const variation_stock = (e) => {
    e.preventDefault();
    const id = e.target.name;
    const value = e.target.value;
    const idArr = id.split(",");
    const updateVariation = variation.find((result) => result._id === idArr[0]);
    const sizeStock = updateVariation.size.find(
      (result) => result._id === idArr[1]
    );
    sizeStock.stock = parseInt(value);
    const size = variation.map((value) => {
      return value._id === id ? { ...value, size: sizeStock } : value;
    });
    setVariation(size);
  };

  const deleteSizeStock = (size_id, stock_id) => {
    const sizePerId = variation.find((result) => result._id === size_id);
    const remainingStockSize = sizePerId.size.filter(
      (result) => result._id !== stock_id
    );
    const size = variation.map((stocks) => {
      return stocks._id === size_id
        ? {
            ...stocks,
            size: remainingStockSize,
          }
        : stocks;
    });
    setVariation(size);
  };

  const total = (arr) => {
    let stock_arr = [];
    arr.size.map((stock_value) => {
      return stock_arr.push({
        size: stock_value.size,
        stock: stock_value.stock,
      });
    });
    return stock_arr;
  };

  const validate_form = (products) => {
    if (
      products.title.length === 0 ||
      products.description.length === 0 ||
      products.price.length === 0 ||
      products.old_price.length === 0 ||
      products.brand.length === 0 ||
      (products.on_sale &&
        (products.sale_end_time.length === 0 ||
          products.sale_start_time.length === 0)) ||
      products.section.length === 0 ||
      products.shipping_info.length === 0 ||
      products.on_sale.length === 0 ||
      products.sku.length === 0 ||
      products.categories.length === 0
    )
      return false;
    else return true;
  };

  const submitHandler = (e) => {
    e.preventDefault();
    let size_arr = [];
    let state_size = variation;
    state_size.map((size_value) => {
      return size_arr.push({
        color: size_value.color,
        price: size_value.price,
        size: total(size_value),
      });
    });

    const {
      title,
      description,
      price,
      old_price,
      shipping_info,
      sale_percentage,
      category,
      sku,
      sale_start_time,
      sale_end_time,
    } = inputValueState.inputValues;

    let products = {
      title: title,
      description: description,
      price: price,
      old_price: old_price,
      brand: brand,
      category: categories,
      section: section,
      variation: size_arr,
      shipping_info: shipping_info,
      sale_percentage: sale_percentage,
      added_by: "SuperAdmin",
      sku: sku,
      sale_start_time: sale_start_time,
      sale_end_time: sale_end_time,
    };

    let values_validation= validate_form(products);
  };

  return (
    <div>
      <Header>
        <h2>Create Product</h2>
        <form onSubmit={submitHandler}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                name="title"
                variant="outlined"
                required
                fullWidth
                label="Title"
                autoFocus
                autoComplete="off"
                onChange={onChange}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="Description"
                name="description"
                autoComplete="off"
                onChange={onChange}
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
                autoComplete="off"
                onChange={onChange}
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
                autoComplete="off"
                onChange={onChange}
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
                autoComplete="off"
                onChange={onChange}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="Sale Percentage"
                type="text"
                autoComplete="off"
                name="sale_percentage"
                onChange={onChange}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="Shipping Info"
                type="text"
                autoComplete="off"
                name="shipping_info"
                onChange={onChange}
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
                  // onChange={handleChangeCatagories}
                  onChange={(e) => {
                    setCategoryFlag(false);
                    handleChangeCatagories(e.target.value);
                  }}
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

            {categoryFlag ? (
              <Grid item xs={12} sm={6}>
                <FormControl className={classes.formControl} fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Sub Categories
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    // value={subCategories}
                    onChange={(e) => {
                      setSubCategoryFlag(false);
                      handleChangeSubCatagories(e.target.value);
                    }}
                  >
                    <MenuItem value={"a"}>a</MenuItem>
                    <MenuItem value={"b"}>b</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            ) : null}

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

            
            {On_Sale==='yes'?(
              <React.Fragment>
              <Grid item xs={12} sm={12}>
              <TextField
                id="date"
                label="Sale Start Date"
                type="date"
                defaultValue="2017-05-24"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={(e)=>{startDateHandler(e)}}
              />
              <TextField
                id="date"
                label="Sale end Date"
                type="date"
                defaultValue="2017-05-24"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            </React.Fragment>):null
            }
            

              

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
              <Button
                variant="contained"
                color="primary"
                onClick={addVariation}
              >
                Add Variation
              </Button>
            </Grid>

            {variation.map((count) => {
              return (
                <Grid
                  item
                  xs={12}
                  sm={12}
                  style={{ border: "3px solid blue", background: "#ffff" }}
                  key={count._id}
                >
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    autoComplete="off"
                    id={count._id}
                    defaultValue={count.color}
                    label="Color"
                    type="text"
                    name="color"
                    onChange={variation_color}
                  />
                  <br />
                  <br />
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    autoComplete="off"
                    id={count._id}
                    label="Price"
                    type="text"
                    name="price"
                    onChange={variation_price}
                  />
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => addSizeStock(count._id)}
                    style={{ margin: "15px 0" }}
                  >
                    Add
                  </Button>

                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => delete_variation(count._id)}
                  >
                    -
                  </Button>
                  <br />
                  <br />

                  {count.size.map((value) => {
                    return (
                      <React.Fragment>
                        <TextField
                          variant="outlined"
                          required
                          fullWidth
                          label="Size"
                          type="text"
                          autoComplete="off"
                          name={count._id + "," + value._id}
                          onChange={variation_size}
                          defaultValue={value.size}
                        />

                        <TextField
                          variant="outlined"
                          required
                          fullWidth
                          label="Stock"
                          type="text"
                          autoComplete="off"
                          name={count._id + "," + value._id}
                          defaultValue={value.stock}
                          onChange={variation_stock}
                        />

                        <Button
                          variant="contained"
                          color="secondary"
                          onClick={() => deleteSizeStock(count._id, value._id)}
                        >
                          -
                        </Button>
                      </React.Fragment>
                    );
                  })}
                </Grid>
              );
            })}

            <Grid item xs={12} sm={6}>
              <Button
                variant="contained"
                color="primary"
                onClick={submitHandler}
              >
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

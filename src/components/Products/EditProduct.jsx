import React from 'react'
import Header from "../Header/Header";

import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";

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

  

const EditProduct = () => {

    const classes = useStyles();
   
  
    return (
        <div>
            <Header>
                <h2>Edit Product</h2>

            </Header>
        </div>
    )
}

export default EditProduct;
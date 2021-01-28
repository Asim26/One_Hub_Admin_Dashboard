import React, { useState} from "react";
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import Chip from '@material-ui/core/Chip';




function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
    formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
}));

const CreateBrand=() =>{

    const classes = useStyles();
    
    const [ BrandsInputsState, setBrandsInputsState] = useState({
        brandsInputs:{
          name: "",
          location: "",
          website: "",
          contract_type: "",
          sale_percentage: "",
          start_time:"",
          end_time:"",
          email:"",
          password:"",
          minimum_orders: "",
          commission_percentage: "",
          sale_start_time:"",
          sale_end_time: "",
          brand_introduction:"",
          contact_no: ""
        }
      })

    const [selectedBranches, setSelectedBranches] = useState([]); 

    const onChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        const brandsInputs   = BrandsInputsState.brandsInputs;
        setBrandsInputsState({
          brandsInputs:{
            ...brandsInputs,
            [name]: value
          }
        })
        console.log("106: ",[name],value);
    };

    const handleBranches =(event)=>{
        event.preventDefault();
        let value =event.target.value; 
        if(event.value == null){
            console.log("no branch is added");
        }else{
            setSelectedBranches(
                {
                    ...selectedBranches,
                    value

                }
            )
        }
        console.log("125:",selectedBranches);
    }

    const submitHandler = (event)=>{
        event.preventDefault();
        console.log(BrandsInputsState)
    }

      

      return (

        <Container component="main" maxWidth="sm">
          <CssBaseline />
          <div className={classes.paper}>
            <Typography component="h1" variant="h5">
              Create Brand
            </Typography>


            <form onSubmit ={submitHandler} className={classes.form} noValidate>

              <Grid container spacing={2}>

                <Grid item xs={12} sm={6}>
                  <TextField
                    name="name"
                    variant="outlined"
                    required
                    fullWidth
                    label="Name"
                    autoFocus
                    onChange={onChange}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    label= "Email"
                    name="email"
                    onChange={onChange}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    label="Password"
                    type="text"
                    name="password"
                    onChange={onChange}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    label="Address"
                    type="text"
                    name = "location"
                    onChange={onChange}
                   />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    label="Branches"
                    type="text"
                    name = "location"
                    onChange={handleBranches}
                   />
                </Grid>


                <Grid item xs={6}>
              <Button
              style={{backgroundColor :'lightgreen',color :'white'}}
                type="submit"
                fullWidth
                variant="contained"
                color="success"
                className={classes.submit}
              >
                Save
              </Button>
              </Grid>
              <Grid item xs={6}>
              <Button
                fullWidth
                variant="contained"
                color="secondary"
                className={classes.submit}
              >
                Cancel
              </Button>
              </Grid>

              </Grid>
           
            </form>


          </div>
        
        </Container>
    )
}

export default CreateBrand;
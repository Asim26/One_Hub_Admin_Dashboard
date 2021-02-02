import React, { useState} from "react";
import {categoryOptions,fullFilledByOptions} from '../../../Utilities/OptionConstants';
import {NETWORK_ERROR} from '../../../Utilities/constant'
import {useHistory} from 'react-router-dom';
import {createBrandRequest} from '../../../Services/data';
import Creatable from 'react-select/creatable';
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
    minWidth: 260,
    maxWidth: 310,
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

const CreateBrand=props =>{

    const history = useHistory();

   
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

    
    const [onSale, setOnSale] = useState("false")  
    const [multipleBrand, setMultipleBrand] = useState(false)
    const [selectedMultiBrand, setSelectedMultiBrand] = useState([])
    const [selectedBranches, setSelectedBranches] = useState([]); 
    const [selectedCities, setSelectedCities] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [subCategoryFlag, setSubCategoryFlag] = useState(false);
    const [selectedSubCategory, setSelectedSubCategory] = useState([]);
    const [fullFilled, setFullFilled] = useState("")

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
    };



    const handleBranches = (event, productItems) => {
        var array = [];
        if (event === null) {
          setSelectedBranches(array)
        } else {
          event.forEach(function (item) {
            array.push(item.label);
          });
          setSelectedBranches(array)
        }
      };

      const handleCities = (event, productItems) => {
        var array = [];
        if (event === null) {
          setSelectedCities(array)
        } else {
          event.forEach(function (item) {
            array.push(item.label);
          });
          setSelectedCities(array);
        }
      };
    
      const handleCategories = (event) => {

        var array = [];
        let value="";
        if (event === null) {
          setSelectedCategories(array);
        } else {
          event.forEach(function (item) {
            array.push(item.label);
          });
          value= array[array.length-1];
          setSelectedCategories(array)
        }
         isCategoryOption(value)
      };

      
  const isCategoryOption =(value) =>{
    categoryOptions.map((category) =>{
      if(category.label === value){
        // setCategoryValue(value);
        setSubCategoryFlag(true)
      }
    })
  }
      
    
  const handleSubCategories = (event) => {
      
      var array = [];
    if (event === null) {
      setSelectedSubCategory(event)
    } else {
        event.forEach(function (item) {
            array.push(item.label);
       
      })
      setSelectedSubCategory(array)
        
    }
}
    const multipleBrandHandler = (event, productItems) => {
        var array = [];
        if (event === null) {
          setSelectedMultiBrand(array)
        } else {
          event.forEach(function (item) {
            array.push(item.label);
            
          });
          setSelectedMultiBrand(array)
        }
      };

    const timingsHandler = (time) =>{
       
        time = time.toString ().match (/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];
      
        if (time.length > 1) { 
          time = time.slice (1); 
          time[5] = +time[0] < 12 ? ' AM' : ' PM'; 
          time[0] = +time[0] % 12 || 12; 
        }
        return time.join (''); 
    }
    
    
  const validateForm = (brands) =>{
    if(brands.name.length === 0 || brands.email.length === 0 || brands.password.lenth===0|| brands.location.length === 0 || 
      brands.branches.length===0 || brands.cities.length === 0  ||
      brands.categories.length===0 ||brands.allow_multiple_brands.length === 0||
      (brands.allow_multiple_brands && brands.multiple_brands.length === 0) ||
      brands.timings.length < 15 || brands.fulfilled_by.length === 0 ||
      brands.contract_type.length === 0 || brands.on_sale.length === 0 || (brands.on_sale && (brands.sale_end_time.length === 0 || brands.sale_start_time.length===0)) ||
      brands.sale_percentage.length === 0 || brands.minimum_orders.length === 0 || 
      brands.commission_percentage.length === 0 || brands.brand_introduction.length=== 0 
      || brands.contact_no.length === 0
      )
      return false
    else 
      return true
  }



    const submitHandler =async (event)=>{
       
        event.preventDefault();
        let brandInputs = BrandsInputsState.brandsInputs;
        let start_time="", end_time="";
        start_time = timingsHandler(brandInputs.start_time);
        end_time = timingsHandler(brandInputs.end_time);
        let timings = start_time + " to " + end_time;
        let brands={
            email: brandInputs.email,
            password: brandInputs.password,
            name: brandInputs.name,
            location: brandInputs.location,
            branches: selectedBranches, 
            cities: selectedCities, 
            categories: selectedCategories, 
            sub_categories: selectedSubCategory,
            website: brandInputs.website, 
            timings: timings, 
            contract_type: brandInputs.contract_type,
            on_sale: onSale,
            sale_percentage: brandInputs.sale_percentage,
            contact_no: brandInputs.contact_no,
            minimum_orders: brandInputs.minimum_orders,
            commission_percentage: brandInputs.commission_percentage,
            allow_multiple_brands: multipleBrand,
            multiple_brands: selectedMultiBrand,
            sale_start_time: brandInputs.sale_start_time,
            sale_end_time: brandInputs.sale_end_time,
            brand_introduction: brandInputs.brand_introduction,
            fulfilled_by: fullFilled,
        }



        let valuesValidation= validateForm(brands); 

        const token = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InN0YXR1cyI6IkFjdGl2ZSIsIl9pZCI6IjVmMmVmOTZkNWEwOWM1MzUyY2E1NmNkMSIsImVtYWlsIjoiYWRtaW5AeWFob28uY29tIiwicGFzc3dvcmQiOiIkMmIkMTAkY1BaSkxoc3dLSndiaHF5aWJ6TGIwZTh6S05mVFFpcHdieE55L1Uyd25rS3ZIOHhnallsZUMiLCJyb2xlIjoiU3VwZXJBZG1pbiIsImFkZGVkX2RhdGUiOiIyMDIwLTA4LTA4VDE5OjEzOjQ5LjMyNVoiLCJfX3YiOjB9LCJpYXQiOjE2MTE2NTExMzYsImF1ZCI6ImFkbWluIiwiaXNzIjoibm9kZV9iYWNrZW5kIiwic3ViIjoiYWRtaW5AeWFob28uY29tIn0.K8BSSZ3d4MZcrmWwWcC6cnzqOZqluqopugCTKEWfv_tQ1KjcooH2k3G10NhHeoolniT-Prc2w2ZI7scSofueJw";


        if(valuesValidation === true){

          let createBrandResponse = await createBrandRequest(brands,token);
          console.log("281: ",createBrandResponse);

          if (createBrandResponse === NETWORK_ERROR) {
           
            alert(NETWORK_ERROR);
          }else{
            const status = createBrandResponse.data.metadata.status;
            history.push('./brands');
          } 
          
        }

            
      

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
                    
                  
                <Creatable style={{height:'200px'}}
                    isClearable
                    isMulti
                    placeholder = 'Branches*'
                    onChange={handleBranches}
                />
                
                </Grid> 

                <Grid item xs={12} sm={6}>      
                <Creatable
                    isClearable
                    isMulti
                    placeholder = 'Cities*'
                    onChange={handleCities}
                  />
                
                </Grid>


                <Grid item xs={12} sm={6}>    
                    <Creatable
                      isClearable
                      options={categoryOptions}
                      isMulti
                      placeholder ="Categories"
                      onChange={(e)=>{
                        setSubCategoryFlag(false)
                        handleCategories(e)
                      }
                      }
                    />
                
                </Grid>

                {subCategoryFlag? (<Grid item xs={12} sm={6}>    
                    <Creatable
                      isClearable
                      isMulti
                      placeholder ="Sub Categories*"
                      onChange={
                      
                        handleSubCategories
                      }
                      
                    />
                
                </Grid>): (<Grid item xs={12} sm={6}></Grid>) }

                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    label="Start Time"
                    type="time"
                    name = "start_time"
                    onChange={onChange}
                   />
                </Grid>
                
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    label="End Time"
                    type="time"
                    name = "end_time"
                    onChange={onChange}
                   />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    label="Contact No"
                    type="number"
                    name = "contact_no"
                    onChange={onChange}
                   />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    label="Contract Type"
                    type="text"
                    name = "contract_type"
                    onChange={onChange}
                   />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    label="Sale Percentage"
                    type="number"
                    name = "sale_percentage"
                    onChange={onChange}
                   />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    label="Minimum Orders"
                    type="number"
                    name = "minimum_orders"
                    onChange={onChange}
                   />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    label="Commission Percentage"
                    type="number"
                    name = "commission_percentage"
                    onChange={onChange}
                   />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    label="Website"
                    type="text"
                    name = "website"
                    onChange={onChange}
                   />
                </Grid>

                <Grid item xs={12} sm={6} >
        <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Fulfilled By</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
    
        value = {fullFilled}
          onChange={(event) => {
             setFullFilled(event.target.value);
          }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value = "Onehub"  label ="Onehub">Onehub</MenuItem>
          <MenuItem value = "Brand"  label ="Brand">Brand</MenuItem>
         
        </Select>
      </FormControl>
      </Grid>

      <Grid item xs={12} sm={6}>
        <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">On Sale</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
        value = {onSale}
          onChange={(event) => {
             setOnSale(event.target.value);
          }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value = "true"  label ="Yes">Yes</MenuItem>
          <MenuItem value = "false"  label ="No">No</MenuItem>
         
        </Select>
      </FormControl>
      </Grid>

      { onSale === 'true' ? (
      
      <Grid container>  
            <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              required
              fullWidth
              label="Sale Start Time"
              type="date"
              name = "sale_start_time"
              onChange={onChange}
             />
            </Grid>

            <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              required
              fullWidth
              label="Sale End Time"
              type="date"
              name = "sale_end_time"
              onChange={onChange}
             />
            </Grid>
           
            </Grid>
      ):(<div></div>) }



    <Grid item xs={12} sm={6} >
        <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Multiple Brands</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
    
          value = {multipleBrand}
          onChange={(event) => {
             const value = event.target.value == 'true' ? true:false;
             setMultipleBrand(value);
          }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value = 'true'  label ="Allowed">Allowed</MenuItem>
          <MenuItem value = 'false'  label ="Not Allowed">Not Allowed</MenuItem>
         
        </Select>
      </FormControl>
      </Grid>

      {multipleBrand === true? (

<Grid item xs={12} sm={6}>      
<Creatable
    isClearable
    isMulti
    placeholder = 'add brands*'
    onChange={multipleBrandHandler}
  />

</Grid>


      ):(<Grid item xs={12} sm={6}></Grid>)}


                <Grid item xs={12} >
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    label="Brand Introduction"
                    type="textarea"
                    name = "brand_introduction"
                    onChange={onChange}
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
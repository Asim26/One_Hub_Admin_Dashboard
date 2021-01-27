import React,{useEffect} from 'react'
import { connect } from "react-redux";
import {fetchBrand} from '../../redux/actions/action';
import {FetchBrandRequest} from '../../Services/data'
import { NETWORK_ERROR } from '../../Utilities/constant';

import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});


function Row(props) {
  const { brand } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {brand.name}
        </TableCell>
        <TableCell align="right">{brand.timings}</TableCell>
        <TableCell align="right">{brand.status}</TableCell>
        <TableCell align="right">Edit Brand</TableCell>
        <TableCell align="right">Delete Brand</TableCell>
      </TableRow>
       <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                Brand Details
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell variant='h6' >Name</TableCell>
                    <TableCell >On Sale</TableCell>
                    <TableCell >Address</TableCell>
                    <TableCell >Contract Type</TableCell>
                    <TableCell >Contact No</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>

           <TableRow className={classes.root}>
       
        {/* <TableCell component="th" scope="row">
          {brand.name}
        </TableCell> */}
        <TableCell > {brand.name}</TableCell>
        <TableCell >{brand.on_sale ? <p>yes</p> :<p> No</p>}</TableCell>
        <TableCell >{brand.timings}</TableCell>
        <TableCell >{brand.contract_type}</TableCell>
        <TableCell >{brand.contact_no}</TableCell>
        
        </TableRow>
        <h2>Introduction</h2>
        <Typography variant="h9" gutterBottom component="div">
        <p >{brand.brand_introduction}</p>           
              </Typography>
     
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow> 
    </React.Fragment>
  );
}




const Brands =(props) => {

    useEffect(async () => {
       
        const token = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InN0YXR1cyI6IkFjdGl2ZSIsIl9pZCI6IjVmMmVmOTZkNWEwOWM1MzUyY2E1NmNkMSIsImVtYWlsIjoiYWRtaW5AeWFob28uY29tIiwicGFzc3dvcmQiOiIkMmIkMTAkY1BaSkxoc3dLSndiaHF5aWJ6TGIwZTh6S05mVFFpcHdieE55L1Uyd25rS3ZIOHhnallsZUMiLCJyb2xlIjoiU3VwZXJBZG1pbiIsImFkZGVkX2RhdGUiOiIyMDIwLTA4LTA4VDE5OjEzOjQ5LjMyNVoiLCJfX3YiOjB9LCJpYXQiOjE2MTE2NTExMzYsImF1ZCI6ImFkbWluIiwiaXNzIjoibm9kZV9iYWNrZW5kIiwic3ViIjoiYWRtaW5AeWFob28uY29tIn0.K8BSSZ3d4MZcrmWwWcC6cnzqOZqluqopugCTKEWfv_tQ1KjcooH2k3G10NhHeoolniT-Prc2w2ZI7scSofueJw";
        const brandResponse = await FetchBrandRequest(token);
       
  
        if (brandResponse === NETWORK_ERROR) {
          alert(NETWORK_ERROR);
          
        } 
        else {
          props.fetchBrand(brandResponse.data.payload.data);  
         
        }
  
        }, [])
  

  return (
      
    <TableContainer component={Paper}>
      
      <Table aria-label="collapsible table">
        <TableHead>
        
                
              
          <TableRow>
            <TableCell />
            <TableCell>Name</TableCell>
            <TableCell align="right">Timing</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Edit Brand</TableCell>
            <TableCell align="right">Delete Brand</TableCell>
          </TableRow>
       
        </TableHead>
        <TableBody>
        { props.brands && props.brands.map((brand) => (
            <Row key={brand.name} brand ={brand} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

const mapStateToProps = (state) => {
    return {
      brands : state.fetchUsersData.brands,
    };
  };
  const mapDispatchToProps = (dispatch) => {
    return {
      fetchBrand: (brandData) => dispatch(fetchBrand(brandData))
    };
  };
  


export default connect(mapStateToProps, mapDispatchToProps)(Brands);

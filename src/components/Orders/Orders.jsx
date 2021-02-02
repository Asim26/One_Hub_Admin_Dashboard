import React, { useEffect } from "react";
import Header from "../Header/Header";

import { NETWORK_ERROR } from "../../Utilities/constants";
import { fetchOrdersRequest } from "../../Services/dataService";
import { connect } from "react-redux";
import { listOfOrders } from "../../Redux/actions/action";

import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

const useRowStyles = makeStyles({
  root: {
    "& > *": {
      borderBottom: "unset",
    },
  },
});

const Row = (props) => {
  const { user } = props.row;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();
  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {user._id}
        </TableCell>
        <TableCell align="right"> {user.name} </TableCell>
        <TableCell align="right"> {user.phone} </TableCell>
        <TableCell align="right">{props.row.total_price}</TableCell>
        <TableCell align="right">{props.row.date_created}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                Customer Details
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Category</TableCell>
                    <TableCell align="left">Quantity</TableCell>
                    <TableCell align="left">Color</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  
                  {props.row.order.map((historyRow) => (
                    <TableRow key={historyRow.brand}>
                      <TableCell component="th" scope="row">
                        {historyRow.brand}
                      </TableCell>
                      <TableCell>{historyRow.title}</TableCell>
                      <TableCell align="left">{historyRow.quantity}</TableCell>
                      <TableCell align="left">
                        {" "}
                        {historyRow.variants.color}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
};

const Orders = (props) => {
  useEffect(async () => {
    const token =
      "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InN0YXR1cyI6IkFjdGl2ZSIsIl9pZCI6IjVmMmVmOTZkNWEwOWM1MzUyY2E1NmNkMSIsImVtYWlsIjoiYWRtaW5AeWFob28uY29tIiwicGFzc3dvcmQiOiIkMmIkMTAkY1BaSkxoc3dLSndiaHF5aWJ6TGIwZTh6S05mVFFpcHdieE55L1Uyd25rS3ZIOHhnallsZUMiLCJyb2xlIjoiU3VwZXJBZG1pbiIsImFkZGVkX2RhdGUiOiIyMDIwLTA4LTA4VDE5OjEzOjQ5LjMyNVoiLCJfX3YiOjB9LCJpYXQiOjE2MTE3NTM3NTcsImF1ZCI6ImFkbWluIiwiaXNzIjoibm9kZV9iYWNrZW5kIiwic3ViIjoiYWRtaW5AeWFob28uY29tIn0.Al0uRnNcrAK8GZumRVbMgS1O8buvmZL2mGmnSueyIWSyi4MX0HaRe9oFH9jLLSzDdSR1cAz-NZxdydAHKRYTLg";
    const ordersResponse = await fetchOrdersRequest(token);
    if (ordersResponse === NETWORK_ERROR) {
      alert("Network Error ...");
    } else {
      props.listOfOrdersHandler(ordersResponse.data.payload.data);
    }
  }, []);
  return (
    <div>
      <Header>
        <h1>Orders</h1>

        <TableContainer component={Paper}>
          <Table aria-label="collapsible table">
            <TableHead>
              <TableRow>
                <TableCell />
                <TableCell>Id</TableCell>
                <TableCell align="right">Name</TableCell>
                <TableCell align="right">Phone</TableCell>
                <TableCell align="right">Price</TableCell>
                <TableCell align="right">Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.ListOfOrders.map((orderList) => (
                <Row key={Math.random()} row={orderList} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Header>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    ListOfOrders: state.myReducerOne.listOfOrders,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    listOfOrdersHandler: (OrdersList) => dispatch(listOfOrders(OrdersList)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Orders);
// export default Orders;

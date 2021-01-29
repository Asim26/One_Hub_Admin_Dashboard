import React, { useEffect } from "react";
import Header from "../Header/Header";
import { connect } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import { fetchOrderSummaryRequest } from "../../Services/dataService";
import { NETWORK_ERROR } from "../../Utilities/constants";
import { fetchOrderSummary } from "../../Redux/actions/action";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const Dashboard = (props) => {
  const classes = useStyles();

  useEffect(async () => {
    const token =
        "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InN0YXR1cyI6IkFjdGl2ZSIsIl9pZCI6IjVmMmVmOTZkNWEwOWM1MzUyY2E1NmNkMSIsImVtYWlsIjoiYWRtaW5AeWFob28uY29tIiwicGFzc3dvcmQiOiIkMmIkMTAkY1BaSkxoc3dLSndiaHF5aWJ6TGIwZTh6S05mVFFpcHdieE55L1Uyd25rS3ZIOHhnallsZUMiLCJyb2xlIjoiU3VwZXJBZG1pbiIsImFkZGVkX2RhdGUiOiIyMDIwLTA4LTA4VDE5OjEzOjQ5LjMyNVoiLCJfX3YiOjB9LCJpYXQiOjE2MTE3NTM3NTcsImF1ZCI6ImFkbWluIiwiaXNzIjoibm9kZV9iYWNrZW5kIiwic3ViIjoiYWRtaW5AeWFob28uY29tIn0.Al0uRnNcrAK8GZumRVbMgS1O8buvmZL2mGmnSueyIWSyi4MX0HaRe9oFH9jLLSzDdSR1cAz-NZxdydAHKRYTLg",
      obj = {
        days: "7",
      };

    const orderSummaryResponse = await fetchOrderSummaryRequest(obj, token);
    if (orderSummaryResponse === NETWORK_ERROR) {
      alert("NETWORK ERROR");
    } else {
      props.fetchOrderSummary(orderSummaryResponse.data.payload.data.orderList);
    }
  }, []);

  return (
    <div>
      <Header>
        <h2 style={{ align: "center" }}>Order Summary</h2>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell align="right">Price</TableCell>
                <TableCell align="right">Status</TableCell>
                <TableCell align="right">Date Created</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.orderSummary.map((ordersSummary) => (
                <TableRow key={ordersSummary.order_id}>
                  <TableCell component="th" scope="row">
                    {ordersSummary.order_id}
                  </TableCell>
                  <TableCell align="right">
                    {ordersSummary.total_price}
                  </TableCell>
                  <TableCell align="right">{ordersSummary.status}</TableCell>
                  <TableCell align="right">
                    {ordersSummary.date_created}
                  </TableCell>
                </TableRow>
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
    orderSummary: state.myReducerOne.orderSummary,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchOrderSummary: (orderSummaryData) =>
      dispatch(fetchOrderSummary(orderSummaryData)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

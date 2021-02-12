import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchBrand, singleBrand } from '../../redux/actions/action';
import { FetchBrandRequest, deleteBrandRequest } from '../../Services/data';
import { NETWORK_ERROR } from '../../Utilities/constant';
import BrandInformation from './BrandInformation';
import { Link } from 'react-router-dom';
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
import Button from '@material-ui/core/Button';
import SystemUpdateAltSharpIcon from '@material-ui/icons/SystemUpdateAltSharp';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import DeleteForeverRoundedIcon from '@material-ui/icons/DeleteForeverRounded';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import './Brands.css';

const useRowStyles = makeStyles({
	root: {
		'& > *': {
			borderBottom: 'unset'
		}
	}
});

function Row(props) {
	const history = useHistory();
	const { brand } = props;
	const [ open, setOpen ] = React.useState(false);
	const classes = useRowStyles();

	const editHandler = () => {
		props.singleBrand(brand._id);
	};

	const deleteHandler = async (brandId) => {
		props.singleBrand(brandId);
		const obj = {
			_id: brandId
		};
		const token =
			'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InN0YXR1cyI6IkFjdGl2ZSIsIl9pZCI6IjVmMmVmOTZkNWEwOWM1MzUyY2E1NmNkMSIsImVtYWlsIjoiYWRtaW5AeWFob28uY29tIiwicGFzc3dvcmQiOiIkMmIkMTAkY1BaSkxoc3dLSndiaHF5aWJ6TGIwZTh6S05mVFFpcHdieE55L1Uyd25rS3ZIOHhnallsZUMiLCJyb2xlIjoiU3VwZXJBZG1pbiIsImFkZGVkX2RhdGUiOiIyMDIwLTA4LTA4VDE5OjEzOjQ5LjMyNVoiLCJfX3YiOjB9LCJpYXQiOjE2MTE2NTExMzYsImF1ZCI6ImFkbWluIiwiaXNzIjoibm9kZV9iYWNrZW5kIiwic3ViIjoiYWRtaW5AeWFob28uY29tIn0.K8BSSZ3d4MZcrmWwWcC6cnzqOZqluqopugCTKEWfv_tQ1KjcooH2k3G10NhHeoolniT-Prc2w2ZI7scSofueJw';

		const deleteResponse = await deleteBrandRequest(obj, token);
		console.log('delete response : ', deleteResponse);

		history.push('./brands');
		const brandResponse = await FetchBrandRequest(token);

		if (brandResponse === NETWORK_ERROR) {
			alert(NETWORK_ERROR);
		} else {
			props.fetchBrand(brandResponse.data.payload.data);
		}
	};
	return (
		<React.Fragment>
			<TableRow className={classes.root}>
				<TableCell className="Brands-tableHead">
					<IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
						{open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
					</IconButton>
				</TableCell>
				<TableCell component="th" scope="row">
					{brand.name}
				</TableCell>
				<TableCell align="right">{brand.timings} </TableCell>
				<TableCell align="right">{brand.status}</TableCell>
				<TableCell align="right">
					<Link to="/editbrands">
						<SystemUpdateAltSharpIcon
							onClick={() => {
								editHandler(brand._id);
							}}
							style={{ color: 'green' }}
						/>
					</Link>
				</TableCell>
				<TableCell align="right">
					<DeleteForeverRoundedIcon
						onClick={() => {
							deleteHandler(brand._id);
						}}
						style={{ color: 'red', fontSize: '1.8rem' }}
					/>
				</TableCell>
			</TableRow>
			<TableRow>
				<TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
					<Collapse in={open} timeout="auto" unmountOnExit>
						<Box margin={1}>
							<BrandInformation brand={brand} />
						</Box>
					</Collapse>
				</TableCell>
			</TableRow>
		</React.Fragment>
	);
}

const Brands = (props) => {
	useEffect(async () => {
		const token =
			'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InN0YXR1cyI6IkFjdGl2ZSIsIl9pZCI6IjVmMmVmOTZkNWEwOWM1MzUyY2E1NmNkMSIsImVtYWlsIjoiYWRtaW5AeWFob28uY29tIiwicGFzc3dvcmQiOiIkMmIkMTAkY1BaSkxoc3dLSndiaHF5aWJ6TGIwZTh6S05mVFFpcHdieE55L1Uyd25rS3ZIOHhnallsZUMiLCJyb2xlIjoiU3VwZXJBZG1pbiIsImFkZGVkX2RhdGUiOiIyMDIwLTA4LTA4VDE5OjEzOjQ5LjMyNVoiLCJfX3YiOjB9LCJpYXQiOjE2MTE2NTExMzYsImF1ZCI6ImFkbWluIiwiaXNzIjoibm9kZV9iYWNrZW5kIiwic3ViIjoiYWRtaW5AeWFob28uY29tIn0.K8BSSZ3d4MZcrmWwWcC6cnzqOZqluqopugCTKEWfv_tQ1KjcooH2k3G10NhHeoolniT-Prc2w2ZI7scSofueJw';
		const brandResponse = await FetchBrandRequest(token);

		if (brandResponse === NETWORK_ERROR) {
			alert(NETWORK_ERROR);
		} else {
			props.fetchBrand(brandResponse.data.payload.data);
		}
	}, []);

	return (
		<div>
			<Link style={{ textDecoration: 'none' }} to="/createbrand">
				<Button style={{ backgroundColor: 'lightgreen', color: 'white' }} variant="contained" color="success">
					CREATE BRAND
				</Button>
			</Link>
			<TableContainer component={Paper}>
				<Table aria-label="collapsible table">
					<TableHead>
						<TableRow>
							<TableCell />
							<TableCell>
								<span className="Brands-tableHead">Name</span>
							</TableCell>
							<TableCell align="right">
								<span className="Brands-tableHead">Timing</span>
							</TableCell>
							<TableCell align="right">
								<span className="Brands-tableHead">Status</span>
							</TableCell>
							<TableCell align="right">
								<span className="Brands-tableHead">Edit Brand</span>
							</TableCell>
							<TableCell align="right">
								<span className="Brands-tableHead">Delete Brand</span>
							</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{props.brands &&
							props.brands.map((brand) => (
								<Row
									key={brand.name}
									fetchBrand={props.fetchBrand}
									singleBrand={props.singleBrand}
									brand={brand}
								/>
							))}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		brands: state.fetchUsersData.brands
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		singleBrand: (brandId) => dispatch(singleBrand(brandId)),
		fetchBrand: (brandData) => dispatch(fetchBrand(brandData))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Brands);

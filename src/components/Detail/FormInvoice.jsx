import * as React from 'react';
import { styled } from '@mui/material/styles';
import { makeStyles } from "@material-ui/core/styles";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import custom from './formInvoice.module.css';
import MenuItem from '@mui/material/MenuItem';
import Link from '@mui/material/Link';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1.5),
    textAlign: 'left',
    backgroundColor: '#131522',
    color: 'white',
    boxShadow: 'none'
}));

const useStyles = makeStyles({
    root: {
      "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
        borderColor: "black",
      },
      "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
        borderColor: "black",
      },
      "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: "black",
      },
      "& .MuiOutlinedInput-input": {
        color: "black",
        padding: "10px 14px",
      },
      "&:hover .MuiOutlinedInput-input": {
        color: "black"
      },
      "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
        color: "black"
      },
      "& .MuiInputLabel-outlined": {
        color: "black"
      },
      "&:hover .MuiInputLabel-outlined": {
        color: "black"
      },
      "& .MuiInputLabel-outlined.Mui-focused": {
        color: "black"
      }
    },
    noBorder: {
      border: "none",
    },
});

const Forminvoice = () => {
    const [valueID, setValueID] = React.useState('');
    const [valueName, setValueName] = React.useState('');
    const [valueEmail, setValueEmail] = React.useState('');
    const [valueAddress, setValueAddress] = React.useState('');
    const [valueInvoiceDate, setValueInvoiceDate] = React.useState('');
    const [valueTerms, setValueTerms] = React.useState('3-Days');
    const [valuePaymentDate, setValuePaymentDate] = React.useState('');
    const [valueItemName, setValueItemName] = React.useState('');
    const [valuePrice, setValuePrice] = React.useState('');
    const [valueTotal, setValueTotal] = React.useState('');
    const handleChangeID = (event) => {
        setValueID(event.target.value);
    };
    const handleChangeName = (event) => {
        setValueName(event.target.value);
    };
    const handleChangeEmail = (event) => {
        setValueEmail(event.target.value);
    };
    const handleChangeAddress = (event) => {
        setValueAddress(event.target.value);
    };
    const handleChangeInvoiceDate = (event) => {
        setValueInvoiceDate(event.target.value);
    };
    const handleChangeTerms = (event) => {
        setValueTerms(event.target.value);
    };
    const handleChangePaymentDate = (event) => {
        setValuePaymentDate(event.target.value);
    };
    const handleChangeItemName = (event) => {
        setValueItemName(event.target.value);
    };
    const handleChangePrice = (event) => {
        setValuePrice(event.target.value);
    };
    const handleChangeTotal = (event) => {
        setValueTotal(event.target.value);
    };
    const days = [
        {
          value: '3-Days',
          label: '3 Day',
        },
        {
          value: '7-Days',
          label: '7 Day',
        },
        {
          value: '14-Days',
          label: '14 Day',
        },
        {
          value: '30-Days',
          label: '30 Day',
        },
    ];
    const classes = useStyles();
    return (
    <Box sx={{ flexGrow: 1}}>
      <Grid container justifyContent="center">
        <Grid item xs={8} >
          <Item><h1>New Invoice</h1></Item>
          <Item>
            <span className={custom.titleInput}>Client's ID</span>
            <TextField
              sx={{bgcolor: '#FFFFFF', borderRadius:2}}
              className={classes.root}
              placeholder="Input Client ID ..."
              value={valueID}
              onChange={handleChangeID}
              fullWidth
              InputProps={{
                classes:{notchedOutline:classes.noBorder}
              }}
            />
          </Item>
          <Item>
            <span className={custom.titleInput}>Client's Name</span>
            <TextField
              sx={{bgcolor: '#FFFFFF', borderRadius:2}}
              className={classes.root}
              placeholder="Input Client Name ..."
              value={valueName}
              onChange={handleChangeName}
              fullWidth
              InputProps={{
                classes:{notchedOutline:classes.noBorder}
              }}
            />
          </Item>
          <Item>
            <span className={custom.titleInput}>Client's Email</span>
            <TextField
              sx={{bgcolor: '#FFFFFF', borderRadius:2}}
              className={classes.root}
              placeholder="Input Client Email ..."
              value={valueEmail}
              onChange={handleChangeEmail}
              fullWidth
              InputProps={{
                classes:{notchedOutline:classes.noBorder}
              }}
            />
          </Item>
          <Item>
            <span className={custom.titleInput}>Client's Address</span>
            <TextField
              sx={{bgcolor: '#FFFFFF', borderRadius:2}}
              className={classes.root}
              placeholder="Input Client Address ..."
              value={valueAddress}
              onChange={handleChangeAddress}
              fullWidth
              InputProps={{
                classes:{notchedOutline:classes.noBorder}
              }}
            />
          </Item>
          <Item>
            <Box sx={{ flexGrow: 1}}>
              <Grid container justifyContent="center" spacing={2}>
                <Grid item xs={12} md={4} >
                    <Item className={custom.multipleInput}>
                        <span className={custom.titleInput}>Invoice Date</span>
                        <TextField
                            sx={{bgcolor: '#FFFFFF', borderRadius:2}}
                            className={classes.root}
                            placeholder="Input Date for Invoice ..."
                            value={valueInvoiceDate}
                            onChange={handleChangeInvoiceDate}
                            fullWidth
                            InputProps={{
                                classes:{notchedOutline:classes.noBorder}
                            }}
                        />
                    </Item>
                </Grid>
                <Grid item xs={12} md={4} >
                    <Item className={custom.multipleInput}>
                        <span className={custom.titleInput}>Payment Terms</span>
                        <TextField
                            sx={{bgcolor: '#FFFFFF', borderRadius:2}}
                            id="outlined-select-currency"
                            className={classes.root}
                            select
                            value={valueTerms}
                            onChange={handleChangeTerms}
                            fullWidth
                            InputProps={{
                                classes:{notchedOutline:classes.noBorder}
                            }}
                        >
                            {days.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Item>
                </Grid>
                <Grid item xs={12} md={4} >
                    <Item className={custom.multipleInput}>
                        <span className={custom.titleInput}>Payment Date</span>
                        <TextField
                            sx={{bgcolor: '#FFFFFF', borderRadius:2}}
                            className={classes.root}
                            placeholder="Input Client Address ..."
                            value={valuePaymentDate}
                            onChange={handleChangePaymentDate}
                            fullWidth
                            InputProps={{
                                classes:{notchedOutline:classes.noBorder}
                            }}
                        />
                    </Item>
                </Grid>
              </Grid>
            </Box>
          </Item>
          <Item>
            <Box sx={{ flexGrow: 1}}>
              <Grid container justifyContent="center" spacing={2}>
                <Grid item xs={12} md={6} >
                    <Item className={custom.multipleInput}>
                        <span className={custom.titleInput}>Item Name</span>
                        <TextField
                            sx={{bgcolor: '#FFFFFF', borderRadius:2}}
                            className={classes.root}
                            placeholder="Input Item Name for Invoice ..."
                            value={valueItemName}
                            onChange={handleChangeItemName}
                            fullWidth
                            InputProps={{
                                classes:{notchedOutline:classes.noBorder}
                            }}
                        />
                    </Item>
                </Grid>
                <Grid item xs={12} md={3} >
                    <Item className={custom.multipleInput}>
                        <span className={custom.titleInput}>Price</span>
                        <TextField
                            sx={{bgcolor: '#FFFFFF', borderRadius:2}}
                            className={classes.root}
                            placeholder="Input Price ..."
                            value={valuePrice}
                            onChange={handleChangePrice}
                            fullWidth
                            InputProps={{
                                classes:{notchedOutline:classes.noBorder}
                            }}
                        />
                    </Item>
                </Grid>
                <Grid item xs={12} md={3} >
                    <Item className={custom.multipleInput}>
                        <span className={custom.titleInput}>Total</span>
                        <TextField
                            sx={{bgcolor: '#FFFFFF', borderRadius:2}}
                            className={classes.root}
                            placeholder="Input Total ..."
                            value={valueTotal}
                            onChange={handleChangeTotal}
                            fullWidth
                            InputProps={{
                                classes:{notchedOutline:classes.noBorder}
                            }}
                        />
                    </Item>
                </Grid>
              </Grid>
            </Box>
          </Item>
          <Item sx={{textAlign: 'center',}}>
              <Box 
                sx={{
                    bgcolor: '#FFC700', 
                    borderRadius:2, 
                    color:'black', 
                    py:1, 
                    fontSize:'1.2rem'
              }}>
                <Link href="#" underline="none" className={custom.addNewItem}>
                    {'ADD NEW ITEM'}
                </Link>
              </Box>
          </Item>
          <Item>
          <Box sx={{ flexGrow: 1}}>
              <Grid container justifyContent="space-between" spacing={2}>
                <Grid item xs={12} md={3} >
                    <Item sx={{textAlign: 'center',}} className={`${custom.multipleInput}`}>
                        <Box 
                            sx={{
                                bgcolor: '#D84343', 
                                borderRadius:2, 
                                color:'black', 
                                py:1, 
                                fontSize:'1.2rem'
                        }}>
                            <Link href="#" underline="none" className={custom.addNewItem}>
                                {'ADD NEW ITEM'}
                            </Link>
                        </Box>
                    </Item>
                </Grid>
                <Grid item xs={12} md={3} >
                    <Item sx={{textAlign: 'center',}} className={`${custom.multipleInput}`}>
                        <Box 
                            sx={{
                                bgcolor: '#FFC700', 
                                borderRadius:2, 
                                color:'black', 
                                py:1, 
                                fontSize:'1.2rem'
                        }}>
                            <Link href="#" underline="none" className={custom.addNewItem}>
                                {'CREATE INVOICE'}
                            </Link>
                        </Box>
                    </Item>
                </Grid>
              </Grid>
            </Box>
          </Item>
        </Grid>
      </Grid>
    </Box>
    );
}

export default Forminvoice;

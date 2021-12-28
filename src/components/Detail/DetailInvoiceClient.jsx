import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';

function Item(props) {
    const { sx, ...other } = props;
    return (
      <Box
        sx={{
          color: '#131522',
          fontWeight: '700',
          ...sx,
        }}
        {...other}
      />
    );
}
  
Item.propTypes = {
    sx: PropTypes.oneOfType([
        PropTypes.arrayOf(
            PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool]),
        ),
        PropTypes.func,
        PropTypes.object,
    ]),
};

const Detailinvoiceclient = (props) => {
    return (
        <Box sx={{
            display: 'grid',
            gridAutoColumns: '1fr',
            gap: 1,
            alignItems: 'center',
            mb:2,
            mx: 20,
        }}>
            <Item sx={{ 
                gridRow: '1', 
                gridColumn: '1', 
                textAlign: 'left', 
                fontSize: '2rem', 
                borderRadius: 3,
                p: 1,
                pt: 3,
                pl: 8,
                height: 520,
                bgcolor: '#E5E5E5',
            }}>
                <Box sx={{mb:2}}>{props.data[0].id}</Box>
                <Box sx={{
                    mb:1, 
                    fontSize: '1.5rem',
                    display: 'grid',
                    gridAutoColumns: '1fr',
                    gap: 1,
                    pr: 8,
                }}>
                    <Item sx={{
                        gridRow: '1', 
                        gridColumn: '1 / 2', 
                    }}>
                        <Item>Invoice Date</Item>
                        <Item sx={{fontWeight:500, fontSize:'1rem'}}>{props.data[0].invoice_date}</Item>
                    </Item>
                    <Item sx={{
                        gridRow: '1', 
                        gridColumn: '2 / 3', 
                    }}>
                        <Item>Bill To</Item>
                        <Item sx={{fontWeight:500, fontSize:'1rem'}}>{props.data[0].bill_to}</Item>
                    </Item>
                    <Item sx={{
                        gridRow: '1', 
                        gridColumn: '3 / 4', 
                    }}>
                        <Item>Send To</Item>
                        <Item sx={{fontWeight:500, fontSize:'1rem'}}>{props.data[0].send_to}</Item>
                    </Item>
                </Box>
                <Box sx={{
                    mb:1, 
                    fontSize: '1.5rem',
                    display: 'grid',
                    gridAutoColumns: '1fr',
                    gap: 1,
                    pr: 8,
                }}>
                    <Item sx={{
                        gridRow: '1', 
                        gridColumn: '1 / 2',
                        pr:3 
                    }}>
                        <Item>Payment Date</Item>
                        <Item sx={{fontWeight:500, fontSize:'1rem'}}>{props.data[0].payment_date}</Item>
                    </Item>
                    <Item sx={{
                        gridRow: '1', 
                        gridColumn: '2 / 3',
                        pr:3 
                    }}>
                        <Item>Address</Item>
                        <Item sx={{fontWeight:500, fontSize:'1rem'}}>{props.data[0].address}</Item>
                    </Item>
                    <Item sx={{
                        gridRow: '1', 
                        gridColumn: '3 / 4',
                        pr:3 
                    }}>
                        <Item>From</Item>
                        <Item sx={{fontWeight:500, fontSize:'1rem'}}>{props.data[0].from}</Item>
                    </Item>
                </Box>
            </Item>
        </Box>
    );
}

export default Detailinvoiceclient;

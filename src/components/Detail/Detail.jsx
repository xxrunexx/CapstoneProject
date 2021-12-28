import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';

function Item(props) {
    const { sx, ...other } = props;
    return (
      <Box
        sx={{
          color: 'white',
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

const Detail = (props) => {
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'flex-start',
                flexDirection: 'column',
                fontSize: '1.5rem',
            }}
        >
            <Item className={`py-3`}>
                <span>{'To input by invoice_id, don’t use white space'}</span>
            </Item>
            <Item>
                <span className={`ms-5`}> {'> Example: '} {props.value}</span>
            </Item>
            <Item className={`py-3`}>
                <span>{'To input by invoice_id, don’t use white space'}</span>
            </Item>
            <Item>
                <span className={`ms-5`}> {'> Example: '} {props.value}</span>
            </Item>
        </Box>
    );
}

export default Detail;

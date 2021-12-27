import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import Link from '@mui/material/Link';
import custom from './navbar.module.css';

function Item(props) {
    const { sx, ...other } = props;
    return (
      <Box
        sx={{
          color: 'white',
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

const Navbar = () => {
    return (
        <Box sx={{
                display: 'grid',
                gridAutoColumns: '1fr',
                gap: 1,
                alignItems: 'center',
                mb: 7
        }}>
            <Item sx={{ 
                gridRow: '1', 
                gridColumn: '1 / 5', 
                textAlign: 'left', 
                fontSize: '2.5rem', 
                borderRadius: 1,
                p: 1,
                height: 80,
            }}>
                Invoices
            </Item>
            <Item sx={{ 
                gridRow: '1', 
                gridColumn: '6 / 7', 
                textAlign: 'center', 
                fontSize: '1rem', 
                borderRadius: 7, 
                bgcolor: '#FFC700',
                p: 1,
                height: 45,
            }}>
                <Link href="#" underline="none" className={custom.loginBillissuer}>
                    <LoginOutlinedIcon sx={{
                        mx:1,
                        fontSize: '1rem',
                    }}/>
                    {'Login Bill Issuers'}
                </Link>
            </Item>
        </Box>
    );
}

export default Navbar;

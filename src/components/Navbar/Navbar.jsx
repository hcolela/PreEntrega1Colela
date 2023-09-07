import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import './Navbar.css';
import CartWidget from '../CartWidget/CartWidget';

const Navbar = () => {
  
  return(<AppBar>
    <Toolbar sx={{ display:"flex", justifyContent:"space-around" }}>
      <Typography sx={{ color:"black" }}>
        Tienda OnLine
      </Typography>
      <Button sx={{ backgroundColor: "white" }}>Home</Button>
      <Button sx={{ color: "white" }}>Products</Button>
      <Button sx={{ color: "white" }}>Share It</Button>
      <CartWidget />
    </Toolbar>
  </AppBar>);  
}

export default Navbar;


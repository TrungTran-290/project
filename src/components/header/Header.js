// import { Col, Container, Row } from "reactstrap";
// import "./header.css";
// import React, { useContext, useState } from "react";
// import {
//   Collapse,
//   Navbar,
//   NavbarToggler,
//   NavbarBrand,
//   Nav,
//   NavItem,
//   NavLink,
//   UncontrolledDropdown,
//   DropdownToggle,
//   DropdownMenu,
//   DropdownItem,
//   NavbarText,
// } from "reactstrap";
// import { Link } from "react-router-dom";
// import { AppContext } from "../../AppContext";
// export default function Header() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggle = () => setIsOpen(!isOpen);
//   const { count, setCount } = useContext(AppContext);
//   const {cart}=useContext(AppContext)

//   return (
//     <div>
//       <Navbar className="Navnav d-flex navbar-expand-sm justify-content-right">
//       <div className="LOGO"></div><NavbarBrand className="brand" href="/">shop</NavbarBrand>
//         <NavbarToggler onClick={toggle} />
//         <Collapse isOpen={isOpen} navbar>
//           <Nav className="me-auto" navbar>
//             <NavItem>
//               <NavLink href="/components/">Components</NavLink>
//             </NavItem>
//             <NavItem>
//               <NavLink href="https://github.com/reactstrap/reactstrap">
//                 GitHub
//               </NavLink>
//             </NavItem>
//             <UncontrolledDropdown nav inNavbar>
//               <DropdownToggle nav caret>
//                 Options
//               </DropdownToggle>
//               <DropdownMenu right>
//                 <DropdownItem>Option 1</DropdownItem>
//                 <DropdownItem>Option 2</DropdownItem>
//                 <DropdownItem divider />
//                 <DropdownItem>Reset</DropdownItem>
//               </DropdownMenu>
//             </UncontrolledDropdown>
//           </Nav>
//           <NavbarText>Simple Text</NavbarText>
//         </Collapse>
//         <Link className="Shopping" to="/cart"><i class="fa-solid fa-cart-shopping"></i> <span>{cart.length}</span></Link>
//       </Navbar>
//     </div>
//   );
// }
import React, { useContext, useState } from "react";
import { AppBar, Toolbar, IconButton, Typography, Menu, MenuItem, Badge, Button, Drawer, InputBase, MenuItem as MuiMenuItem } from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import logo from './l.png';
import { useSelector } from "react-redux";

export default function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const cart = useSelector((state) => state.cart.cart);
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };
  const handleSearchSubmit = () => {
    console.log(searchQuery);
    setSearchQuery("")
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#F3F4F6', color: 'black' }}>
      <Toolbar style={{ height: '80px' }}>
        <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" sx={{ flexGrow: 1, color: 'black' }}>
        <Link to="/" style={{ textDecoration: 'none', color: '#1E3A8A' }}><img src={logo} alt="Logo" width="250" height="50" /></Link>
        </Typography>
        <div style={{ flexGrow: 1, display: 'flex', alignItems: 'center', maxWidth: '400px' }}>
          <InputBase
            placeholder="Tìm kiếm…"
            value={searchQuery}
            onChange={handleSearchChange}
            sx={{ color: 'white', backgroundColor: '#6c757d', borderRadius: '4px', padding: '4px 8px', flexGrow: 1 }}
            onKeyDown={(e)=>{if(e.key==="Enter"){
              handleSearchSubmit()
            }}}
          />
          <IconButton onClick={handleSearchSubmit} sx={{ color: 'black' }}>
            <SearchIcon />
          </IconButton>
        </div>
          <IconButton color="inherit" sx={{ padding: 0}}>
            <Badge badgeContent={cart.length} color="error" >
              <Link to="/cart" style={{ color: 'inherit', textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
                <ShoppingCartIcon />
              </Link>
            </Badge>
          </IconButton>
      </Toolbar>
     
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
        <div style={{ width: 250, backgroundColor: '#fff', height: '100%' }}>
          <Typography variant="h6" sx={{ padding: '16px', backgroundColor: '#F3F4F6', color: 'black' }}>Menu</Typography>
          <Button onClick={toggleDrawer} style={{ margin: '16px' }}>Đóng</Button>
          <MuiMenuItem>
            <Link to="/" style={{ textDecoration: 'none', color: '#1E3A8A' }}>Trang Chủ</Link>
          </MuiMenuItem>
          <MuiMenuItem>
            <Link to="/products" style={{ textDecoration: 'none', color: '#1E3A8A' }}>Sản Phẩm</Link>
          </MuiMenuItem>
          <MuiMenuItem>
            <Link to="/collection" style={{ textDecoration: 'none', color: '#1E3A8A' }}>Bộ Sưu Tập</Link>
          </MuiMenuItem>
          <MuiMenuItem>
            <Link to="/blog" style={{ textDecoration: 'none', color: '#1E3A8A' }}>Blog</Link>
          </MuiMenuItem>
          <MuiMenuItem>
            <Link to="/contact" style={{ textDecoration: 'none', color: '#1E3A8A' }}>Liên Hệ</Link>
          </MuiMenuItem>
        </div>
      </Drawer>
    </AppBar>
  );
}

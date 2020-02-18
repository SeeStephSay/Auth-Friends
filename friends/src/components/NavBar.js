import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const NavBar = () => {
	return (
		<div>
			<Navbar color='light' light expand='md'>
				<NavbarBrand className='brand' href='/'>FRIENDS</NavbarBrand>
				<NavbarToggler />
				<Nav className='ml-auto' navbar>
					<NavItem>
						<NavLink href='/'>Login</NavLink>
					</NavItem>
          <Link className='styled' to='/friendlist'>Friends List</Link>
				</Nav>
			</Navbar>
		</div>
	);
};

export default NavBar;

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
	render(){
		return (
			<div className='header-container'>
				<Link to='/' className='logo'><span id='logo-M'>M</span><span id='logo-F'>F</span></Link>
				<ul className='header-container__nav'>
					<li>About</li>
					<li>Terms+Conditions</li>
				</ul>
				<ul className='header-container__categories'>
					<li className='selected'><Link to='/all-products' className='link'>All</Link></li>
					<li><Link to='/category/seating' className='link'>Seating</Link></li>
					<li><Link to='/category/tables' className='link'>Tables</Link></li>
					<li><Link to='/category/desks' className='link'>Desks</Link></li>
					<li><Link to='/category/storage' className='link'>Storage</Link></li>
					<li><Link to='/category/bedroom' className='link'>Bedroom</Link></li>
					<li><Link to='/category/miscellaneous' className='link'>Misc</Link></li>
				</ul>
				<i className='fa fa-shopping-cart hidden'></i>
			</div>
		)
	}
}

export default Header;
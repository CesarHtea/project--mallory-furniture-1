import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
	render(){
		return (
			<div className='footer'>
				<div className='footer__logo'>
					<span id='logo-M'>M</span>
					<span id='logo-F'>F</span>
				</div>
				<div id='logo-border'/>
				<div className='footer__nav'>
					<div className='footer__nav__left'>
						<ul>
							<li><h4>Company</h4></li>
							<li>About</li>
							<li>Press</li>
							<li>Terms+Conditions</li>
						</ul>
						<ul>
							<li><h4>Categories</h4></li>
							<li><Link className='link' to='/category/seating'>Seating</Link></li>
							<li><Link className='link' to='/category/tables'>Tables</Link></li>
							<li><Link className='link' to='/category/miscellaneous'>Misc</Link></li>
						</ul>
					</div>
					<div className='footer__nav__right'>
						<h4>Social</h4>
						<ul>
							<li><i className='fa fa-instagram'></i></li>
							<li><i className='fa fa-twitter'></i></li>
							<li><i className='fa fa-pinterest'></i></li>
						</ul>
					</div>
				</div>
			</div>
		)
	}
}

export default Footer;
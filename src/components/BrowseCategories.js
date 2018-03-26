import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class BrowseCategories extends Component {
	render(){
		return (
			<div className='browse-cat'>
				<h2 className='browse-cat__title'>Browse by Categories</h2>
				<h3 className='browse-cat__subtitle'>Explore by furniture type</h3>
				<ul className='browse-cat__buttons'>
					<li><Link className='link' to='/category/seating'>Seating</Link></li>
					<li><Link className='link' to='/category/tables'>Tables</Link></li>
					<li><Link className='link' to='/category/desks'>Desks</Link></li>
					<li><Link className='link' to='/category/bedroom'>Bedroom</Link></li>
					<li><Link className='link' to='/category/storage'>Storage</Link></li>
					<li><Link className='link' to='/category/miscellaneous'>Misc</Link></li>
				</ul>
			</div>
		)
	}
}

export default BrowseCategories;
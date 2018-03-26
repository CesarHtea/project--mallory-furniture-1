import React, { Component } from 'react';
import Banner from './Banner';
import BrowseCategories from './BrowseCategories';
import Products from './Products';
import Footer from './Footer';
import request from 'superagent';
import { Link } from 'react-router-dom'

class Home extends Component {
	constructor(){
		super();
		this.state = {
			data: []
		};
	}
	componentDidMount(){
		request
			.get('https://mallory-furniture-admin.now.sh/api/v1/products')
			.then(response => {
				this.setState({
					data: response.body
				})
			});
	}
	filterFeatured = () => {
		return this.state.data.filter(function(product){
			return product.featured === true;
		})
	}
	render(){
		const data = this.filterFeatured();
		return (
			<div className='home'>
				<Banner />
				<h2 className='products__title'>Featured Products</h2>
				<h3 className='products__subtitle'>Check out some of our favorite listings</h3>
				<Products data={data} />
				<Link to='/all-products' className='products__all'>All Products</Link>
				<BrowseCategories />
				<Footer />
			</div>
		)
	}
}

export default Home;
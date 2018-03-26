import React, { Component } from 'react';
import Products from './Products';
import Footer from './Footer';
import request from 'superagent'

class MultipleListing extends Component {
	constructor(){
		super();
		this.state = {
			data: [],
			filter: 'all'
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
	selectFilter = (filter) => {
		this.setState({
			filter
		})
	}
	filterList = (filter) => {
		return this.state.data.filter(function(prod){
			if (filter === 'all') return true;
			return prod.onSale === filter;
		})
	}
	render(){
		const filter = this.state.filter;
		const filteredList = this.filterList(filter);
		const listLength = filteredList.length;
		return (
			<div className='products'>
				<h2 className='products__title'>All Products</h2>
				<h3 className='products__subtitle'>All available listings</h3>
				<div className='products__filter'>
					<span>
						<button 
						className={this.state.filter === 'all' ? 'products__filter__button selected' : 'products__filter__button'}
						onClick={()=>{this.selectFilter('all')}}>All items</button>
						<button 
						className={this.state.filter === true ? 'products__filter__button selected' : 'products__filter__button'}
						onClick={()=>{this.selectFilter(true)}}>On Sale</button>
					</span>
					<h3 className='products__filter__status'><span>{listLength}</span> items showing</h3>
				</div>
				<Products data={filteredList} />
				<Footer />
			</div>
		);
	}
}

export default MultipleListing;
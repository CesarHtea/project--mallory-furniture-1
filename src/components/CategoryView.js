import React, { Component } from 'react';
import request from 'superagent';
import Products from './Products';
import Footer from './Footer';

class CategoryView extends Component {
	constructor(){
		super();
		this.state = {
			data: [],
			filter: 'all'
		};
	}
	componentDidMount(){
		const category = this.props.match.params.category
		request
		.get('https://mallory-furniture-admin.now.sh/api/v1/products')
		.then(response => {
			const filteredData = response.body.filter(function(prod){
				return prod.category === category
			})
			this.setState({
				data: filteredData
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
	capitalize(s) { return s[0].toUpperCase() + s.slice(1) };
	render(){
		const category = this.props.match.params.category
		const filter = this.state.filter;
		const categoryList = this.filterList(filter);
		return (
			<div className='products'>
				<h2 className='products__title'>{this.capitalize(category)}</h2>
				<h3 className='products__subtitle'>All {this.capitalize(category)} products</h3>
				<div className='products__filter'>
					<span>
						<button 
						className={this.state.filter === 'all' ? 'products__filter__button selected' : 'products__filter__button'}
						onClick={()=>{this.selectFilter('all')}}>All items</button>
						<button 
						className={this.state.filter === true ? 'products__filter__button selected' : 'products__filter__button'}
						onClick={()=>{this.selectFilter(true)}}>On Sale</button>
					</span>
					<h3 className='products__filter__status'><span>{categoryList.length}</span> items showing</h3>
				</div>
				<Products data={categoryList} />
				<Footer />
			</div>
		)
	}
}

export default CategoryView;
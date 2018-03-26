import React, { Component } from 'react';
import ProductCard from './ProductCard';

class Products extends Component {
	render(){
		const featuredList = this.props.data;
		return (
			<div className='products'>
				<div className='products__products'>
					{featuredList.map(function(product, i){
						return <ProductCard data={product} key={i} />
					})}
				</div>	
			</div>
		);
	}
}

export default Products;
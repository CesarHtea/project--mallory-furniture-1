import React, { Component } from 'react';
import Footer from './Footer';
import request from 'superagent';

class SingleProduct extends Component {
	constructor(){
		super();
		this.state = {
			data: []
		};
	}
	componentDidMount(){
		let baseURL = 'https://mallory-furniture-admin.now.sh/api/v1/products/'; 
		const prodId = this.props.match.params.product;
		baseURL += prodId
		request
			.get(baseURL)
			.then(response => {
				this.setState({
					data: response.body
				})
			});
	}
	render(){
		const data = this.state.data
		return (
			<div className='single-view'>
				<div className='single-view__container'>
					<img className='single-view__container__image' src={data.imageLink} />
					<div className='single-view__container__info'>
						<h4 className='single-view__container__info__title'>{data.item}</h4>
						<p className='single-view__container__info__price'>${data.price}</p>
						<div className='single-view__container__info__footer'>
							<span>
								<p className='understroke'>Condition</p>
								<p>{data.condition}</p>
							</span>
							<span>
								<p className='understroke'>Meassurements</p>
								<p>W:{data.width} L:{data.length} H:{data.height}</p>
							</span>
							<button>Add to Cart</button>
						</div>
					</div>
				</div>
				<Footer />
			</div>
		)
	}
}

export default SingleProduct;
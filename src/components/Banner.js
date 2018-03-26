import React, { Component } from 'react';

class Banner extends Component {
	render(){
		return (
			<div className='banner-container'>
				<h1 className='banner-container__title'>Mallory Furniture</h1>
				<h2 className='banner-container__subtitle'>Your furniture is old.<br/>
				Ours is older</h2>
			</div>
		)
	}
}

export default Banner;
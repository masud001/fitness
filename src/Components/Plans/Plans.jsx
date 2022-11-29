import React from 'react';
import './plans.css';
import whiteTick from '../../assets/whiteTick.png';
import { plansData } from '../../data/plansData.js';
const Plans = () => {
	return (
		<div className='plans-container' id='plans'>
			<div className='blur plans-blur-first'></div>
			<div className='blur plans-blur-second'></div>
			<div className='programs-header' style={{ gap: '2rem' }}>
				<span className='stroke-text'>READY TO START </span>
				<span>YOUR JOURNEY </span>
				<span className='stroke-text'>NOW WITH US</span>
			</div>
			{/* plans cards  */}
			<div className='plans'>
				{plansData.map((plan, index) => {
					return (
						<div key={index} className='plan'>
							{plan.icon}
							<span>{plan.name}</span>
							<span>$ {plan.price}</span>
							<div className='features'>
								{plan.features.map((feature, index) => {
									return (
										<div className='feature' key={index}>
											<img src={whiteTick} alt='tick icon' />
											<span>{feature}</span>
										</div>
									);
								})}
							</div>
							<div className=''>
								<span>See more benefits -></span>
							</div>
							<button className='btn'>Join Now</button>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Plans;

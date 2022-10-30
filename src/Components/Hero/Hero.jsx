import React from 'react';
import Header from '../Header/Header';
import './Hero.css';
const Hero = () => {
	return (
		<div className='hero'>
			<div className='left-hero'>
				<Header />
				<div className='the-best-ad'>
					<div className=''></div>
					<span className=''>THE BEST FITNESS CLUB IN THE TOWN</span>
				</div>
				<div className='hero-text'>
					<div className=''>
						<span className='stroke-text'>shape </span>
						<span>your</span>
					</div>
					<div className=''>
						<span>ideal body</span>
					</div>
					<div className=''>
						<span>
							In here we will help you to shape and build your ideal body and live up
							your life to fullest
						</span>
					</div>
				</div>
				{/* figures */}
				<div className='figures'>
					<div>
						<span>+ 140</span>
						<span>EXPERT COACHES</span>
					</div>
					<div>
						<span>+ 978 </span>
						<span>MEMBERS JOINED</span>
					</div>
					<div>
						<span>+ 50</span>
						<span>FITNESS PROGRAMS</span>
					</div>
				</div>
				{/* hero buttons  */}
				<div className='hero-buttons'>
					<button className='btn'>Get started</button>
					<button className='btn'>Learn more</button>
				</div>
			</div>
			<div className='right-hero'>right side</div>
		</div>
	);
};

export default Hero;

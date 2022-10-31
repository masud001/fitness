import React from 'react';
import Header from '../Header/Header';
import HeroImage from '../../assets/hero_image.png';
import HeroImageBack from '../../assets/hero_image_back.png';
import Heart from '../../assets/heart.png';
import Calories from '../../assets/calories.png';
import './Hero.css';

const Hero = () => {
	return (
		<div className='hero'>
			{/* NOTE:left side */}
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
			{/* NOTE:right side */}
			<div className='right-hero'>
				<button className='btn'>Join Now</button>
				<div className='heart-rate'>
					<img src={Heart} alt='heart icon' />
					<span>Heart Rate</span>
					<span>116 bpm</span>
				</div>
				{/* hero images  */}
				<img src={HeroImage} className='hero-image' alt='hero background' />
				<img
					src={HeroImageBack}
					className='hero-image-back'
					alt='hero background pattern'
				/>
				{/* calories  */}
				<div className='calories'>
					<img src={Calories} alt='calories' />
					<div className=''>
						<span>Calories burned </span>
						<span>220 kcal</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;

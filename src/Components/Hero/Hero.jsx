import React from 'react';
import Header from '../Header/Header';
import HeroImage from '../../assets/hero_image.png';
import HeroImageBack from '../../assets/hero_image_back.png';
import Heart from '../../assets/heart.png';
import Calories from '../../assets/calories.png';
import './Hero.css';
import NumberCounter from 'number-counter';

import { motion } from 'framer-motion';

const Hero = () => {
	const transition = { type: 'spring', duration: 3 };
	const mobile = window.innerWidth <= 768 ? true : false;
	return (
		<div className='hero' id='hero'>
			<div className='blur hero-blur'></div>
			{/* NOTE:left side */}
			<div className='left-hero'>
				<Header />
				<div className='the-best-ad'>
					<motion.div
						className=''
						initial={{ left: mobile ? '165px' : '238px' }}
						whileInView={{ left: '8px' }}
						transition={{ ...transition, type: 'tween' }}
					></motion.div>
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
						<span>
							<NumberCounter end={140} start={100} delay='4' preFix='+' />
						</span>
						<span>EXPERT COACHES</span>
					</div>
					<div>
						<span>
							<NumberCounter end={978} start={800} delay='4' preFix='+' />{' '}
						</span>
						<span>MEMBERS JOINED</span>
					</div>
					<div>
						<span>
							<NumberCounter end={50} start={0} delay='4' preFix='+' />
						</span>
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
				<motion.div
					initial={{ right: '-1rem' }}
					whileInView={{ right: '4rem' }}
					transition={transition}
					className='heart-rate'
				>
					<img src={Heart} alt='heart icon' />
					<span>Heart Rate</span>
					<span>116 bpm</span>
				</motion.div>
				{/* hero images  */}
				<img src={HeroImage} className='hero-image' alt='hero background' />
				<motion.img
					initial={{ right: '11rem' }}
					whileInView={{ right: '20rem' }}
					transition={transition}
					src={HeroImageBack}
					className='hero-image-back'
					alt='hero background pattern'
				/>
				{/* calories  */}
				<motion.div
					initial={{ right: '37rem' }}
					whileInView={{ right: '28rem' }}
					transition={transition}
					className='calories'
				>
					<img src={Calories} alt='calories' />
					<div className=''>
						<span>Calories burned </span>
						<span>220 kcal</span>
					</div>
				</motion.div>
			</div>
		</div>
	);
};

export default Hero;

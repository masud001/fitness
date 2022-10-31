import React from 'react';
import './program.css';
import { programsData } from '../../data/programsData';
import RightArrow from '../../assets/rightArrow.png';
const Programs = () => {
	return (
		<div className='programs' id='programs'>
			{/* program header */}
			<div className='programs-header'>
				<span className='stroke-text'>explore our</span>
				<span>programs</span>
				<span className='stroke-text'>to shape you</span>
			</div>
			<div className='programs-categories'>
				{programsData.map((programs) => {
					return (
						<div className='category'>
							{programs.image}
							<span>{programs.heading}</span>
							<span>{programs.details}</span>
							<div className='join-now'>
								<span>join now</span>
								<img src={RightArrow} alt='arrow icon' />
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Programs;

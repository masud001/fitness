import React from 'react';
import './Join.css';

const Join = () => {
	return (
		<div className='join' id='join-us'>
			<div className='join-left'>
				<hr />
				<div>
					<span class='stroke-text'>Ready to </span>
					<span> Level up</span>
				</div>
				<div>
					<span>your body </span>
					<span class='stroke-text'> with us?</span>
				</div>
			</div>
			<div className='join-right'>
				<form class='email-container'>
					<input
						type='email'
						name='user_email'
						placeholder='Enter your Email Address here...'
					/>
					<button type='submit' class='btn join-btn'>
						Join now
					</button>
				</form>
			</div>
		</div>
	);
};

export default Join;

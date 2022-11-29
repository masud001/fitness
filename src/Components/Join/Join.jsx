import React from 'react';
import { useRef } from 'react';
import './Join.css';
import emailjs from '@emailjs/browser';

const Join = () => {
	const form = useRef();
	const sendEmail = (e) => {
		e.preventDefault();
		emailjs
			.sendForm('service_tx8buw4', 'template_ujspr78', form.current, 'dix2jGI5cGaWgLhMo')
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
	};
	return (
		<div className='join' id='join-us'>
			<div className='join-left'>
				<hr />
				<div>
					<span className='stroke-text'>Ready to </span>
					<span> Level up</span>
				</div>
				<div>
					<span>your body </span>
					<span className='stroke-text'> with us?</span>
				</div>
			</div>
			<div className='join-right'>
				<form onSubmit={sendEmail} ref={form} className='email-container'>
					<input
						type='email'
						name='user_email'
						placeholder='Enter your Email Address here...'
					/>
					<button type='submit' className='btn join-btn'>
						Join now
					</button>
				</form>
			</div>
		</div>
	);
};

export default Join;

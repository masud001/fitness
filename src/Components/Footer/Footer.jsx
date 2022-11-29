import React from 'react';
import GitHub from '../../assets/github.png';
import Instagram from '../../assets/instagram.png';
import Linkedin from '../../assets/linkedin.png';
import Logo from '../../assets/logo.png';
import './Footer.css';
const Footer = () => {
	return (
		<div className='footer-container'>
			<hr />
			<div className='footer'>
				<div className='social-links'>
					<img src={GitHub} alt='github logo' />
					<img src={Instagram} alt='instagram logo' />
					<img src={Linkedin} alt='Linkedin logo' />
				</div>
				<div className='footer-logo'>
					<img src={Logo} alt='main logo' />
				</div>
			</div>
			<div className='blur footer-blur-first'></div>
			<div className='blur footer-blur-second'></div>
		</div>
	);
};

export default Footer;

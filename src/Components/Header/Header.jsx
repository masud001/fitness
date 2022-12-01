import React from 'react';
import logo from '../../assets/logo.png';
import Bars from '../../assets/bars.png';
import './Header.css';
import { Link } from 'react-scroll';
import { useState } from 'react';
const Header = () => {
	const mobile = window.innerWidth <= 768 ? true : false;
	const [MenuOpened, setMenuOpened] = useState(false);
	return (
		<div className='header'>
			<img className='logo' src={logo} alt='main-logo' />
			{/* menu items  */}
			{MenuOpened === false && mobile === true ? (
				<div
					onClick={() => setMenuOpened(true)}
					style={{
						backgroundColor: 'var(--appColor)',
						padding: '0.5rem',
						borderRadius: '5px',
						cursor: 'pointer',
					}}
				>
					<img src={Bars} alt='' style={{ width: '1.5rem', height: '1.5rem' }} />
				</div>
			) : (
				<ul className='header-menu'>
					<li>
						<Link
							onClick={() => setMenuOpened(false)}
							spy={true}
							smooth={true}
							to='hero'
							activeClass='active'
						>
							Home
						</Link>
					</li>
					<li>
						<Link
							onClick={() => setMenuOpened(false)}
							spy={true}
							smooth={true}
							to='programs'
						>
							Programs
						</Link>
					</li>
					<li>
						<Link
							onClick={() => setMenuOpened(false)}
							spy={true}
							smooth={true}
							to='reasons'
						>
							Why us
						</Link>
					</li>
					<li>
						<Link
							onClick={() => setMenuOpened(false)}
							spy={true}
							smooth={true}
							to='plans'
						>
							Plans
						</Link>
					</li>
					<li>
						<Link
							onClick={() => setMenuOpened(false)}
							spy={true}
							smooth={true}
							to='testimonials'
						>
							Testimonials
						</Link>
					</li>
				</ul>
			)}
		</div>
	);
};

export default Header;

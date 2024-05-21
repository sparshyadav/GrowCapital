import React from 'react';
import { FaGithub, FaLinkedin, FaCode, FaEnvelope } from 'react-icons/fa';
import { useSelector } from 'react-redux';

import Link from './Link';
import Icon from './Icon';
import logo_dark from '../../assets/images/logo_dark.png';
import logo_light from '../../assets/images/logo_light.png';
import './styles.css';

const year = new Date(Date.now()).getFullYear();

const Footer = () => {
	const { darkMode } = useSelector((state) => state.theme);

	return (
		<div className="footer">
			<div className="footer-top">
				<div className="footer-brand-section">
					<div className="brand">
						
						<h2>
							<span>G</span>row<span>C</span>apital
						</h2>
					</div>
				</div>
				<div className="footer-links-container">
					<div className="footer-link-section">
						<div className="link-header">
							<h2>Technologies</h2>
						</div>
						<ul>
							<Link url="https://www.mongodb.com/" text="MongoDB" />
							<Link url="https://expressjs.com/" text="Express.js" />
							<Link url="https://reactjs.org/" text="React.js" />
							<Link url="https://nodejs.org/" text="Node.js" />
							<Link url="https://redux-toolkit.js.org/" text="Redux-Toolkit.js" />
						</ul>
					</div>
					<div className="footer-link-section">
						<div className="link-header">
							<h2>Resources</h2>
						</div>
						<ul>
							<Link
								url="https://github.com/reactchartjs/react-chartjs-2"
								text="React Chartjs 2"
							/>
							<Link
								url="https://react-icons.github.io/react-icons/icons?name=fa"
								text="Font Awesome"
							/>
							<Link
								url="https://fkhadra.github.io/react-toastify/introduction"
								text="React-toastify"
							/>
							<Link url="https://react-select.com/home" text="React Select" />
						</ul>
					</div>
					<div className="footer-link-section">
						<div className="link-header">
							<h2>Developer</h2>
						</div>
						<ul>
							<Link
								url="https://github.com/sparshyadav/"
								text="Sparsh Yadav"
							/>
							<Link
								url="https://github.com/sparshyadav/"
								text="Siddharth Puri"
							/>
							<Link
								url="https://github.com/sparshyadav/"
								text="Sweta Shreya"
							/>
							<Link
								url="https://github.com/sparshyadav/"
								text="Shubham Singh"
							/>
						</ul>
					</div>
					{/* <div className="footer-link-section">
						<div className="link-header">
							<h2>Other</h2>
						</div>
						<ul>
							<Link
								url="https://en.wikipedia.org/wiki/Compound_interest"
								text="Compound Interest (Wikipedia)"
							/>
							<Link url="https://www.investopedia.com/" text="Investopedia" />
						</ul>
					</div> */}
				</div>
			</div>
			<div className="footer-bottom">
				<div className="footer-icons">
					<Icon
						icon={<FaGithub />}
						ariaLabel="faGithub"
					/>
					<Icon
						icon={<FaLinkedin />}
						ariaLabel="Linkedin"
					/>
					<Icon
						icon={<FaEnvelope />}
						ariaLabel="Email"
					/>
					<Icon
						icon={<FaCode />}
						aria-label="Source code"
					/>
				</div>

				{/* <p>
					Developed by{' '}
					<a
						href="https://www.omarkraidie.com/"
						target="_blank"
						rel="noopener noreferrer"
					>
						Omar Kraidié
					</a>
				</p> */}

				<p>
					Copyright <span className="copyright">{year}&copy;</span> Chitkara, Punjab. All
					Rights Reserved.
				</p>
			</div>
		</div>
	);
};

export default Footer;

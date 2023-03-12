import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CSSTransition } from 'react-transition-group';

import { projects } from 'util/constants';
import SvgWave from 'components/SvgWave';
import { Box, Heading, Text } from '@chakra-ui/react';

const Projects = () => {
	const [activeTitle, setActiveTitle] = useState('');

	return (
		<Box as='section' id='projects' bg='green.500'>
			<Heading className='title mt-3 pt-5' data-aos='zoom-in'>
				Projects
			</Heading>
			<div className='project-list'>
				{projects.map(({ title, description, logo, capture, technologies, github_link, live_link, data_aos_duration }) => {
					let caseStudyLink = title !== 'Pokédex' ? `/${title}` : '/Pokedex';
					return (
						<div
							className={`project ${activeTitle === title && 'active'}`}
							onMouseEnter={() => setActiveTitle(title)}
							onMouseLeave={() => setActiveTitle(null)}
							key={title}>
							{activeTitle !== title ? (
								<div data-aos='fade-down' data-aos-duration={data_aos_duration}>
									<Image loading='lazy' src={logo} width={175} height={175} alt={`${title} logo`} className='project-logo' />
									<Text fontSize='md'>{description}</Text>
								</div>
							) : (
								<CSSTransition
									// @ts-ignore
									in={activeTitle}
									timeout={300}
									classNames='my-project'>
									<div data-aos='fade-up' data-aos-duration={data_aos_duration}>
										<h1>{title}</h1>
										<p>{description}</p>
										<p>{technologies}</p>
										<div className='d-flex flex-column'>
											<Image src={capture} width={450} height={350} className='project-image' alt={`${title} screenshot`} />
											<div className='project-links'>
												<a href={github_link} target='_blank' rel='noreferrer'>
													View code on GitHub
												</a>
												{live_link && (
													<a href={live_link} target='_blank' rel='noreferrer'>
														View Live
													</a>
												)}
												{title !== 'Sermo' ? (
													<Link href={caseStudyLink}>
														View Case Study
													</Link>
												) : (
													<p>Case Study coming soon</p>
												)}
											</div>
										</div>
									</div>
								</CSSTransition>
							)}
						</div>
					);
				})}
			</div>
			{/* <SvgWave /> */}
		</Box>
	);
};

export default Projects;

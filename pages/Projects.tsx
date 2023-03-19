import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CSSTransition } from 'react-transition-group';

import { projects } from 'util/constants';
import SvgWave from 'components/SvgWave';
import { Box, Flex, Heading, Text, Button} from '@chakra-ui/react';

const Projects = () => {
	const [activeTitle, setActiveTitle] = useState('');

	return (
		<Box id='projects' bg='green.500'>
			<Heading className='title mt-3 pt-5' data-aos='zoom-in'>
				Projects
			</Heading>
			<Flex justify={'center'} align='center' flexWrap={'wrap'} w='85%' p='5px' mb='25px'>
				{projects.map(({ title, description, logo, capture, technologies, github_link, live_link, data_aos_duration }) => {
					let caseStudyLink = title !== 'Pokédex' ? `/${title}` : '/Pokedex';
					return (


      
						<Flex
              flexDir={'column'}
              align={'center'}
              justify={'center'}
              h='85vh'
              maxW='550px'
              p='20px'
              m='5px'
              borderRadius='57px'
              textAlign={'center'}
              boxShadow='rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px'
              transition='all 0.3s ease'
							// className={`project ${activeTitle === title && 'active'}`}

							onMouseEnter={() => setActiveTitle(title)}
							onMouseLeave={() => setActiveTitle(null)}
							key={title}>
							{activeTitle !== title ? (
								<Box data-aos='fade-down' data-aos-duration={data_aos_duration} m='auto'>
									<Image loading='lazy' src={logo} width={175} height={175} alt={`${title} logo`} />
									<Text fontSize='md'>{description}</Text>
								</Box>
							) : (
								<CSSTransition
									// @ts-ignore
									in={activeTitle}
									timeout={300}
									classNames='my-project'>
									<div data-aos='fade-up' data-aos-duration={data_aos_duration}>
										<Heading>{title}</Heading>
										<Text>{description}</Text>
										<Text>{technologies}</Text>
										<Flex flexDir='column'>
											<Image src={capture} width={450} height={350} className='project-image' alt={`${title} screenshot`} />
											<div className='project-links'>
												<Button as='a' href={github_link} target='_blank' rel='noreferrer'>
													View code on GitHub
												</Button>
												{live_link && (
													<Button as='a' href={live_link} target='_blank' rel='noreferrer'>
														View Live
													</Button>
												)}
												{title !== 'Sermo' ? <Button as='a' href={caseStudyLink} target='_blank' rel='noreferrer'>View Case Study</Button> : <Text>Case Study coming soon</Text>}
											</div>
										</Flex>
									</div>
								</CSSTransition>
							)}
						</Flex>
					);
				})}
			</Flex>
			{/* <SvgWave /> */}
		</Box>
	);
};

export default Projects;

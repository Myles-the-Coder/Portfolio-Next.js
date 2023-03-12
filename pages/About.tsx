import React from 'react';
import Image from 'next/image';
import profilePicture from 'public/profile-pic.png';
import SvgWave from 'components/SvgWave';
import {Box, Heading, Text} from '@chakra-ui/react'

const About = () => {
	return (
		<Box as='section' id='about'>
			<Heading className='title mt-3' data-aos='fade-in' data-aos-duration='1000'>
				About
			</Heading>
			<Image
				className='profile-img'
				src={profilePicture}
				width={175}
				height={175}
				alt='Profile Picture'
				data-aos='fade-up'
				data-aos-duration='1100'
			/>
			<Box className='about-desc'>
				<Text data-aos='fade-left' data-aos-duration='1100'>
					Hello, my name is Myles Jefferson. I am a self-taught developer with a passion for building elegant and user-friendly applications. Starting from humble beginnings, I spent time honing my skills in HTML, CSS/SCSS, TypeScript, React, NextJS, Redux, Git, API development,
					test-driven development, MongoDB, PostgreSQL, NodeJS, application deployment in Linux environments, Docker, AWS, and Firebase. In my professional
					experience, I have spent a year working on a variety of projects, from small web applications to large-scale enterprise systems. I have been
					able to collaborate with clients and team members to ensure that projects are completed on time, within budget, and to the highest standards
					of quality. I am also comfortable working with agile development methodologies, test-driven development, and continuous
					integration/continuous deployment (CI/CD) practices. In my free time, I enjoy exploring new technologies, experimenting with side projects,
					and participating in online communities. I believe that staying curious and constantly learning is key to being a successful developer. I am
					always open to new opportunities and collaborations, so if you are interested in working together or have any questions, feel free to reach
					out. Let us build something great together!
				</Text>
			</Box>
			<a href='https://docdro.id/cTkg7TC' target='_blank' rel='noreferrer' className='btn mb-3'>
				View/Download my Résumé
			</a>
			<SvgWave />
		</Box>
	);
}

export default About

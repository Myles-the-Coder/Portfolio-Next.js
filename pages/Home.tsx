import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import { Typewriter } from 'react-simple-typewriter';

import lightModeBG from 'public/wickedbackground.svg';
import darkModeBG from 'public/wickedbackground-dark_mode.svg';
import { useTheme } from 'components/ThemeProvider';
import SvgWave from 'components/SvgWave';
import { Arrow } from 'components/Arrow';
import { typewriterWords } from 'util/constants';
import { Box, Heading, Button, Text } from '@chakra-ui/react';

const Home = ({ containerRef }) => {
	const theme = useTheme();
	const zIndex: any = {
		zIndex: '1',
		textAlign: 'center',
	};

	return (
		<Box as='section' id='home' ref={containerRef} bg='green.500'>
			<Head>
				<title>Myles Jefferson</title>
			</Head>
			<Heading fontSize={'2xl'}>Hello, I am Myles Jefferson</Heading>
			<Text>
				A <span className='web-text'>&lt;Full-Stack Developer /&gt;</span> experienced with{' '}
				<span>
					<Typewriter words={typewriterWords} cursor cursorStyle='_' />
				</span>
			</Text>
			<Button as='a' href='https://github.com/Myles-the-Coder' target='_blank' className='btn mt-4' rel='noreferrer'>
        Explore my code on GitHub
      </Button>
			{/* <a href='https://github.com/Myles-the-Coder' target='_blank' className='btn mt-4' rel='noreferrer' style={zIndex}>
				Explore my code on GitHub
			</a> */}
			<Arrow />
			{/* <SvgWave /> */}
		</Box>
	);
};

export default Home;

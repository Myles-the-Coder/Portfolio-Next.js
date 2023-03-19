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
import { Box, Heading, Button, Text, Flex } from '@chakra-ui/react';

const Home = ({ containerRef }) => {
	const theme = useTheme();
	const zIndex: any = {
		zIndex: '1',
		textAlign: 'center',
	};

	return (
		<Box id='home' ref={containerRef} bg='green.500' h='100vh'>
			<Head>
				<title>Myles Jefferson</title>
			</Head>
			<Heading fontSize={'2xl'}>Hello, I am Myles Jefferson</Heading>
      <Flex justify='center' align='center' textAlign='center'>
			<Text>
				A <Text as='span' fontWeight='bold'>&lt;Full-Stack Developer /&gt;</Text> experienced with{' '}
				<span>
					<Typewriter words={typewriterWords} cursor cursorStyle='_' />
				</span>
			</Text>
      </Flex>
			<Button as='a' href='https://github.com/Myles-the-Coder' target='_blank' rel='noreferrer'>
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

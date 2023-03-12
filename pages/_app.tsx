import React from 'react';
import ThemeProvider from 'components/ThemeProvider';
import 'node_modules/aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'styles/globals.scss';

import { ChakraProvider } from '@chakra-ui/react';

const MyApp = ({ Component, pageProps }) => (
	<ChakraProvider>
		<ThemeProvider>
			<Component {...pageProps} />
		</ThemeProvider>
	</ChakraProvider>
);

export default MyApp;

// pages/_document.js

import { ColorModeScript } from '@chakra-ui/react';
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import theme from '../theme';

export default class Document extends NextDocument {
	render() {
    const {config: {initialColorMode}} = theme;
		return (
			<Html lang='en'>
				<Head />
				<body>
					<ColorModeScript initialColorMode={initialColorMode} />
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

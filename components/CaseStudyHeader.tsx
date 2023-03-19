import React from 'react';
import { caseStudyLinks } from 'util/constants';

const CaseStudyHeader = () => {
	return (
		<header className='caseStudyHeader'>
			{caseStudyLinks.map(({ name, href }) => (
				<a href={href} className='m-1 link' key={name}>
					{name}
				</a>
			))}
		</header>
	);
};

export default CaseStudyHeader;

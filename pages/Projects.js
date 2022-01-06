import React, { useState } from 'react';
import Image from 'next/image';
import { projects } from '../helpers/constants';
import Link from 'next/link'

export default function Projects() {
	const [isActive, setIsActive] = useState('');

	function toggleActiveClass(title) {
		setIsActive(title);
	}

	return (
		<section id='projects'>
			<h1 className='title'>Projects</h1>
			<div className='project-list' data-aos='fade-up'>
				{projects.map(project => {
					const {
						title,
						description,
						logo,
						capture,
						technologies,
						github_link,
						live_link,
					} = project;
          const caseStudyLink = `/${title}`
					return (
						<div
							className={isActive === title ? 'project active' : 'project'}
							onClick={() => toggleActiveClass(title)}
              key={title}>
							{ isActive !== title && <Image
								src={logo}
								width={175}
								height={175}
								alt={`${title} logo`}
								className='project-logo'
							/>}
							{isActive === title && 
              <>
              <h1>{title}</h1>
							<p>{description}</p>
							<div className='details'>
								<Image
									src={capture}
									width={650}
									height={300}
									alt={`${title} screenshot`}
                  priority
									className='project-capture'
								/>
								<div className='project-links'>
									<a href={github_link} target='_blank'>
										View code on GitHub
									</a>
									<a href={live_link} target='_blank'>
										View Live
									</a>
                  <Link href={{
                    pathname: caseStudyLink,
                    query: {
                      title
                    }
                    }}>
                    <a>View Case Study</a>
                  </Link>
								</div>
							</div>
							<br />
							<h5>{technologies}</h5>
              </>}
						</div>
					);
				})}
			</div>
		</section>
	);
}

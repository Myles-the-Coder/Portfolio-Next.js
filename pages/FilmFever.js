import React from 'react';
import CaseStudyHeader from '../components/CaseStudyHeader';
import ImageCarousel from '../components/ImageCarousel';
import Footer from '../components/Footer';
import Image from 'next/image';

export default function FilmFever() {
	return (
		<div>
			<CaseStudyHeader link1={'Overview'} link2={'Tools/Technologies'} link3={'Structure'} link4={'Reflection'}/>
			<section id='HeroImage'>
				<Image
					src={'/../public/FilmFever_Hero.png'}
					className='Hero-image'
					layout='fill'
					objectFit='contain'
				/>
				<div className='overlay'>
					<h1>FilmFever - Full-Stack Movie Application</h1>
          <h4>Scroll to explore case study</h4>
				</div>
				<div className='arrow'></div>
			</section>
			<div className='p-5 m-auto w-90' id='Overview'>
				<h1 className='text-center'>Overview</h1>
				<p>
					FilmFever is a full-stack web application that allows users to access
					information about different movies, genres, and directors. Built using
					the MERN stack, FilmFever uses a built from scratch database and
					server to provide movie data to users on the application's front-end.
					Users can create an account, read information about different movies,
					update their information and favorite movies list, and delete their
					accounts if desired. These actions follow the core principles of
					creating a CRUD (create, read, update, delete) application.
				</p>
				<h2 className='text-center'>Process & Context</h2>
				<p>
					FilmFever is a personal project built as part of CareerFoundry's
					Full-Stack Immersion Web Developer course. This project demanded a
					solid understanding of full-stack JavaScript development.
				</p>
				<h2 className='text-center'>Objective</h2>
				<ol>
					<li>
						Build a database using MongoDB to house all the information for each
						movie and write the logic necessary for accessing this
						data.float-end
					</li>
					<li>
						Build the front-end of the application using React.js that uses the
						database information to enable user interactivity.
					</li>
					<li>
						Use version control via GitHub to track changes to the project and
						host the original code.
					</li>
				</ol>
			</div>
			<div className='p-5 w-90 m-auto' id='Tools/Technologies'>
				<h1 className='text-center m-2 p-4'>Tools and Technologies</h1>
				<div className='Tech-container'>
					<div className='Tech-list'>
						<h4>Back-end</h4>
						<ul>
							<li>Node.js</li>
							<li>Express.js</li>
							<li>MongoDB</li>
							<li>MongoDBCompass</li>
							<li>Heroku</li>
						</ul>
					</div>
					<div className='Tech-list'>
						<h4>Front-end</h4>
						<ul>
							<li>React</li>
							<li>Redux</li>
							<li>React-Redux</li>
							<li>Redux Toolkit</li>
							<li>React Bootstrap</li>
							<li>Netlify</li>
						</ul>
					</div>
					<div className='Tech-list'>
						<h4>Dependencies</h4>
						<ul>
							<li>bcrypt</li>
							<li>body-parser</li>
							<li>cors</li>
							<li>express</li>
							<li>express-validator</li>
							<li>jsonwebtoken(JWT)</li>
							<li>mongoose</li>
							<li>morgan</li>
							<li>passport</li>
							<li>passport-jwt</li>
							<li>passport-local</li>
						</ul>
					</div>
				</div>
			</div>
			<div className='p-5 m-auto w-90' id='Structure'>
				<h1 className='text-center'>Structure</h1>
				<h2 className='text-center m-4'>Back-End</h2>
				<ul>
					<li>
						Using <b>Node.js</b> and <b>Express</b>, build a RESTful API and
						preform endpoint testing with Postman.
					</li>
					<li>
						Using <b>MongoDB</b> and <b>Mongoose</b>, build a non-relational
						database and write the necessary business logic.
					</li>
					<li>
						Using <b>Passport</b> and <b>JWT</b>, write the logic to
						authenticate users and authorize their access to certain
						functionality of the app.
					</li>
					<li>
						Using <b>Heroku</b>, deploy and manage the app's API online
					</li>
				</ul>
				<ImageCarousel
					id={'carousel1'}
					img1={'/../public/MongoDB_Capture.png'}
					img2={'/../public/MongoDB_Capture2.png'}
					img3={'/../public/Postman_Capture.png'}
				/>
				<h2 className='text-center m-4'>Front-end</h2>
				<ul>
					<li>
						Using <b>React.js</b>, built the app's front-end to enable user
						interactivity.
					</li>
					<li>
						Using <b>React-Router-Dom</b>, implement the logic allowing users to
						access different pages of the app.
					</li>
					<li>
						Using <b>Redux</b>, <b>React-Redux</b>, and <b>Redux Toolkit</b>,
						manage the state of the app which, in turn, centralizes the data
						used throughout the app.
					</li>
					<li>
						Using <b>Netlify</b>, deploy and manage the app's client-side server
					</li>
				</ul>
				<ImageCarousel
					id={'carousel2'}
					img1={'/../public/FilmFever_capture.png'}
					img2={'/../public/FilmFever_Capture2.png'}
					img3={'/../public/FilmFever_Capture3.png'}
				/>
			</div>
			<div className='p-5 w-90 m-auto' id='Reflection'>
				<h1 className='text-center'>Reflection</h1>
				<p>
					FilmFever has proven itself to be an invaluable learning experience in
					my developer journey. From building and accessing a database to
					fleshing out the user experience on the front-end, this project
					demands a deep understanding of full-stack development to ensure every
					part works as expected.
				</p>
				<h2 className='text-center'>Overcoming Challenges</h2>
				<p>
					Given the scope of this project, the development process brought with
					it some challenges. When developing the front-end, the biggest
					challenge was implementing Redux with React to achieve the desired
					results. With the help of Redux Toolkit and personal research, I was
					able to properly implement Redux to manage of the state of my app. The
					main issue that arose during back-end development was ensuring that
					all the endpoints of the API functioned correctly. This was a common
					error that was thrown during development
				</p>
				<div className='d-flex flex-column align-items-center justify-content-center'>
					<code>(TypeError: req.login is not a function)</code>
					<Image
						src={'/../public/2.9-Console_Error.png'}
						width={900}
						height={350}
					/>
				</div>
				<p>
					After researching the issue and debugging my code, I solved the issue
					by restructuring the middleware of the Node.js server. These
					challenges proved to be an excellent learning experience and helped me
					gain a better understanding of the relationship between the
					server-side and client-side.
				</p>
				<h2 className='text-center'>Duration</h2>
				<p>
					The development of FilmFever took about two weeks from start to
					finish. Most of the development time was spent on building the
					back-end of the app as well as learning the intricacies of React and
					Redux.
				</p>
				<h2 className='text-center'>Credits</h2>
				<ul className='list-unstyled text-center'>
					<li>Role: Lead Developer</li>
					<li>Tutor: Jason Early</li>
					<li>Mentor: Tony Dominguez</li>
				</ul>
				<h2 className='text-center'>Links</h2>
				<div className='d-flex flex-column align-items-center justify-content-center'>
					<a
						className='h5'
						href='https://github.com/Myles-the-Coder/FilmFever-client.git'>
						View Code on GitHub
					</a>
					<a className='h5' href='https://filmfever.netlify.app/'>
						View Live Project
					</a>
				</div>
			</div>
			<Footer theme='Light' />
		</div>
	);
}
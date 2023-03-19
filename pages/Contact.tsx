import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Toast, ToastContainer, FloatingLabel } from 'react-bootstrap';
import { socialLinkSVGs } from 'util/constants';

import { Box, Button, Textarea, Text, Flex, Heading, FormControl, FormLabel, Input } from '@chakra-ui/react';

const Contact = () => {
	const [state, handleSubmit] = useForm('xbjwjqll');
	const [show, setShow] = useState(true);

	return (
		<Box h='100vh' bg='red.200' textAlign='center'>
      <Flex justify='center' align='center' flexDir='column' w='50%'m='auto'>
			<Heading className='text-center w-75 mt-2' data-aos='fade-down' data-aos-duration='1000'>
				Contact
			</Heading>
			<Text className='text-center w-75 m-0' data-aos='fade-up' data-aos-duration='1100'>
				I am currently available for hire in Colorado, or remotely. I will respond to your message within 24 business hours.
			</Text>
			<Text className='text-center w-75 mb-3' data-aos='fade-up' data-aos-duration='1100'>
				You can also find me on
				{socialLinkSVGs.map(({ name, link }) => (
					<a key={name} href={link} target='_blank' rel='noreferrer' className='mx-1'>
						{name},
					</a>
				))}
				<a href='https://medium.com/@99mylesjefferson' target='_blank' rel='noreferrer' className='mx-1'>
					Medium,
				</a>
				or{' '}
				<Button as='a' style={{ color: '#0492c2' }} href='mailto:99mylesjefferson@gmail.com'>
					email me directly.
				</Button>
			</Text>
			<FormControl data-aos='fade-up' data-aos-duration='1200' onSubmit={handleSubmit}>
				{/* <FloatingLabel label='Name'> */}
					<Input className='mb-1' type='text' id='name' name='name' placeholder='Enter name...' required />
				{/* </FloatingLabel> */}
				<ValidationError prefix='Name' field='name' errors={state.errors} />
				{/* <FloatingLabel label='Email'> */}
					<Input type='email' name='email' id='email' placeholder='x' required />
				{/* </FloatingLabel> */}
				<ValidationError prefix='Email' field='email' errors={state.errors} />
				<FormLabel htmlFor='message' className='standard-label my-2'>
					Message
				</FormLabel>
				<Textarea name='message' id='message' cols={10} rows={10} required />
				<ValidationError prefix='Message' field='message' errors={state.errors} />
				<br />
				<Button type='submit' mt={2} isDisabled={state.submitting}>
					Send Message
				</Button>
			</FormControl>
			{state.succeeded && show ? (
				<ToastContainer className='mt-5 p-1' position='top-center'>
					<Toast bsPrefix='toast' onClose={() => setShow(false)} show={show} delay={3000} autohide>
						<Toast.Body>Thank you for your message!</Toast.Body>
					</Toast>
				</ToastContainer>
			) : null}
      </Flex>
		 </Box>
	);
};

export default Contact;

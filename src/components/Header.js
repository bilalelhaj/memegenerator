import React from 'react';

export default function Header() {
	return (
		<header className='header'>
			<img
				src='./trollface.png'
				alt='Trollface'
				className='header--image'
			/>
			<h2 className='header--title'>Meme Generator</h2>
		</header>
	);
}

import './App.css';
function App() {
	return (
		<div>
			<nav
				className='navbar is-black'
				role='navigation'
				aria-label='main navigation'>
				<div className='navbar-brand'>
					<a className='navbar-item' href='https://bulma.io'>
						<img
							alt='logo'
							src='https://bulma.io/images/bulma-logo-white.png'
							width='112'
							height='28'
						/>
					</a>
				</div>

				<div id='navbarBasicExample' className='navbar-menu'>
					<div className='navbar-end'>
						<div className='navbar-item'>
							<div className='buttons'>
								<a href='.' className='button is-primary'>
									<strong>Sign up</strong>
								</a>
								<a href='.' className='button is-light'>
									Log in
								</a>
							</div>
						</div>
					</div>
				</div>
			</nav>
			<div className='container is-max-desktop mt-3'>
				<div className='is-flex is-flex-direction-row is-justify-content-space-between'>
					<button className='button is-primary'>Search</button>
					<input
						className='input'
						type='text'
						placeholder='enter company name'
					/>
				</div>
				<div class='columns is-mobile mt-3'>
					<div class='column'>
						<div className='card'>
							<div className='card-image'>
								<figure className='image is-4by3'>
									<img
										src='https://bulma.io/images/placeholders/1280x960.png'
										alt='Placeholder image'
									/>
								</figure>
							</div>
							<div className='card-content'>
								<div className='content'>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									Phasellus nec iaculis mauris.
								</div>
								<div className='buttons'>
									<button className='button is-primary'>View</button>
								</div>
							</div>
						</div>
					</div>
					<div class='column'>
						<div className='card'>
							<div className='card-image'>
								<figure className='image is-4by3'>
									<img
										src='https://bulma.io/images/placeholders/1280x960.png'
										alt='Placeholder image'
									/>
								</figure>
							</div>
							<div className='card-content'>
								<div className='content'>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									Phasellus nec iaculis mauris.
								</div>
								<div className='buttons'>
									<button className='button is-primary'>View</button>
								</div>
							</div>
						</div>
					</div>
					<div class='column'>
						<div className='card'>
							<div className='card-image'>
								<figure className='image is-4by3'>
									<img
										src='https://bulma.io/images/placeholders/1280x960.png'
										alt='Placeholder image'
									/>
								</figure>
							</div>
							<div className='card-content'>
								<div className='content'>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									Phasellus nec iaculis mauris.
								</div>
								<div className='buttons'>
									<button className='button is-primary'>View</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;

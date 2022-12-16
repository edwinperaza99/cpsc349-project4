// import NavBar from "./components/NavBar";

const USERNAME = "edwinperaza@csu.fullerton.edu";
const PASSWORD = "pocketbaseproject";

const pb = new PocketBase("http://127.0.0.1:8090");

const authData = await pb.admins.authWithPassword(USERNAME, PASSWORD);
console.log(authData);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<React.StrictMode>
		<App />
		<SecondNav />
	</React.StrictMode>
);

function App() {
	let Component;
	switch (window.location.pathname) {
		case "/":
			Component = Main;
			break;
		case "/About":
			Component = About;
			break;
		case "/SignUp":
			Component = SignUp;
			break;
		case "/Forgot":
			Component = Forgot;
			break;
		case "/LogIn":
			Component = LogIn;
			break;
	}
	return (
		<>
			<NavBar />
			<div className="App">
				<h1 className="bg-blue-900 text-red-700">
					Hello, {authData.admin.email}
				</h1>
			</div>
			<Component />
			<Footer />
		</>
	);
}

function Main() {
	return (
		<main>
			<p>Use NavBar</p>
			<div className="hero min-h-screen bg-base-200">
				<div className="hero-content flex-col lg:flex-row">
					<img
						src="https://placeimg.com/260/400/arch"
						className="max-w-sm rounded-lg shadow-2xl"
					/>
					<div>
						<h1 className="text-5xl font-bold">Welcome!</h1>
						<p className="py-6">
							Create your own wishlist with all your favorite products. Send
							your wishlist to all your friends!
						</p>
						<button className="btn btn-primary">Get Started</button>
					</div>
				</div>
			</div>
		</main>
	);
}

function NavBar() {
	return (
		<header className="text-gray-400 bg-gray-900 body-font">
			<div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
				<a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						stroke="currentColor"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						className="w-10 h-10 text-white p-2 bg-green-500 rounded-full"
						viewBox="0 0 24 24"
					>
						<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
					</svg>
					<span className="ml-3 text-xl">Santa, Please!</span>
				</a>
				<nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
					<a className="mr-5 hover:text-white" href="/About">
						About Us
					</a>
					<a className="mr-5 hover:text-white" href="/SignUp">
						Sign Up
					</a>
				</nav>
				<button
					className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
					control-id="ControlID-86"
				>
					<a href="/LogIn">LogIn</a>

					<svg
						fill="none"
						stroke="currentColor"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						className="w-4 h-4 ml-1"
						viewBox="0 0 24 24"
					>
						<path d="M5 12h14M12 5l7 7-7 7" />
					</svg>
				</button>
			</div>
		</header>
	);
}

function SecondNav() {
	return (
		<header>
			<div className="bg-gray-900">
				<div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
					<div className="relative flex items-center justify-between">
						<div className="flex items-center">
							<a href="/" className="inline-flex items-center mr-8">
								<span className="ml-2 text-xl font-bold tracking-wide text-gray-100 hover:text-blue-300">
									FavFlicks
								</span>
							</a>
							<ul className="flex items-center space-x-8 lg:flex bar-element">
								<li>
									<a
										className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-blue-300"
										href="/About"
										aria-label="About us"
										title="About us"
									>
										About us
									</a>
								</li>
							</ul>
						</div>
						<ul className="flex items-center space-x-8 lg:flex bar-element">
							<li>
								<a
									className="group relative inline-block overflow-hidden border border-blue-300 px-8 py-3 focus:outline-none focus:ring"
									href="/SignUp"
								>
									<span className="absolute inset-y-0 left-0 w-[2px] bg-blue-300 transition-all group-hover:w-full group-active:bg-indigo-500" />
									<span className="relative text-sm font-medium text-blue-300 transition-colors group-hover:text-white">
										Sign up
									</span>
								</a>
							</li>
							<li>
								<a
									className="group relative inline-block overflow-hidden border border-blue-300 px-9 py-3 focus:outline-none focus:ring"
									href="LogIn"
								>
									<span className="absolute inset-y-0 right-0 w-[2px] bg-blue-300 transition-all group-hover:w-full group-active:bg-indigo-500" />
									<span className="relative text-sm font-medium text-blue-300 transition-colors group-hover:text-white">
										Log in
									</span>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</header>
	);
}

function About() {
	return (
		<main className="flex-grow">
			<h1 className="mt-6 text-center text-3xl font-bold mb-2">About Us</h1>
			<hr className="block border-gray-800 max-w-5xl mx-auto w-[98%] mb-6" />
			<div className="px-4 max-w-4xl mx-auto flex flex-col gap-10">
				<article>
					<h3 className="about-heading">Our mission</h3>
					<div className="flex flex-col gap-4">
						<p>
							Here at FavFlicks, we are passionate about all things cinema and
							wanted to help others keep track of all their favorite films! With
							this website, you can add different movie categories, each with
							their own description, and your favorite movies from each
							category. You can even add your personal rating of the film!
						</p>
						<p>
							Our web application was built using
							<a
								className="about-link"
								href="https://remaketheweb.com/"
								target="_blank"
								rel="noreferrer noopener"
							>
								React
							</a>
							for functionality / interactivity and
							<a
								className="about-link"
								href="https://tailwindcss.com/"
								target="_blank"
								rel="noreferrer noopener"
							>
								Tailwind CSS
							</a>
							for styling!
						</p>
					</div>
				</article>
				<article>
					<h3 className="about-heading">Team members:</h3>
					<div className="flex justify-around text-center">
						<div>
							<img
								src="../assets/images/clapperboard.png"
								className="about-img"
								alt="clapperboard"
							/>
							<p>Edwin Peraza</p>
						</div>
						<div>
							<img
								src="../assets/images/film-camera.svg"
								className="about-img"
								alt="camera"
							/>
							<p>Nathan Kim</p>
						</div>
						<div>
							<img
								src="../assets/images/film-strip.png"
								className="about-img"
								alt="film strip"
							/>
							<p>Ethan Ton</p>
						</div>
						<div>
							<img
								src="../assets/images/popcorn.svg"
								className="about-img"
								alt="popcorn"
							/>
							<p>Marl Rico</p>
						</div>
					</div>
				</article>
			</div>
		</main>
	);
}

function Footer() {
	return (
		<footer className="bg-gray-200 text-center lg:text-left">
			<p className="text-gray-700 text-center p-4">
				{" "}
				© 2022 Copyright: Group 8{" "}
			</p>
		</footer>
	);
}
//

function SignUp() {
	return (
		<main class="flex-grow">
			<div class="flex items-center justify-center h-full my-40">
				<div class="px-8 py-6 mt-4 text-left bg-grey-100 shadow-lg">
					<h2 class="text-2xl font-bold text-center">
						Create Your Account Today!
					</h2>
					<form action="/user/signup" method="post">
						<div class="mt-4">
							<div class="mt-4">
								<label class="block">Username</label>
								<input
									type="text"
									name="username"
									placeholder="Username"
									class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
									required
								/>
							</div>
							<div class="mt-4">
								<label class="block">Email</label>
								<input
									type="email"
									name="email"
									placeholder="Email"
									class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
									required
								/>
							</div>
							<div class="mt-4">
								<label class="block">Password</label>
								<input
									type="password"
									name="password"
									placeholder="Password"
									class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
									required
								/>
							</div>
							<div class="flex items-baseline justify-between">
								<button
									type="submit"
									class="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
								>
									Sign up
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</main>
	);
}

function LogIn() {
	return (
		<main className="flex-grow">
			<div className="flex items-center justify-center h-full my-40">
				<div className="px-8 py-6 mt-4 text-left bg-grey-100 shadow-lg">
					<h3 className="text-2xl font-bold text-center">
						Log in to your account
					</h3>
					<form action="/user/login" method="post">
						<div className="mt-4">
							<div>
								<label className="block">Username</label>
								<input
									type="text"
									name="username"
									placeholder="Username"
									className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
									required=""
								/>
							</div>
							<div className="mt-4">
								<label className="block">Password</label>
								<input
									type="password"
									name="password"
									placeholder="Password"
									className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
									required=""
								/>
							</div>
							<div className="flex items-baseline justify-between">
								<button
									type="submit"
									className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
								>
									Login
								</button>
								<a
									href="/Forgot"
									className="text-sm text-blue-600 hover:underline"
								>
									Forgot password?
								</a>
							</div>
						</div>
					</form>
				</div>
			</div>
		</main>
	);
}

function Forgot() {
	return (
		<main className="flex-grow">
			<div className="flex items-center justify-center h-full my-40">
				<div className="px-8 py-6 mt-4 text-left bg-grey-100 shadow-lg">
					<h3 className="text-2xl font-bold text-center">
						Forgot your password?
					</h3>
					<p className="mt-4">
						We will send a link to your associated email account
					</p>
					<form action="/user/forgot" method="post">
						<div className="mt-4">
							<div className="">
								<label className="block font-bold">Username</label>
								<input
									type="text"
									name="username"
									placeholder="Your Username"
									className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
									required=""
								/>
							</div>
							<div className="flex items-baseline justify-center">
								<button
									type="submit"
									className="px-6 py-2 mt-8 w-full text-white bg-blue-600 rounded-lg hover:bg-blue-900"
								>
									Reset my password
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</main>
	);
}

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
			{/* <div className="App">
				<h1 className="bg-blue-900 text-red-700">
					Hello, {authData.admin.email}
				</h1>
			</div> */}
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
					<a className="ml-3 text-xl" href="/">
						Santa, Please!
					</a>
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

function About() {
	return (
		<div className="bg-green-800 h-[calc(100vh-136px)]">
			<div className="flex-grow px-4 py-16 bg-green-800 h-fit">
				<section className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
					<h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-neutral-50 sm:text-4xl md:mx-auto">
						<span className="relative inline-block">
							<svg
								viewBox="0 0 52 24"
								fill="currentColor"
								className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
							>
								<defs>
									<pattern
										id="1d4040f3-9f3e-4ac7-b117-7d4009658ced"
										x={0}
										y={0}
										width=".135"
										height=".30"
									>
										<circle cx={1} cy={1} r=".7" />
									</pattern>
								</defs>
							</svg>
							<span className="relative ">Welcome our lovely devs</span>
						</span>
					</h2>
					<p className="text-base text-neutral-50 md:text-lg">
						The masterminds behind the Santa, Please!
					</p>
				</section>
				<section className="flex flex-col gap-3 items-center justify-center lg:flex-row text-neutral-50s">
					<div className="bg-red-700 rounded-xl border-neutral-50 border-4 border-solid p-8 flex justify-center items-center transition duration-200 ease-linear hover:scale-105 hover:border-lime-500 group">
						<div className="flex flex-col justify-center items-center gap-10">
							<div className="flex flex-col items-center gap-6">
								<div className="flex gap-6 items-center">
									<img
										src="https://avatars.githubusercontent.com/u/89877041?v=4"
										alt="Natan K. github profile picture"
										className="w-16 h-16 rounded-full transition duration-500 ease-out group-hover:rotate-180"
									/>
									<h1 className="text-2xl text-neutral-50 font-semibold transition duration-200 ease-linear hover:text-slate-900">
										Nathan Kim
									</h1>
								</div>
								<p className="transition duration-200 ease-linear text-neutral-50 hover:text-slate-900 text-center">
									"Add what you did"
								</p>
								<p className="text-neutral-50 italic w-64 h-full transition duration-200 ease-linear hover:text-slate-900 text-center text-sm">
									"Quotes?"
								</p>
							</div>
							<a
								href="https://github.com/mploythai/cpsc349-proj2"
								target="_blank"
								className="w-64 inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-slate-900 transition duration-200 rounded shadow-md bg-neutral-50 hover:bg-green-700 hover:scale-105"
							>
								GitHub Repo
							</a>
						</div>
					</div>
					<div className="bg-red-700 rounded-xl border-neutral-50 border-4 border-solid p-8 flex justify-center items-center transition duration-200 ease-linear hover:scale-105 hover:border-lime-500 group">
						<div className="flex flex-col justify-center items-center gap-10">
							<div className="flex flex-col items-center gap-6">
								<div className="flex gap-6 items-center">
									<img
										src="https://avatars.githubusercontent.com/edwinperaza99"
										alt="Edwin P. github profile picture"
										className="w-16 h-16 rounded-full transition duration-500 ease-out group-hover:rotate-180"
									/>
									<h1 className="text-2xl text-neutral-50 font-semibold transition duration-200 ease-linear hover:text-slate-900">
										Edwin Peraza
									</h1>
								</div>
								<p className="transition duration-200 ease-linear text-neutral-50 hover:text-slate-900 text-center">
									"Add what you did"
								</p>
								<p className="text-neutral-50 italic w-64 h-full transition duration-200 ease-linear hover:text-slate-900 text-center text-sm">
									"Quotes?"
								</p>
							</div>
							<a
								href="https://github.com/edwinperaza99"
								target="_blank"
								className="w-64 inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-slate-900 transition duration-200 rounded shadow-md bg-neutral-50 hover:bg-green-700 hover:scale-105"
							>
								GitHub Repo
							</a>
						</div>
					</div>
					<div className="bg-red-700 rounded-xl border-neutral-50 border-4 border-solid p-8 flex justify-center items-center transition duration-200 ease-linear hover:scale-105 hover:border-lime-500 group">
						<div className="flex flex-col justify-center items-center gap-10">
							<div className="flex flex-col items-center gap-6">
								<div className="flex gap-6 items-center">
									<img
										src="https://avatars.githubusercontent.com/mrmarlrico"
										alt="Marl R. github profile picture"
										className="w-16 h-16 rounded-full transition duration-500 ease-out group-hover:rotate-180"
									/>
									<h1 className="text-2xl text-neutral-50 font-semibold transition duration-200 ease-linear hover:text-slate-900">
										Marl Rico
									</h1>
								</div>
								<p className="transition duration-200 ease-linear text-neutral-50 hover:text-slate-900 text-center">
									"Add what you did"
								</p>
								<p className="text-neutral-50 italic w-64 h-full transition duration-200 ease-linear hover:text-slate-900 text-center text-sm">
									"Quotes?"
								</p>
							</div>
							<a
								href="https://github.com/mrmarlrico"
								target="_blank"
								className="w-64 inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-slate-900 transition duration-200 rounded shadow-md bg-neutral-50 hover:bg-green-700 hover:scale-105"
							>
								GitHub Repo
							</a>
						</div>
					</div>
					<div className="bg-red-700 rounded-xl border-neutral-50 border-4 border-solid p-8 flex justify-center items-center transition duration-200 ease-linear hover:scale-105 hover:border-lime-500 group">
						<div className="flex flex-col justify-center items-center gap-10">
							<div className="flex flex-col items-center gap-6">
								<div className="flex gap-6 items-center">
									<img
										src="https://avatars.githubusercontent.com/ethanton0927"
										alt="Ethan T. github profile picture"
										className="w-16 h-16 rounded-full transition duration-500 ease-out group-hover:rotate-180"
									/>
									<h1 className="text-2xl text-neutral-50 font-semibold transition duration-200 ease-linear hover:text-slate-900">
										Ethan Ton
									</h1>
								</div>
								<p className="transition duration-200 ease-linear text-neutral-50 hover:text-slate-900 text-center">
									"Add what you did"
								</p>
								<p className="text-neutral-50 italic w-64 h-full transition duration-200 ease-linear hover:text-slate-900 text-center text-sm">
									"Quotes?"
								</p>
							</div>
							<a
								href="https://github.com/ethanton0927"
								target="_blank"
								className="w-64 inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-slate-900 transition duration-200 rounded shadow-md bg-neutral-50 hover:bg-green-700 hover:scale-105"
							>
								GitHub Repo
							</a>
						</div>
					</div>
				</section>
			</div>
		</div>
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
			<div class="flex items-center justify-center h-[calc(100vh-136px)]">
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
			<div className="flex items-center justify-center h-[calc(100vh-136px)]">
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

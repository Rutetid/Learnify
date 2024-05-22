import hero from "../../assets/hero.svg";

function LandingPage() {
	return (
		<div className="bg-bg-custom">
			<nav className="pt-7 flex justify-around  items-center">
				<a href="/" className="flex">
					<span className=" font-kaushan text-2xl">Learnify</span>
				</a>

				<div className="flex gap-12">
					<a href="#">About</a>
					<a href="#">Course</a>
					<a href="#">Team</a>
					<a href="#">Code</a>
				</div>
				<div className="flex gap-2 items-center">
					<button>Sign in</button>
					<button>Sign up</button>
				</div>
			</nav>

			<div className="grid grid-cols-2">
				<div>
					<h1 className="mt-40 ml-32 font-semibold font-poppins text-46 leading-tight">
						Your personalised <br /> roadmap to knowledge.
					</h1>

					<h2 className="mt-5 ml-32 font-regular font-poppins text-2xl leading-tight">
						Unleash your potetntial with Learnify, a dynamic <br />
						learning platform that tailors tasks and <br />
						roadmaps to your specific goals.
					</h2>
				</div>

				<div>
					<img src={hero} alt="" className="mt-11" />
				</div>
			</div>
		</div>
	);
}

export default LandingPage;

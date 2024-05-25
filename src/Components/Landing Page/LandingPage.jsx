import { useEffect } from "react";
import hero from "../../assets/hero.svg";
import { useNavigate } from "react-router-dom";
import Card from "./Card";

function LandingPage({ user }) {
	const navigate = useNavigate();

	useEffect(() => {
		if (user) {
			navigate("/dashboard");
		}
	}, [user]);

	return (
		<div className="bg-bg-custom">
			<nav className="pt-7 flex justify-around  items-center">
				<a href="/" className="flex">
					<span className=" font-kaushan text-3xl">Learnify</span>
				</a>

				<div className="flex gap-12 font-poppins font-semibold text-xl">
					<a href="#">About</a>
					<a href="#">Course</a>
					<a href="#">Team</a>
					<a href="#">Code</a>
				</div>
				<div className="flex gap-4 items-center font-poppins font-semibold text-sm">
					<div className="border-2 rounded-md py-2 px-3 border-black">
						<button type="button">Sign up</button>
					</div>

					<div className="rounded-md bg-black text-white  py-2 px-4 border-2 border-black">
						<button type="button">Sign in</button>
					</div>
				</div>
			</nav>

			<div className="grid grid-cols-2">
				<div>
					<h1 className="mt-40 ml-36 font-semibold font-poppins text-46 leading-tight">
						Your personalised <br /> roadmap to knowledge.
					</h1>

					<h2 className="mt-5 ml-36 font-regular font-poppins text-2xl leading-tight">
						Unleash your potetntial with Learnify, a dynamic <br />
						learning platform that tailors tasks and <br />
						roadmaps to your specific goals.
					</h2>
				</div>

				<div>
					<img src={hero} alt="" className="mt-11" />
				</div>
			</div>
			<div>
				<span className="font-poppins font-semibold text-4xl flex justify-center mt-1">
					CHOOSE YOUR COURSE
				</span>
				<div className="grid grid-cols-3 mt-16 px-80 gap-5">
					<Card />
					<Card />
					<Card />
				</div>

				<div className="mt-36">
					<span className="font-poppins font-semibold text-4xl flex justify-center mt-">
						GET YOUR ROADMAP
					</span>
					<div className="flex justify-center items-center">
						<img
							src="https://www.geckoboard.com/uploads/Digital-dashboard-example.png"
							alt=""
							className="mt-16 w-3/5 mb-96"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default LandingPage;

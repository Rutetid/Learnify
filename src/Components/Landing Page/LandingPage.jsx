import { useEffect } from "react";
import hero from "../../assets/hero.svg";
import { Link, useNavigate } from "react-router-dom";
import Card from "./Card";

function LandingPage({ user }) {
	const navigate = useNavigate();

	return (
		<div className="bg-gradient-to-b from-gradient-white to-gradient-purple">
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
					{!user ? (
						<>
							<div className="border-2 rounded-md py-2 px-3 border-black">
								<Link to="/register" type="button">
									Sign up
								</Link>
							</div>

							<div className="rounded-md bg-black text-white  py-2 px-4 border-2 border-black">
								<Link to="/login" type="button">
									Sign in
								</Link>
							</div>
						</>
					) : (
						<div className="rounded-md bg-black text-white  py-2 px-4 border-2 border-black">
							<Link to="/dashboard" type="button">
								Dashboard
							</Link>
						</div>
					)}
				</div>
			</nav>

			<div className="grid grid-cols-2">
				<div>
					<h1 className="mt-40 ml-36 font-bold font-poppins text-46 leading-tight">
						Your personalised <br /> roadmap to
						<span className="gradient-text bg-clip-text from-start-gradient to-end-gradient">
							{" "}
							knowledge.
						</span>
					</h1>

					<h2 className="mt-5 ml-36 font-regular font-poppins text-2xl leading-tight">
						Unleash your potetntial with Learnify, a dynamic <br />
						learning platform that tailors tasks and <br />
						roadmaps to your specific goals.
					</h2>

					<div className="mt-8 ml-36 ">
						<button
							type="button"
							className="bg-gradient-to-r from-button-start to-button-end py-3 px-7 rounded-lg font-poppins font-semibold text-white text-xl"
						>
							Get Started
						</button>
					</div>
				</div>

				<div>
					<img src={hero} alt="" className="mt-11" />
				</div>
			</div>
			<div className="">
				<span className="font-poppins font-semibold text-4xl flex justify-center mt-1">
					CHOOSE YOUR&nbsp;
					<span className="gradient-text bg-clip-text from-start-gradient to-end-gradient font-poppins font-bold text-4xl">
						{" "}
						COURSE
					</span>
				</span>
				<div className="grid grid-cols-3 mt-16 px-80 gap-5">
					<Card text="Basics of Web Development" />
					<Card text="Introduction to Javascript" />
					<Card text="DSA using &nbsp; &nbsp; &nbsp;&nbsp;&nbsp; C++/C " />
				</div>

				<div className="mt-36">
					<span className="font-poppins font-semibold text-4xl flex justify-center mt-">
						GET YOUR&nbsp;
						<span className="gradient-text bg-clip-text from-start-gradient to-end-gradient font-poppins font-bold text-4xl">
							ROADMAP
						</span>
					</span>
					<div className="flex justify-center items-center p-2 ">
						<img
							src="https://cdn.discordapp.com/attachments/1242374647035592705/1244235539880874104/image.png?ex=66546025&is=66530ea5&hm=ecad8cec42f235422d0043af15615386cb4d5dbb798ec38af4ea332f5c28a5b2&"
							alt=""
							className="mt-16 w-3/5 mb-96 border-4 border-purple-800 rounded-lg shadow-2xl"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default LandingPage;

import { useEffect } from "react";
import hero from "../../assets/hero.svg";
import { Link, useNavigate } from "react-router-dom";
import Card from "./Card";
import twitter from "../../assets/twitter.svg";
import github from "../../assets/github.svg";
import linkedin from "../../assets/linkedin.svg";
import page from "./style.module.css";

function LandingPage({ user }) {
	const navigate = useNavigate();

	return (
		<div
			className="bg-gradient-to-b from-gradient-white to-gradient-purple"
			id={page.landingpage}
		>
			<nav className="pt-7 flex justify-around  items-center">
				<a href="/" className="flex">
					<span className=" font-kaushan text-3xl">Learnify</span>
				</a>

				<div className="flex gap-12 font-poppins font-semibold text-xl">
					<a href="">About</a>
					<a href="#course">Course</a>
					<a href="#team">Team</a>
					<a href="https://github.com/Rutetid/Learnify" target="_blank">
						Code
					</a>
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
							{!user ? (
								<Link to="/register">Get Started</Link>
							) : (
								<Link to="/dashboard">Dashboard</Link>
							)}
						</button>
					</div>
				</div>

				<div>
					<img src={hero} alt="" className="mt-11" />
				</div>
			</div>
			<div className={page.part} id="course">
				<span className="font-poppins font-semibold text-4xl flex justify-center mt-1">
					CHOOSE YOUR&nbsp;
					<span className="gradient-text bg-clip-text from-start-gradient to-end-gradient font-poppins font-bold text-4xl">
						{" "}
						COURSE
					</span>
				</span>
				<div className="grid grid-cols-3 mt-16 px-80 gap-5">
					<Card text="Basics of Web Development" tags={["HTML", "CSS"]} code='wd01' />
					<Card text="Introduction to Javascript" tags={["JS"]} code='js01' />
					<Card text="DSA using C++/C " tags={["C", "C++"]} code='dsa01' />
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
							className="mt-16 w-3/5 border-4 border-purple-800 rounded-lg shadow-2xl"
						/>
					</div>
				</div>

				<div className={`mt-28 ${page.part}`} id="team">
					<span className="font-poppins font-semibold text-4xl flex justify-center">
						MEET OUR&nbsp;
						<span className="gradient-text bg-clip-text from-start-gradient to-end-gradient font-poppins font-bold text-4xl">
							TEAM
						</span>
					</span>
					<div className="flex justify-center items-center gap-10 mt-10">
						<div className="flex flex-col items-center justify-center mt-16">
							<div className=" rounded-full flex items-center justify-center">
								<img
									src="https://cdn.discordapp.com/attachments/852810452270710804/1244350989385990284/WhatsApp_Image_2024-05-26_at_18.50.33_d742cbb2.jpg?ex=6654cbaa&is=66537a2a&hm=d2c66b3fc5e5764cd57443f3e7820697e8c8b2b58fd22c1342ebbe12ea2c59dd&"
									alt=""
									className="rounded-full border-4 border-gray-300 h-60 w-60 shadow-2xl"
								/>
							</div>
							<span className="font-poppins font-medium text-2xl mt-5">
								Abhishek Mishra
							</span>
							<span className="font-poppins font-regular text-xl">
								Database
							</span>
							<div className="flex gap-3 mt-4">
								<a href="https://github.com/AeroByte-Abhishek">
									<img src={github} alt="" />
								</a>
								<a href="https://www.linkedin.com/in/abhishek-mishra-1251282a8/">
									<img src={linkedin} alt="" />
								</a>
								<a href="https://x.com/Abh1shek_mishra?t=DNjf3HKn006bjjYoUDwRTA&s=33">
									<img src={twitter} alt="" />{" "}
								</a>
							</div>
						</div>

						<div className="flex flex-col items-center justify-center mt-16">
							<div className=" rounded-full flex items-center justify-center">
								<img
									src="https://cdn.discordapp.com/attachments/852810452270710804/1244357447448133722/9k.png?ex=6654d1ae&is=6653802e&hm=3ece0e43a608ff42bbbc3b59beb01077c5c91e2e11a409a5f57529ea1092ecc6&"
									alt=""
									className="rounded-full border-4  border-gray-300 h-60 w-60 shadow-2xl"
								/>
							</div>
							<span className="font-poppins font-medium text-2xl mt-5">
								Prakhar Khandelwal
							</span>
							<span className="font-poppins font-regular text-xl">
								UI + Backend
							</span>
							<div className="flex gap-3 mt-4">
								<a href="https://github.com/Git-Prakhar">
									<img src={github} alt="" />
								</a>
								<a href="https://www.linkedin.com/in/prakhar-khandelwal-8a988528b/">
									<img src={linkedin} alt="" />
								</a>
								<a href="https://x.com/____Prakhar__">
									<img src={twitter} alt="" />{" "}
								</a>
							</div>
						</div>

						<div className="flex flex-col items-center justify-center mt-16">
							<div className=" rounded-full flex items-center justify-center">
								<img
									src="https://cdn.discordapp.com/attachments/614886048354271235/1244358137440370718/1692214950711.png?ex=6654d253&is=665380d3&hm=51291b1a80767f963469718ea193774a0fc9f142502ecbaf60f1f70f0f66bba6&"
									alt=""
									className="rounded-full border-4 border-gray-300 h-60 w-60 shadow-2xl"
								/>
							</div>
							<span className="font-poppins font-medium text-2xl mt-5">
								Abhishek Anand
							</span>
							<span className="font-poppins font-regular text-xl">
								UI + Frontend
							</span>
							<div className="flex gap-3 mt-4">
								<a href="https://github.com/Rutetid">
									<img src={github} alt="" />
								</a>
								<a href="https://www.linkedin.com/in/abhishek-anand-094799251/">
									<img src={linkedin} alt="" />
								</a>
								<a href="https://x.com/Abhishek_cpp">
									<img src={twitter} alt="" />{" "}
								</a>
							</div>
						</div>

						<div className="flex flex-col items-center justify-center mt-16">
							<div className=" rounded-full flex items-center justify-center">
								<img
									src="https://cdn.discordapp.com/attachments/1179478313245343774/1244358664219918366/WhatsApp_Image_2024-05-26_at_18.39.08_774887e7.jpg?ex=6654d2d0&is=66538150&hm=e6e7ec07f9b029c25edd12b890237d91543e93272d105673ae98e55648a857b8&"
									alt=""
									className="rounded-full border-4 border-gray-300 h-60 w-60 shadow-2xl"
								/>
							</div>
							<span className="font-poppins font-medium text-2xl mt-5">
								Priyanshu Shankar
							</span>
							<span className="font-poppins font-regular text-xl">
								React Components
							</span>
							<div className="flex gap-3 mt-4">
								<a href="https://github.com/Prishushankar">
									<img src={github} alt="" />
								</a>
								<a href="https://www.linkedin.com/in/priyanshu-shankar-067831256/">
									<img src={linkedin} alt="" />
								</a>
								<a href="" className="cursor-not-allowed">
									<img src={twitter} alt="" />{" "}
								</a>
							</div>
						</div>
					</div>
				</div>

				<footer className="mt-40 bg-opacity-30 border-t-2 border-white bg-black py-12">
					<div className="p-4 text-center font-poppins  text-xl">
						© 2024 All Rights Reserved.
						
					</div>
				</footer>
			</div>
		</div>
	);
}

export default LandingPage;

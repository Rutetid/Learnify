import hero from "../assets/hero.svg";

function Hero() {
  return (
			<div className="bg-violet-200">
				<div className="grid grid-cols-2">
					<h1 className="mt-40 ml-20 text-4xl font-semibold leading-tight gr">
						Your personalised <br /> roadmap to knowledge
					</h1>

                    <div>
                        <img src={hero} alt="" />
                    </div>

                    
				</div>
			</div>
		);
}

export default Hero;
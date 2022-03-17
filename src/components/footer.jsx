import React from "react";
import footer from "../assets/images/footer.svg";

export default function Footer() {
	return (
		<div className="flex flex-col mt-12 w-screen overflow-hidden">
			<div>
				<img src={footer} alt="nav" className="w-full" />
			</div>

			<div className="bg-[#02263C] p-6 px-0 -m-8 w-screen mx-0 flex">
				<div className="flex">
					<ul className="text-white pl-20">
						<li className="p-2 ">Term of Use</li>
						<li className="p-2 ">Privacy Policy</li>
						<li className="p-2 ">Right to information</li>
						<li className="p-2 ">AICTE dashboard</li>
						<li className="p-2 ">Contact Us</li>
					</ul>
					<ul className="text-white pl-20 ">
						<li className="p-2 ">Centralized support system</li>
						<li className="p-2 ">Reports</li>
						<li className="p-2 ">Directory</li>
						<li className="p-2 ">Reporting by institutes</li>
					</ul>

					<div className="p-10 pt-0 pl-20">
						<p className="text-white pt-2 pb-4">Contact Us</p>
						<i
							class="fa-brands fa-twitter"
							style={{ color: "white", padding: "10px 5px ", fontSize: "20px" }}
						></i>
						<i
							class="fab fa-linkedin-in"
							style={{ color: "white", padding: "10px 5px", fontSize: "20px" }}
						></i>
						<i
							class="fa-brands fa-facebook-f"
							style={{ color: "white", padding: "10px 5px", fontSize: "20px" }}
						></i>
						<i
							class="fa-brands fa-instagram"
							style={{ color: "white", padding: "10px 5px", fontSize: "20px" }}
						></i>
						<p className="text-white w-60 pt-4">
							Copyright © 2017. AICTE Nelson Mandela Marg, Vasant Kunj, New
							Delhi -110070
						</p>
					</div>

					<div className="flex items-center pl-20">
						<input
							type="email"
							className="bg-[#02263C] border-2 rounded-md w-72 text-white p-2 focus:outline-none h-12"
						></input>
						<button className="bg-white text-[#FB7C70] p-2 rounded-md px-8 -mx-4 h-12">
							Email
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

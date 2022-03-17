import React from "react";
import history from "../../assets/images/history.png";
import speech from "../../assets/images/speech.png";

export default function History() {
	return (
		<div className="flex flex-col">
			<div className="flex justify-around">
				<div className="w-1/2 p-8">
					<h1 className="text-[#FF725E] text-4xl font-bold roboto p-6 pl-0">
						History
					</h1>

					<p className="text-[#9F9F9F] text-[22px]">
						The beginning of formal technical education in India can be dated
						back to the mid-19th century. Major policy initiatives in the
						pre-independence period included the appointment of the Indian
						Universities Commission in 1902, issue of the Indian Education
						Policy Resolution in 1904, and the Governor General’s policy
						statement of 1913 stressing the importance of technical education,
						the establishment of IISc in Bangalore, Institute for Sugar, Textile
						& Leather Technology in Kanpur, N.C.E. in Bengal in 1905, and
						industrial schools in several provinces.
					</p>
				</div>
				<div className="p-8 w-[38vw] pt-14 flex flex-col">
					<img src={history} alt="History-page" className="p-2" />
					<p className="text-center text-[#9F9F9F]">
						Technical education in India contributes a major share to the
						overall education system and plays a vital role in the social and
						economic development of our nation.
					</p>
				</div>
			</div>

			<div>
				<div className="flex items-center justify-between py-12 ">
					<hr
						style={{
							height: "3px",
							backgroundColor: "#0C5C8C",
							width: "600px",
						}}
					/>
					<h1 className="p-4 px-12 text-[2rem] text-[#0C5C8C] roboto">
						Initial Set-up
					</h1>
					<hr
						style={{
							height: "3px",
							backgroundColor: "#0C5C8C",
							width: "600px",
						}}
					/>
				</div>

				<div className="px-8 font-normal text-2xl">
					<p className="p-4 py-6">
						All India Council for Technical Education (AICTE) was set up in
						November 1945 as a national-level apex advisory body to conduct a
						survey on the facilities available for technical education and to
						promote development in the country in a coordinated and integrated
						manner. And to ensure the same, as stipulated in the National Policy
						of Education (1986), AICTE was vested with:
					</p>

					<ul className="list-disc px-8">
						<li className="py-2 text-xl">
							Statutory authority for planning, formulation, and maintenance of
							norms & standards
						</li>
						<li className="py-2 text-xl">
							Quality assurance through accreditation
						</li>
						<li className="py-2 text-xl">
							Funding in priority areas, monitoring, and evaluation
						</li>
						<li className="py-2 text-xl">
							Maintaining parity of certification & awards
						</li>
						<li className="py-2 text-xl">
							The management of technical education in country
						</li>
					</ul>
				</div>

				<div className="flex p-8">
					<div className="flex flex-col items-center w-1/3">
						<h1 className="text-[#FF725E] font-bold text-6xl p-4">1943</h1>
						<p className="p-4 text-center ">
							Constitution of the Technical Education Committee of the Central
							Advisory Board of Education (CABE)
						</p>
					</div>
					<div className="flex flex-col items-center w-1/3">
						<h1 className="text-[#FF725E] font-bold text-6xl p-4">1944</h1>
						<p className="p-4 text-center">
							Preparation of the Sergeant Report
						</p>
					</div>
					<div className="flex flex-col items-center w-1/3">
						<h1 className="text-[#FF725E] font-bold text-6xl p-4">1945</h1>
						<p className=" p-4 text-center">
							Formation of the All India Council for Technical Education (AICTE)
						</p>
					</div>
				</div>
			</div>

			<div className="flex space-around pt-8 items-center">
				<div className="flex flex-col w-3/5">
					<div className="px-12">
						<h1 className="text-[#0C5C8C] text-4xl font-bold pb-4">
							Role of National Working Group
						</h1>
						<p className="p-8 w-2/3 text-xl pl-0">
							The Government of India (the Ministry of Human Resource
							Development) also constituted a National Working Group to look
							into the role of AICTE in the context of proliferation of
							technical institutions, maintenance of standards, and other
							related matters. The Working Group recommended that AICTE be
							vested with the necessary statutory authority for making it more
							effective, which would consequently require restructuring and
							strengthening with the necessary infrastructure and operating
							mechanisms.
						</p>
					</div>
					<div className="px-12">
						<h1 className="text-[#0C5C8C] text-4xl font-bold pt-8 pr-8 pb-4">
							The All India Council For Technical Education Act 1987
						</h1>
						<p className="p-8 w-2/3 text-xl pl-0">
							(No 52 of 1987 as passed by both the Houses of Parliament) <br />
							<br />
							The AICTE Act was constituted to provide for the establishment of
							an All India Council for Technical Education with a view to proper
							planning and co-ordinated development of a technical education
							system throughout the country, the promotion of qualitative
							improvements of such education in relation to planned quantitative
							growth, and regulation & proper maintenance of norms and standards
							in the technical education system and for the matters connected
							therewith.
						</p>
					</div>
				</div>
				<div>
					<img alt="history-page-02" src={speech} />
				</div>
			</div>
			<p className="px-12 py-8 text-md h-full">
				The purview of AICTE (the Council) covers programmes of technical
				education including training and research in Engineering, Technology,
				Architecture, Town Planning, Management, Pharmacy, Applied Arts and
				Crafts, Hotel Management and Catering Technology etc. at different
				levels.
			</p>
		</div>
	);
}

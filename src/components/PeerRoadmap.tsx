import React from "react";

interface Peer {
	name: string;
	initials: string;
	time: string;
    message: string;
    color: String;
}

const peers: Peer[] = [
	{
		name: "Mayowa Ade",
		initials: "MA",
		time: "09:34 am",
		message: "Hey! I just finished the first chapter",
		color: "#FF1D86",
	},
	{
		name: "Olawuyi Tobi",
		initials: "OT",
		time: "12:30 pm",
		message: "Can you check out the formulas in these images...",
		color: "#FF7E3E",
	},
	{
		name: "Joshua Ashiru",
		initials: "JA",
		time: "15:30 pm",
		message: "Dear Ayo, You are yet to submit your assignment...",
		color: "#16D03B",
	},
];

const PeerRoadmaps: React.FC = () => {
	return (
		<div className="bg-white p-4 rounded-lg shadow-md w-full ">
			<div className="flex justify-between items-center mb-4">
				<h2 className="text-lg font-semibold text-black">Peer Roadmaps</h2>
				<a href="#" className="text-blue-500 font-semibold">
					View All
				</a>
			</div>
			<div className="space-y-4">
				{peers.map((peer, index) => (
					<div key={index} className="flex items-center space-x-4">
						<div
							className={`bg-[${peer.color}] h-10 w-10 rounded-full flex items-center justify-center`}
						>
							<span className="text-lg font-bold">{peer.initials}</span>
						</div>
						<div className="flex-1">
							<h3 className="text-sm font-semibold text-black">{peer.name}</h3>
							<p className="text-sm text-gray-600">{peer.message}</p>
						</div>
						<div className="text-gray-400 text-sm">{peer.time}</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default PeerRoadmaps;

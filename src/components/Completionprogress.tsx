const CircularProgress = ({ percentage }: { percentage: number }) => {
	const radius = 18;
	const circumference = 2 * Math.PI * radius;
	const offset = circumference - (percentage / 100) * circumference;

	return (
		<svg className="w-12 h-12">
			<circle
				className="text-gray-200"
				strokeWidth="4"
				stroke="currentColor"
				fill="transparent"
				r={radius}
				cx="24"
				cy="24"
			/>
			<circle
				className="text-blue-500"
				strokeWidth="4"
				strokeDasharray={circumference}
				strokeDashoffset={offset}
				strokeLinecap="round"
				stroke="currentColor"
				fill="transparent"
				r={radius}
				cx="24"
				cy="24"
			/>
			<text
				x="24"
				y="28"
				textAnchor="middle"
				className="font-semibold text-sm text-black fill-current"
			>
				{percentage}%
			</text>
		</svg>
	);
};

export const CompletionProgress = () => {
	const subjects = [
		{ name: "Digital Electronics", chapter: "Chapter 3", progress: 75 },
		{ name: "Discrete Maths", chapter: "Chapter 4", progress: 91 },
		{ name: "Computer Graphics", chapter: "Module 2", progress: 25 },
		{ name: "DSA", chapter: "Chapter 5", progress: 97 },
	];

	return (
		<div className="bg-white p-4 rounded-lg shadow-md text-black h-full overflow-y-auto">
			<h2 className="text-lg font-semibold mb-4">Completion Progress</h2>
			<div className="space-y-4">
				{subjects.map((subject, index) => (
					<div key={index} className="flex items-center justify-between ">
						<div>
							<h3 className="font-semibold ">{subject.name}</h3>
							<p className="text-gray-500">{subject.chapter}</p>
						</div>
						<CircularProgress percentage={subject.progress} />
					</div>
				))}
			</div>
		</div>
	);
};

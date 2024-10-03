import React from "react";
import { Line } from "react-chartjs-2";
import {
	Chart as ChartJS,
	LineElement,
	CategoryScale,
	LinearScale,
	PointElement,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const PerformanceChart = () => {
	const data = {
		labels: ["1", "2", "3", "4"],
		datasets: [
			{
				label: "Performance",
				data: [2, 1.5, 3.5, 2],
				fill: true,
				backgroundColor: "rgba(30, 144, 255, 0.3)",
				borderColor: "rgba(30, 144, 255, 1)",
				tension: 0.4, // For the curve
				pointBackgroundColor: "rgba(30, 144, 255, 1)",
				pointRadius: 5,
			},
		],
	};

	const options = {
		scales: {
			y: {
				beginAtZero: true,
				max: 4,
			},
		},
		plugins: {
			legend: {
				display: false,
			},
		},
		elements: {
			line: {
				borderWidth: 2,
			},
		},
	};

	return (
		<div className="bg-white p-4 rounded-lg shadow-md h-full">
			<div className="flex justify-between items-center mb-4">
				<h2 className="text-lg font-semibold">Performance</h2>
				<div className="text-gray-500">
					Overall <span className="ml-2 text-blue-500">▼</span>
				</div>
			</div>
			<div>
				<Line data={data} options={options} />
			</div>
		</div>
	);
};

export default PerformanceChart;

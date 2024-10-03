import { BentoGrid, BentoGridItem } from "./BentoGrid";

import PerformanceChart from "./PerformanceChart";
import PeerRoadmaps from "./PeerRoadmap";
import { CompletionProgress } from "./Completionprogress";

export function BentoGridDemo() {
	return (
		<BentoGrid className="w-1/2 h-screen overflow-y-auto ">
			{items.map((item, i) => (
				<BentoGridItem
					key={i}
					header={item.header}
					className={item.classname}
				/>
			))}
		</BentoGrid>
	);
}
const Skeleton = () => (
	<div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);

export const WelcomeCard = () => {
	return (
		<div className="flex  items-center justify-between p-6 bg-blue-500 text-white rounded-lg">
			<div>
				<h1 className="text-2xl font-bold">Welcome back, Harsh</h1>
				<p className="mt-2">
					You've learned <span className="font-bold">70%</span> of your goal
					this week!
					<br />
					Keep it up and improve your progress.
				</p>
			</div>

			<div className="relative">
				<div className="w-32 h-32 mx-10">
					<img
						src="src/public/assets/Welcomecard.png"
						alt="Illustration"
						className="w-full h-full object-cover scale-[1.5] relative top-10 right-5"
					/>
				</div>
			</div>
		</div>
	);
};

const items = [
	{
		header: <WelcomeCard />,
		classname: "md:col-span-2",
	},
	{
		header: <CompletionProgress />,
		classname: "md:col-span-1",
	},
	{
		header: <PerformanceChart />,
		classname: "md:col-span-1 ",
	},
	{
		header: <PeerRoadmaps />,
		classname: "md:col-span-1 ",
	},
];

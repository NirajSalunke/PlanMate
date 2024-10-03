import { cn } from "../../lib/utils";

export const BentoGrid = ({
	className,
	children,
}: {
	className?: string;
	children?: React.ReactNode;
}) => {
	return (
		<div
			className={cn(
				"grid grid-cols-1 md:grid-cols-2 gap-4 max-w-7xl bg-white  ",
				className
			)}
		>
			{children}
		</div>
	);
};

export const BentoGridItem = ({
	className,
	header,
}: {
	className?: string; 
	header?: React.ReactNode;
}) => {
	return (
		<div
			className={cn(
				` ${className} rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none border border-transparent `
			)}
		>
			{header}
			
		</div>
	);
};

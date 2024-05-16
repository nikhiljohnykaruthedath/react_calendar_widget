import calendar, { isCurrentMonth } from "../helpers/calendar.ts";
import useSelectDateRange from "../hooks/useSelectDateRange.tsx";

type DateProps = {
	counter: number;
	monthIndex: number;
	year: number;
};

const Date = ({ counter, monthIndex, year }: DateProps) => {
	const { determineColor, handleClick } = useSelectDateRange(counter);

	return (
		<>
			{/* Iterate and display each date */}
			{[...calendar(monthIndex, year)].map((date, i) => {
				return !isCurrentMonth(monthIndex, year, i) ? (
					<div
						key={i}
						onClick={() => handleClick(date.join("-"))}
						data-date={date.join("-")}
						style={determineColor(date.join("-"))}
					>
						{date[2]}
					</div>
				) : (
					<div key={i} data-date={date.join("-")}></div>
				);
			})}
		</>
	);
};

export default Date;

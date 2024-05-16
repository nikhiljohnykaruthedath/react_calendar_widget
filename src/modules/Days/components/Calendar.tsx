import { CALENDAR_MONTHS } from "../helpers/calendar.ts";

import Date from "./Date.tsx";

type CalendarProps = {
	counter: number;
	maxMonth?: number;
	year?: number;
};

const Calendar = ({ counter, maxMonth = 12, year = 2024 }: CalendarProps) => {
	maxMonth = maxMonth > 12 ? 12 : maxMonth;

	const allMonths = [...Array(maxMonth)];

	return (
		<div className="dates-container">
			{/* Iterate over all months */}
			{allMonths.map((_, index) => {
				return (
					<div key={index} className="single-month-container">
						{/* Display month and year */}
						<div className="month-label">
							{CALENDAR_MONTHS[index]} {year}
						</div>

						{/* Iterate over each date */}
						<div className="month-dates">
							<Date counter={counter} monthIndex={index + 1} year={year} />
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default Calendar;

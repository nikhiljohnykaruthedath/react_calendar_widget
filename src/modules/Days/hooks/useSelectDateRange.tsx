import { useState } from "react";
import { useWidgetContext } from "../../../context/WidgetContext.tsx";
import { isSunday } from "../helpers/calendar.ts";

const useSelectDateRange = (counter: number) => {
	const { startDate, setStartDate, endDate, setEndDate } = useWidgetContext();

	// Determine the color of the date based on selection
	const determineColor = (date: string) => {
		const d = new Date(date).getTime().toString();

		if (startDate == d) {
			return {
				color: "#ffffff",
				backgroundColor: "#000000",
				borderRadius: "0.25em",
			};
		}

		if (startDate && endDate == d) {
			return {
				color: "#ffffff",
				backgroundColor: "#000000",
				borderRadius: "0.25em",
			};
		}

		if (startDate && d > startDate && endDate && d < endDate) {
			return {
				color: "#000000",
				backgroundColor: "#ffffff",
			};
		}

		// If date is a sunday display it accordingly
		if (isSunday(date)) {
			return {
				color: "#ce5455",
			};
		} else {
			return {
				color: "#333",
			};
		}
	};

	// Handler on click of date, selects both start and end date
	const handleClick = (date: string) => {
		if (startDate && (endDate || counter === 1)) {
			setStartDate(null);
			setEndDate(null);
			return;
		}

		if (startDate && startDate > new Date(date).getTime().toString()) return;

		const diffTime = Math.abs(new Date(date) - new Date(startDate));
		const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

		if (!startDate) {
			setStartDate(new Date(date).getTime());
			return;
		}
		if (!endDate && counter !== 1) {
			if (startDate !== endDate && diffDays < counter)
				setEndDate(new Date(date).getTime());
			return;
		}
	};

	return {
		startDate,
		setStartDate,
		endDate,
		setEndDate,
		determineColor,
		handleClick,
	};
};

export default useSelectDateRange;

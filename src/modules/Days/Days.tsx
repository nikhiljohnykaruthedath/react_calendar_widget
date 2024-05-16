import "./Days.scss";
import Calendar from "./components/Calendar.tsx";
import Header from "./components/Header.tsx";
import SelectionOption from "./components/SelectionOption.tsx";
import useCounter from "./hooks/useCounter.tsx";
import useToggleSwitch from "./hooks/useToggleSwitch.tsx";

const Days = () => {
	const { checkbox, handleToggleSwitch } = useToggleSwitch();
	const { counter, errorMessage, decrementCounter, incrementCounter } =
		useCounter();

	return (
		<div className="days-container">
			<div className="travel-for-options">
				Travel for
				{!checkbox && (
					<SelectionOption
						checkbox={checkbox}
						handleCheckbox={handleToggleSwitch}
						counter={counter}
						decrementCounter={decrementCounter}
						incrementCounter={incrementCounter}
						errorMessage={errorMessage}
					/>
				)}
			</div>
			{checkbox && (
				<div className="calendar-container">
					<Header checkbox={checkbox} handleCheckbox={handleToggleSwitch} />
					<Calendar counter={counter} maxMonth={14} year={2024} />
				</div>
			)}
		</div>
	);
};

export default Days;

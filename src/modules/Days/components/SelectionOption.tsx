type SelectionOptionProps = {
	checkbox: boolean;
	handleCheckbox: (e: React.ChangeEvent<HTMLInputElement>) => void;
	counter: number;
	decrementCounter: () => void;
	incrementCounter: () => void;
	errorMessage: boolean;
};

const SelectionOption = ({
	checkbox,
	handleCheckbox,
	counter,
	decrementCounter,
	incrementCounter,
	errorMessage,
}: SelectionOptionProps) => {
	return (
		<div>
			{/* Select dates count that can be selected  */}
			<div className="select-range">
				<button onClick={decrementCounter}>-</button>
				<input type="text" value={counter} onChange={() => {}} />
				<button onClick={incrementCounter}>+</button>
			</div>
			{/* Display error message is selected count is not in required range */}
			{errorMessage && (
				<div className="error-message">Select between 1 and 7 days</div>
			)}
			{/* Switch toggle */}
			<div className="specific-date-v2">
				<div className="specific-date-label">Specific Date</div>
				<input
					id="switch"
					type="checkbox"
					checked={checkbox}
					onChange={(e) => {
						handleCheckbox(e);
					}}
				/>
				<label htmlFor="switch">Toggle</label>
			</div>
		</div>
	);
};

export default SelectionOption;

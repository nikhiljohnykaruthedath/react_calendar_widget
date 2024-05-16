import { useState } from "react";

const useCounter = () => {
	const MIN_COUNTER_VALUE = 1;
	const MAX_COUNTER_VALUE = 7;

	const [counter, setCounter] = useState(5);
	const [errorMessage, setErrorMessage] = useState(false);

	// Decrement the counter if not less than minimum
	const decrementCounter = () => {
		if (counter === MIN_COUNTER_VALUE) {
			setErrorMessage(true);
		} else {
			setErrorMessage(false);
		}

		setCounter((prev) => (prev > MIN_COUNTER_VALUE ? prev - 1 : prev));
	};

	// Decrement the counter if not more than maximum
	const incrementCounter = () => {
		if (counter === MAX_COUNTER_VALUE) {
			setErrorMessage(true);
		} else {
			setErrorMessage(false);
		}

		setCounter((prev) => (prev < MAX_COUNTER_VALUE ? prev + 1 : prev));
	};

	return {
		counter,
		setCounter,
		errorMessage,
		setErrorMessage,
		decrementCounter,
		incrementCounter,
	};
};

export default useCounter;

import { createContext, useContext, useState } from "react";

const WidgetContext = createContext(null);

const WidgetContextProvider = ({ children }) => {
	const [startDate, setStartDate] = useState(null);
	const [endDate, setEndDate] = useState(null);

	return (
		<WidgetContext.Provider
			value={{ startDate, setStartDate, endDate, setEndDate }}
		>
			{children}
		</WidgetContext.Provider>
	);
};

export const useWidgetContext = () => {
	return useContext(WidgetContext);
};

export default WidgetContextProvider;

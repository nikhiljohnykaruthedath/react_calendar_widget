import { useState } from "react";

const useToggleSwitch = () => {
	const [checkbox, setCheckbox] = useState(true);

	// Toggle switch
	const handleToggleSwitch = (e: React.ChangeEvent<HTMLInputElement>) => {
		setCheckbox(e.target.checked);
	};

	return { checkbox, handleToggleSwitch };
};

export default useToggleSwitch;

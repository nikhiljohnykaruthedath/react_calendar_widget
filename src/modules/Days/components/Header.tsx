type HeaderProps = {
	checkbox: boolean;
	handleCheckbox: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Header = ({ checkbox, handleCheckbox }: HeaderProps) => {
	return (
		<div className="header">
			{/* Display header with switch toggle */}
			<div
				className="specific-date-v1"
				style={checkbox ? { position: "absolute" } : {}}
			>
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
			{/* Display week days */}
			<div className="week-days">
				<div className="sunday-highlight">S</div>
				<div>M</div>
				<div>T</div>
				<div>W</div>
				<div>T</div>
				<div>F</div>
				<div>S</div>
			</div>
		</div>
	);
};
export default Header;

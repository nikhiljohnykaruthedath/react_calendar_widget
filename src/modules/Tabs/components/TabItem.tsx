import { TAB_TITLES } from "../helpers/TabOptions";

type TabItemProps = {
	tab: string;
	setTab: (tab: string) => void;
};

const TabItem = ({ tab, setTab }: TabItemProps) => {
	return (
		<>
			{/* Display tabs and handle selection */}
			{TAB_TITLES.map((item) => {
				return (
					<div
						key={item}
						className={`tab-item ${tab === item.toUpperCase() ? "active" : ""}`}
						onClick={() => setTab(item.toUpperCase())}
					>
						{item}
					</div>
				);
			})}
		</>
	);
};

export default TabItem;

import Days from "../Days";
import People from "../People";
import Preferences from "../Preferences";
import "./Tabs.scss";

type TabsProp = {
	selectedTab: React.ComponentType;
};

const Tabs = ({ selectedTab }: TabsProp) => {
	const Component = TabItemComponents[selectedTab];
	return <Component />;
};

const TabItemComponents = {
	PREFERENCES: Preferences,
	PEOPLE: People,
	DAYS: Days,
};

export default Tabs;

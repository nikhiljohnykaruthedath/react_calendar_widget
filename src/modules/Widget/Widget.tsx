import { useState } from "react";
import { useWidgetContext } from "../../context/WidgetContext";
import Tabs from "../Tabs";
import TabItem from "../Tabs/components/TabItem";
import { TabOptions } from "../Tabs/helpers/TabOptions";
import "./Widget.scss";

const Widget = () => {
	const [tab, setTab] = useState(TabOptions.PREFERENCES);
	const { startDate, endDate } = useWidgetContext();

	const handleApplyClick = () => {
		if (startDate && endDate) {
			console.log("Start Date:", new Date(startDate));
			console.log("End Date:", new Date(endDate));
		}
		return;
	};

	return (
		<div className="widget-container">
			<div className="tab-container">
				<div className="tab-header">
					<TabItem tab={tab} setTab={setTab} />
				</div>
				<div className="tab-body">{<Tabs selectedTab={tab} />}</div>
				<div className="footer">
					<button className="btn" onClick={handleApplyClick}>
						Apply
					</button>
				</div>
			</div>
		</div>
	);
};

export default Widget;

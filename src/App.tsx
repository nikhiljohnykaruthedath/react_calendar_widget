import WidgetContextProvider from "./context/WidgetContext";
import Widget from "./modules/Widget";

function App() {
	return (
		<div className="app">
			<WidgetContextProvider>
				<Widget />;
			</WidgetContextProvider>
		</div>
	);
}

export default App;

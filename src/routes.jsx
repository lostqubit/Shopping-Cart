import App from "./components/App.jsx";
import Home from "./components/Home.jsx";
import Shop from "./components/Shop.jsx";

const routes = [
	{
		path: "/",
		element: <App />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: "/shop",
				element: <Shop />,
			},
		],
	},
];

export default routes;

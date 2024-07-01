import App from "./components/App.jsx";
import Home from "./components/Home.jsx";
import Shop from "./components/Shop.jsx";
import Products from "./components/Products.jsx";
import productsLoader from "./components/loaders.js";

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
			{
				path: "/products/:category",
				element: <Products />,
				loader: productsLoader,
			},
		],
	},
];

export default routes;

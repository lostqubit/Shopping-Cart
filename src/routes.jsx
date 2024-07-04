import App from "./components/App.jsx";
import Home from "./components/Home.jsx";
import Shop from "./components/Shop.jsx";
import Products from "./components/Products.jsx";
import ProductPage from "./components/ProductPage.jsx";
import Cart from "./components/Cart.jsx";
import About from "./components/AboutPage.jsx";
import productsLoader, { productLoader } from "./loaders.jsx";

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
			{
				path: "/products/:category/:id",
				element: <ProductPage />,
				loader: productLoader,
			},
			{
				path: "/cart",
				element: <Cart />,
			},
			{
				path: "/about",
				element: <About />,
			},
		],
	},
];

export default routes;

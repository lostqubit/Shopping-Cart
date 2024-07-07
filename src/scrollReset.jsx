import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
	const { pathname } = useLocation();

	useEffect(() => {
		const root = document.querySelector("#root");
		root.scrollTo({
			top: 0,
			left: 0,
			behavior: "instant",
		});
	}, [pathname]);

	return null;
}

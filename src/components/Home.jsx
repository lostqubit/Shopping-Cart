import "./Home.css";

export default function Home() {
	return <Header />;
}

function Header() {
	return (
		<header>
			<div>
				<h1>Elevate Your Style and Tech Game at Urban Fusion</h1>
				<p>
					Discover the perfect blend of contemporary style and urban edge at Urban Fusion. Our curated
					collection features the latest in fashion, jewelry, and electronics to elevate your lifestyle.
					Whether you&apos;re updating your wardrobe, accessorizing with stunning jewelry, or upgrading your
					tech, we offer unique pieces that combine quality with cutting-edge design. Explore our collection
					today and find your signature look. Ready to redefine your style?
				</p>
				<button>Start Shopping</button>
			</div>
			<img src="https://images.unsplash.com/photo-1574634534894-89d7576c8259?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
		</header>
	);
}

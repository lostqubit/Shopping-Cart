import "./Home.css";

export default function Home() {
	return (
		<>
			<Header />
			<CollectionsHome />
		</>
	);
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

function CollectionsHome() {
	return (
		<div className="collections-home">
			<p>Collections</p>
			<h2>Our Collections</h2>
			<div>
				<p>Explore our collections for the newest trends and timeless pieces.</p>
				<button>View all</button>
			</div>
			<div>
				<div>
					<img
						src="https://images.unsplash.com/photo-1527010154944-f2241763d806?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						alt="Men's Fashion"
					/>
					<p>Men&apos;s Fashion &#10230;</p>
				</div>
				<div>
					<img
						src="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						alt="Women's Fashion"
					/>
					<p>Women&apos;s Fashion &#10230;</p>
				</div>
				<div>
					<img
						src="https://images.unsplash.com/photo-1610454958462-571795784d98?q=80&w=1852&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						alt="Jewellery"
					/>
					<p>Jewellery &#10230;</p>
				</div>
				<div>
					<img
						src="https://images.unsplash.com/photo-1589894404892-7310b92ea7a2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						alt="Electronics"
					/>
					<p>Electronics &#10230;</p>
				</div>
			</div>
		</div>
	);
}

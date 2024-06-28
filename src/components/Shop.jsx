import "./Shop.css";

export default function Shop() {
	return (
		<>
			<ShopHeader />
			<ShopCollections />
		</>
	);
}

function ShopHeader() {
	return (
		<div className="shop-header">
			<p>COLLECTIONS</p>
			<h2>Discover Your Next Favorite Find</h2>
			<p>Explore our curated collection of top-rated products, handpicked just for you.</p>
		</div>
	);
}

function ShopCollections() {
	return (
		<div className="shop-collections">
			<div>
				<div>
					<p>ALL</p>
					<h2>All Products</h2>
					<p>
						Explore our wide range of top-quality products, designed to meet your every need. From everyday
						essentials to unique finds, we have something for everyone.
					</p>
					<button>See All</button>
				</div>
				<img src="https://images.unsplash.com/photo-1511556820780-d912e42b4980?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
			</div>
			<div>
				<div>
					<div>
						<p>FASHION</p>
						<h2>Men&apos;s fashion</h2>
						<p>Stylish and Trendy Men&apos;s Fashion Essentials</p>
						<button>See All</button>
					</div>
					<img src="https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
				</div>
				<div>
					<div>
						<p>FASHION</p>
						<h2>Women&apos;s fashion</h2>
						<p>Modern and Sophisticated Women&apos;s Fashion Picks</p>
						<button>See All</button>
					</div>
					<img src="https://images.unsplash.com/photo-1590159983013-d4ff5fc71c1d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
				</div>
				<div>
					<div>
						<p>ACCESSORIES</p>
						<h2>Jewellery</h2>
						<p>Exquisite and Timeless Jewellery Selections</p>
						<button>See All</button>
					</div>
					<img src="https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
				</div>
				<div>
					<div>
						<p>ELECTRONICS</p>
						<h2>Electronics</h2>
						<p>Cutting-Edge and Innovative Electronics Collections</p>
						<button>See All</button>
					</div>
					<img src="https://images.unsplash.com/photo-1550009158-9ebf69173e03?q=80&w=1802&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
				</div>
			</div>
		</div>
	);
}

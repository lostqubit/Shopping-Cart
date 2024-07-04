import "./AboutPage.css";

export default function About() {
	return (
		<>
			<AboutHeader />
			<AboutContent />
		</>
	);
}

function AboutHeader() {
	return (
		<div className="about-header">
			<h1>Our Story: Innovation in Every Product</h1>
			<p>
				Welcome to Urban Fusion, where quality products and exceptional service create an unforgettable shopping
				experience.
			</p>
		</div>
	);
}

function AboutContent() {
	return (
		<div className="about-content">
			<div>
				<h2>Urban Fusion Pvt Ltd.</h2>
				<p>
					At Urban Fusion, we believe that shopping should be a delightful and seamless experience. Founded
					with the mission to offer quality products at competitive prices, we have grown into a trusted
					destination for shoppers seeking variety, value, and convenience. Our curated selection spans
					multiple categories, ensuring that you find exactly what you need, whether it’s the latest tech
					gadgets, stylish home decor, or essential everyday items. Each product is handpicked by our team to
					meet our high standards of quality and innovation.
				</p>
				<p>
					Customer satisfaction is at the heart of everything we do. We are committed to providing an
					exceptional shopping experience from start to finish. Our dedicated customer service team is always
					ready to assist you with any questions or concerns, ensuring a smooth and enjoyable shopping
					journey. We continuously strive to improve our offerings and services based on your feedback. Thank
					you for choosing Urban Fusion – we look forward to serving you and making your shopping experience
					extraordinary.
				</p>
			</div>
			<div>
				<img src="https://images.unsplash.com/photo-1475998893297-4da48a6e037d?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
			</div>
		</div>
	);
}

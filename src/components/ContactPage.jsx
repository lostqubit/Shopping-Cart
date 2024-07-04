import emailIcon from "../assets/email.svg";
import chatIcon from "../assets/chat.svg";
import phoneIcon from "../assets/phone.svg";
import locationIcon from "../assets/location.svg";
import "./ContactPage.css";

export default function Contact() {
	return (
		<>
			<div className="contact-content">
				<div>
					<h2>Contact us</h2>
					<p>For any enquires, fill out the form to reach us!</p>
					<form>
						<div>
							<label htmlFor="name">Name</label>
							<input type="text" id="name" />
						</div>
						<div>
							<label htmlFor="email">Email</label>
							<input type="email" id="email" />
						</div>
						<div>
							<label htmlFor="message">Message</label>
							<textarea id="message" placeholder="Type your message" />
						</div>
						<div>
							<input id="terms" type="checkbox" />
							<label htmlFor="terms"> I accept the terms </label>
						</div>
						<button>Submit</button>
					</form>
				</div>
				<div>
					<img src="https://images.unsplash.com/photo-1709740227931-2055de0bcce6?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
				</div>
			</div>
			<div className="contact">
				<div className="contact-card">
					<img src={emailIcon} />
					<h3>Email</h3>
					<p>
						For any questions or assistance with your order, email our support team. We will respond within
						24-48 hours.
					</p>
					<p>support@urbanfusion.com</p>
				</div>
				<div className="contact-card">
					<img src={chatIcon} />
					<h3>Live Chat</h3>
					<p>
						For any questions or assistance with your order, chat with our support team live. We are here to
						help you in real-time.
					</p>
					<p>Start new chat</p>
				</div>
				<div className="contact-card">
					<img src={phoneIcon} />
					<h3>Phone</h3>
					<p>
						For any questions or assistance with your order, give us a call. Our support team is ready to
						help you promptly.
					</p>
					<p>+91 9024531257</p>
				</div>
				<div className="contact-card">
					<img src={locationIcon} />
					<h3>Office</h3>
					<p>
						For any inquiries or assistance, feel free to stop by our office. Our friendly staff is ready to
						help you with anything you need.
					</p>
					<p>123 Sample St, New Delhi IN</p>
				</div>
			</div>
		</>
	);
}

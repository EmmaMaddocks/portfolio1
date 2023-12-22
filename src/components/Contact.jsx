import {Box, Typography} from "@mui/material";
import {motion, useTransform} from "framer-motion";
import {useState} from "react";
import {useInView} from "react-cool-inview";

const Contact = ({page, setPage}) => {
	const [visibleState, setVisibleState] = useState("initial");

	const {ref, inView, scrollDirection, entry, observe, unobserve} = useInView({
		threshold: 0.18, // Default is 0
		onChange: ({
			inView,
			scrollDirection,
			entry,
			observe,
			unobserve,
			threshold,
		}) => {
			// If you wanted to apply more states at more steps:
			// if (entry.isIntersecting === true && entry.intersectionRatio < 0.15) {
			//   setVisibleState("partial");
			// } else if (
			//   entry.isIntersecting === true && entry.intersectionRatio > 0.3
			// ) {
			//   setVisibleState("visible");
			// }
		},
		onEnter: ({scrollDirection, entry, observe, unobserve}) => {
			console.log("visible");
			setVisibleState("visible");
			setPage("contact");
		},
		onLeave: ({scrollDirection, entry, observe, unobserve}) => {
			console.log("invisible");
			setVisibleState("initial");
		},
	});

	const sectionVariants = {
		// initial: {
		// 	opacity: 0.25,
		// 	scale: 0.9,
		// 	y: 40,
		// 	transition: {
		// 		type: "spring",
		// 		duration: 0.8,
		// 	},
		// },
		// visible: {
		// 	opacity: 1,
		// 	scale: 1,
		// 	y: 0,
		// 	transition: {
		// 		type: "spring",
		// 		duration: 0.8,
		// 	},
		// },
		initial: {
			y: 100,
			opacity: 0,
			transition: {
				type: "spring",
				mass: 1,
				damping: 10,
				stiffness: 80,
			},
		},
		visible: {
			y: 0,
			opacity: 1,
			transition: {
				type: "spring",
				mass: 1,
				damping: 10,
				stiffness: 80,
			},
		},
	};

	return (
		<Box className="contact_container" id="contact">
			<form>
				<Typography
					component={motion.h1}
					ref={observe}
					initial="initial"
					variants={sectionVariants}
					animate={visibleState}
					sx={{
						fontSize: 80,
						fontFamily: "Playfair Display",
						alignSelf: "flex-start",
					}}
					variant="h1"
				>
					Contact
				</Typography>
				<label for="name">Name</label>
				<input type="text"></input>
				<label for="email">Email</label>
				<input type="email"></input>
				<label for="message">Message</label>
				<input type="email" className="message_input"></input>

				<button class="button">
					Contact Me <div class="button__horizontal"></div>
					<div class="button__vertical"></div>
				</button>
			</form>
		</Box>
	);
};

export default Contact;

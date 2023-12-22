import {Box, Typography} from "@mui/material";
import {motion, useTransform} from "framer-motion";
import {useState} from "react";
import {useInView} from "react-cool-inview";

const Experience = ({page, setPage}) => {
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
			setPage("experience");
			setVisibleState("visible");
		},
		onLeave: ({scrollDirection, entry, observe, unobserve}) => {
			console.log("invisible");
			setVisibleState("initial");
		},
	});

	const sectionVariants = {
		initial: {
			opacity: 0.25,
			scale: 0.9,
			y: 40,
			transition: {
				type: "spring",
				duration: 0.8,
			},
		},
		visible: {
			opacity: 1,
			scale: 1,
			y: 0,
			transition: {
				type: "spring",
				duration: 0.8,
			},
		},
	};

	return (
		<Box className="experience_container" id="experience">
			<Typography
				component={motion.h1}
				ref={observe}
				// className="section"
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
				Experience
			</Typography>
			<h2>Northcoders — Trainee Software Engineer</h2>
			<p>
				Obtained a fully funded scholarship on the industry-led Northcoders
				Skills Bootcamp, a 13 week software engineering bootcamp.
			</p>
			<h2>Here's To Us - Business Owner</h2>
			<p>
				Founded a small E-commerce business and scaled it to a multi-six-figure
				company, turning over in excess of £750,000 during the COVID-19
				pandemic.
			</p>
			<h2>Freelance — Front-end web development</h2>

			<h2>Wm Morrisons PLC — Management Trainee</h2>
			<p>
				A three year sponsored degree program during which I spent time in
				placements within various departments including purchasing, quality
				control, merchandising, project management and production.
			</p>
		</Box>
	);
};

export default Experience;

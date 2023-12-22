import { Box, Button, Typography } from "@mui/material";
import { motion, useTransform } from "framer-motion";
import { useState } from "react";
import { useInView } from "react-cool-inview";

const About = ({ page, setPage }) => {
	const [visibleState, setVisibleState] = useState("initial");

	const { ref, inView, scrollDirection, entry, observe, unobserve } = useInView(
		{
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
			onEnter: ({ scrollDirection, entry, observe, unobserve }) => {
				console.log("visible");
				setPage("about");

				setVisibleState("visible");
			},
			onLeave: ({ scrollDirection, entry, observe, unobserve }) => {
				console.log("invisible");
				setVisibleState("initial");
			},
		}
	);

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
		<Box className="container" id="about">
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
				About
			</Typography>
			<Typography
				sx={{
					fontSize: 25,
					fontFamily: "Playfair Display",
					alignSelf: "flex-start",
					mb: 2,
				}}
			>
				I'm Emma and I am passionate about building creative, user friendly and
				memorable things for desktop and mobile devices.
			</Typography>
			<Typography sx={{ mb: 2 }}>
				Art and technology has always been a huge part of my life and I've never
				been afraid to just jump in and give it a go, whether it's Paint,
				Photoshop, Illustrator or CSS. I’ve been designing with computers since
				the day I first opened Microsoft Paint.
			</Typography>

			<Typography sx={{ mb: 2 }}>
				Whilst my love for design began as a teenager where I would design
				'Bebo' themes on photoshop for my friends, I began my coding journey
				later in life. After founding a successful laser cutting and UV printing
				studio which I ran for several years around my three children, I decided
				I wanted a change. I began building websites for small businesses in my
				spare time and found I loved combining my passion for design with coding
				and began taking on online course in full stack development in the
				evenings.
			</Typography>
			<Typography sx={{ mb: 2 }}>
				Hooked on coding, I decided to put all my effort in to learning to code
				and joined a full time bootcamp with Northcoders. Having finished the
				bootcamp in November 2022, I joined GS Systems as a software engineer,
				building full stack mobile and web applications for the hopsitality
				industry, primarily using React and React Native.
			</Typography>
			<Button variant="contained" sx={{ alignSelf: "flex-end" }}>
				MY CV
			</Button>
		</Box>
	);
};

export default About;
